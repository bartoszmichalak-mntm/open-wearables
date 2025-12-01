import { createFileRoute, redirect } from '@tanstack/react-router';
import { isAuthenticated } from '@/lib/auth/session';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    // Skip redirect during SSR - localStorage is not available on the server
    if (typeof window === 'undefined') {
      return;
    }
    // Redirect to dashboard if authenticated, otherwise to login
    if (isAuthenticated()) {
      throw redirect({
        to: '/dashboard',
      });
    } else {
      throw redirect({
        to: '/login',
      });
    }
  },
});
