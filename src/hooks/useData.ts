
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  bannerService,
  newsService,
  announcementService,
  marqueeService,
  mediaService,
  settingsService,
  profileService
} from '@/services/dataService';
import { useToast } from '@/hooks/use-toast';

// Banner hooks
export const useBanners = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: bannerService.getAll,
  });
};

export const useBannerMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const create = useMutation({
    mutationFn: bannerService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast({ title: 'Success', description: 'Banner created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => 
      bannerService.update(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast({ title: 'Success', description: 'Banner updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const remove = useMutation({
    mutationFn: bannerService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast({ title: 'Success', description: 'Banner deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { create, update, remove };
};

// News hooks
export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: newsService.getAll,
  });
};

export const usePublishedNews = () => {
  return useQuery({
    queryKey: ['news', 'published'],
    queryFn: newsService.getPublished,
  });
};

export const useNewsMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const create = useMutation({
    mutationFn: newsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      toast({ title: 'Success', description: 'News item created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => 
      newsService.update(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      toast({ title: 'Success', description: 'News item updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const remove = useMutation({
    mutationFn: newsService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      toast({ title: 'Success', description: 'News item deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { create, update, remove };
};

// Announcement hooks
export const useAnnouncements = () => {
  return useQuery({
    queryKey: ['announcements'],
    queryFn: announcementService.getAll,
  });
};

export const useActiveAnnouncements = () => {
  return useQuery({
    queryKey: ['announcements', 'active'],
    queryFn: announcementService.getActive,
  });
};

export const useAnnouncementMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const create = useMutation({
    mutationFn: announcementService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({ title: 'Success', description: 'Announcement created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => 
      announcementService.update(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({ title: 'Success', description: 'Announcement updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const remove = useMutation({
    mutationFn: announcementService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({ title: 'Success', description: 'Announcement deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { create, update, remove };
};

// Marquee hooks
export const useMarqueeTexts = () => {
  return useQuery({
    queryKey: ['marquee'],
    queryFn: marqueeService.getAll,
  });
};

export const useActiveMarqueeTexts = () => {
  return useQuery({
    queryKey: ['marquee', 'active'],
    queryFn: marqueeService.getActive,
  });
};

export const useMarqueeMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const create = useMutation({
    mutationFn: marqueeService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marquee'] });
      toast({ title: 'Success', description: 'Marquee text created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => 
      marqueeService.update(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marquee'] });
      toast({ title: 'Success', description: 'Marquee text updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const remove = useMutation({
    mutationFn: marqueeService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marquee'] });
      toast({ title: 'Success', description: 'Marquee text deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { create, update, remove };
};

// Media hooks
export const useMedia = () => {
  return useQuery({
    queryKey: ['media'],
    queryFn: mediaService.getAll,
  });
};

export const useMediaMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const upload = useMutation({
    mutationFn: ({ file, folder }: { file: File; folder?: string }) => 
      mediaService.uploadFile(file, folder),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['media'] });
      toast({ title: 'Success', description: 'File uploaded successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const remove = useMutation({
    mutationFn: mediaService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['media'] });
      toast({ title: 'Success', description: 'File deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { upload, remove };
};

// Settings hooks
export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: settingsService.getAll,
  });
};

export const usePublicSettings = () => {
  return useQuery({
    queryKey: ['settings', 'public'],
    queryFn: settingsService.getPublic,
  });
};

export const useSettingsMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const updateSetting = useMutation({
    mutationFn: ({ key, value }: { key: string; value: string }) => 
      settingsService.updateSetting(key, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
      toast({ title: 'Success', description: 'Setting updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { updateSetting };
};

// Profile hooks
export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: profileService.getCurrentProfile,
  });
};

export const useAllProfiles = () => {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: profileService.getAllProfiles,
  });
};

export const useProfileMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const updateProfile = useMutation({
    mutationFn: profileService.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
      toast({ title: 'Success', description: 'Profile updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  return { updateProfile };
};
