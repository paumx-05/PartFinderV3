'use client';

import { useSessionMock } from './use-session-mock';

export function useAuth() {
  const { user, isAuthenticated, refresh, logout } = useSessionMock();

  return {
    user,
    isAuthenticated,
    refresh,
    logout,
  };
}
