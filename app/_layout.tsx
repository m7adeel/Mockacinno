import { useEffect } from 'react';
import useAuthStore from '~/store/authStore';
import '../global.css';

import { router, Stack } from 'expo-router';

export default function Layout() {

  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.replace('/(auth)/sign_in');
    }

    if (user) {
      router.replace('/(tabs)');
    }
  }, [user]);

  return <Stack screenOptions={{
    headerShown: false,
    animation: 'fade_from_bottom',
    animationDuration: 250,
  }}>
    
  </Stack>;
}
