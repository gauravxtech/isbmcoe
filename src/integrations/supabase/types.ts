export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
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
          updated_at?: string
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
