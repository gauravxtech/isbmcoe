
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FileUploadDialogProps {
  open: boolean;
  onClose: () => void;
  onUploadComplete: (url: string) => void;
  folder?: string;
}

const FileUploadDialog = ({ open, onClose, onUploadComplete, folder = 'uploads' }: FileUploadDialogProps) => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState('');
  const { toast } = useToast();

  const getFileCategory = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return 'img';
    if (mimeType.startsWith('video/')) return 'vid';
    if (mimeType.includes('pdf') || mimeType.includes('document') || mimeType.includes('word') || mimeType.includes('text')) return 'doc';
    return 'misc';
  };

  const generateSequentialPath = async (fileType: string, folder: string, extension: string) => {
    // Get existing files in the folder to determine next number
    const { data: existingFiles } = await supabase.storage
      .from('website-files')
      .list(`uploads/${fileType}/${folder}`);
    
    const nextNumber = (existingFiles?.length || 0) + 1;
    return `uploads/${fileType}/${folder}/${folder}-${nextNumber}.${extension}`;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size must be less than 10MB",
          variant: "destructive"
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      console.log('Starting file upload...');
      
      // Get file extension and category
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      const fileCategory = getFileCategory(file.type);
      
      // Generate structured path: uploads/img/banner/banner-1.jpg
      const filePath = await generateSequentialPath(fileCategory, folder, fileExt || 'bin');

      console.log('Uploading to structured path:', filePath);

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('website-files')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      console.log('Upload successful:', uploadData);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('website-files')
        .getPublicUrl(filePath);

      console.log('Public URL:', urlData.publicUrl);

      // Save to media library
      const fileName = filePath.split('/').pop() || 'unknown';
      const { error: dbError } = await supabase
        .from('media_library')
        .insert([{
          filename: fileName,
          original_filename: file.name,
          file_url: urlData.publicUrl,
          file_type: fileCategory,
          file_size: file.size,
          mime_type: file.type,
          alt_text: altText || file.name,
          folder: `${fileCategory}/${folder}`
        }]);

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      toast({
        title: "Success",
        description: "File uploaded successfully"
      });

      onUploadComplete(urlData.publicUrl);
      handleClose();
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: `Failed to upload file: ${error.message}`,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleClose = () => {
    setFile(null);
    setAltText('');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="file">Select Image</Label>
            <Input
              id="file"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              disabled={uploading}
            />
            {file && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>
          
          <div>
            <Label htmlFor="alt-text">Alt Text (optional)</Label>
            <Input
              id="alt-text"
              placeholder="Describe the image for accessibility"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              disabled={uploading}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClose} disabled={uploading}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={handleUpload} 
              disabled={!file || uploading}
              className="bg-college-primary"
            >
              <Upload className="h-4 w-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileUploadDialog;
