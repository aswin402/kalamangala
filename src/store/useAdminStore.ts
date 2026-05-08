import { create } from 'zustand';
import { supabase } from '@/api/supabase';

interface AdminState {
  isLoading: boolean;
  user: { id: string; email: string } | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

export const useAdminStore = create<AdminState>()((set) => ({
  isLoading: false,
  user: null,

  login: async (email, password) => {
    set({ isLoading: true });

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      set({ isLoading: false });
      return { success: false, error: error.message };
    }

    if (data.user) {
      set({
        isLoading: false,
        user: { id: data.user.id, email: data.user.email || '' },
      });
      return { success: true };
    }

    set({ isLoading: false });
    return { success: false, error: 'Login failed' };
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
