export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      announcements: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          end_date: string | null
          id: string
          priority: number | null
          start_date: string | null
          status: string | null
          target_audience: string | null
          title: string
          type: string | null
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          end_date?: string | null
          id?: string
          priority?: number | null
          start_date?: string | null
          status?: string | null
          target_audience?: string | null
          title: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          end_date?: string | null
          id?: string
          priority?: number | null
          start_date?: string | null
          status?: string | null
          target_audience?: string | null
          title?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      banners: {
        Row: {
          created_at: string
          cta_link: string | null
          cta_text: string | null
          display_order: number | null
          highlight_text: string | null
          id: string
          image_url: string | null
          status: string | null
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          cta_link?: string | null
          cta_text?: string | null
          display_order?: number | null
          highlight_text?: string | null
          id?: string
          image_url?: string | null
          status?: string | null
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          cta_link?: string | null
          cta_text?: string | null
          display_order?: number | null
          highlight_text?: string | null
          id?: string
          image_url?: string | null
          status?: string | null
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      courses: {
        Row: {
          code: string
          created_at: string
          credits: number
          department: string
          description: string | null
          id: string
          name: string
          status: string
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          credits?: number
          department: string
          description?: string | null
          id?: string
          name: string
          status?: string
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          credits?: number
          department?: string
          description?: string | null
          id?: string
          name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      departments: {
        Row: {
          achievements: string[] | null
          code: string
          created_at: string
          description: string | null
          facilities: string[] | null
          hod_name: string | null
          id: string
          image_url: string | null
          name: string
          programs: string[] | null
          status: string | null
          student_count: number | null
          updated_at: string
        }
        Insert: {
          achievements?: string[] | null
          code: string
          created_at?: string
          description?: string | null
          facilities?: string[] | null
          hod_name?: string | null
          id?: string
          image_url?: string | null
          name: string
          programs?: string[] | null
          status?: string | null
          student_count?: number | null
          updated_at?: string
        }
        Update: {
          achievements?: string[] | null
          code?: string
          created_at?: string
          description?: string | null
          facilities?: string[] | null
          hod_name?: string | null
          id?: string
          image_url?: string | null
          name?: string
          programs?: string[] | null
          status?: string | null
          student_count?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      marquee_texts: {
        Row: {
          created_at: string
          id: string
          link: string | null
          priority: number | null
          status: string | null
          text: string
          type: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          link?: string | null
          priority?: number | null
          status?: string | null
          text: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          link?: string | null
          priority?: number | null
          status?: string | null
          text?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      media_library: {
        Row: {
          alt_text: string | null
          caption: string | null
          created_at: string
          file_size: number
          file_type: string
          file_url: string
          filename: string
          folder: string | null
          id: string
          mime_type: string
          original_filename: string
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_size: number
          file_type: string
          file_url: string
          filename: string
          folder?: string | null
          id?: string
          mime_type: string
          original_filename: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_size?: number
          file_type?: string
          file_url?: string
          filename?: string
          folder?: string | null
          id?: string
          mime_type?: string
          original_filename?: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      news_events: {
        Row: {
          category: string
          content: string | null
          created_at: string
          created_by: string | null
          event_date: string | null
          excerpt: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          status: string | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          category: string
          content?: string | null
          created_at?: string
          created_by?: string | null
          event_date?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          status?: string | null
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string | null
          created_at?: string
          created_by?: string | null
          event_date?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          status?: string | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          recipient_id: string | null
          recipient_type: string | null
          status: string | null
          title: string
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          recipient_id?: string | null
          recipient_type?: string | null
          status?: string | null
          title: string
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          recipient_id?: string | null
          recipient_type?: string | null
          status?: string | null
          title?: string
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          department: string | null
          email: string
          full_name: string | null
          id: string
          phone: string | null
          role: string
          status: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          department?: string | null
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          role?: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          department?: string | null
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      students: {
        Row: {
          created_at: string | null
          department: string | null
          email: string
          enrollment_no: string | null
          full_name: string
          id: string
          status: string | null
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          email: string
          enrollment_no?: string | null
          full_name: string
          id?: string
          status?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string | null
          email?: string
          enrollment_no?: string | null
          full_name?: string
          id?: string
          status?: string | null
        }
        Relationships: []
      }
      system_activities: {
        Row: {
          activity_name: string
          activity_type: string
          created_at: string
          description: string | null
          id: string
          user_name: string | null
        }
        Insert: {
          activity_name: string
          activity_type?: string
          created_at?: string
          description?: string | null
          id?: string
          user_name?: string | null
        }
        Update: {
          activity_name?: string
          activity_type?: string
          created_at?: string
          description?: string | null
          id?: string
          user_name?: string | null
        }
        Relationships: []
      }
      system_metrics: {
        Row: {
          created_at: string
          description: string | null
          id: string
          metric_name: string
          metric_type: string
          metric_value: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          metric_name: string
          metric_type?: string
          metric_value: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          metric_name?: string
          metric_type?: string
          metric_value?: string
          updated_at?: string
        }
        Relationships: []
      }
      system_monitoring: {
        Row: {
          active_users: number
          cpu_usage: number
          database_size: string
          disk_usage: number
          id: string
          memory_usage: number
          pending_updates: number
          recorded_at: string
          system_uptime: string
        }
        Insert: {
          active_users?: number
          cpu_usage?: number
          database_size?: string
          disk_usage?: number
          id?: string
          memory_usage?: number
          pending_updates?: number
          recorded_at?: string
          system_uptime?: string
        }
        Update: {
          active_users?: number
          cpu_usage?: number
          database_size?: string
          disk_usage?: number
          id?: string
          memory_usage?: number
          pending_updates?: number
          recorded_at?: string
          system_uptime?: string
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          allowed_file_types: string[] | null
          created_at: string | null
          default_language: string | null
          email_notifications: boolean | null
          id: string
          maintenance_mode: boolean | null
          max_file_size: number | null
          site_description: string | null
          site_name: string
          sms_notifications: boolean | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          allowed_file_types?: string[] | null
          created_at?: string | null
          default_language?: string | null
          email_notifications?: boolean | null
          id?: string
          maintenance_mode?: boolean | null
          max_file_size?: number | null
          site_description?: string | null
          site_name: string
          sms_notifications?: boolean | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          allowed_file_types?: string[] | null
          created_at?: string | null
          default_language?: string | null
          email_notifications?: boolean | null
          id?: string
          maintenance_mode?: boolean | null
          max_file_size?: number | null
          site_description?: string | null
          site_name?: string
          sms_notifications?: boolean | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      teachers: {
        Row: {
          created_at: string
          department: string | null
          id: string
          name: string
          position: string
          qualification: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          department?: string | null
          id?: string
          name: string
          position: string
          qualification: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          department?: string | null
          id?: string
          name?: string
          position?: string
          qualification?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string | null
          email_notifications: boolean | null
          id: string
          language: string | null
          sms_notifications: boolean | null
          theme: string | null
          two_factor_auth: boolean | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email_notifications?: boolean | null
          id?: string
          language?: string | null
          sms_notifications?: boolean | null
          theme?: string | null
          two_factor_auth?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email_notifications?: boolean | null
          id?: string
          language?: string | null
          sms_notifications?: boolean | null
          theme?: string | null
          two_factor_auth?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      website_pages: {
        Row: {
          content: string | null
          created_at: string
          created_by: string | null
          display_order: number | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_keywords: string | null
          page_type: string | null
          slug: string
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          display_order?: number | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string | null
          page_type?: string | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          display_order?: number | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string | null
          page_type?: string | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      website_settings: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          is_public: boolean | null
          setting_key: string
          setting_type: string | null
          setting_value: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean | null
          setting_key: string
          setting_type?: string | null
          setting_value?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean | null
          setting_key?: string
          setting_type?: string | null
          setting_value?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
