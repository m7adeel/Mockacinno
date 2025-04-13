import '../global.css';

import { router, Stack } from 'expo-router';

export default function Layout() {

  return <Stack screenOptions={{
    headerShown: false,
    animation: 'fade_from_bottom',
    animationDuration: 250,
  }}>
    
  </Stack>;
}
