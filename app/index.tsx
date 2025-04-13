import { Stack, Link, router, Redirect } from 'expo-router';
import { useEffect } from 'react';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  

  return (
    <>
      <Redirect href={'/(tabs)'} />
      {/* <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/(auth)/sign_up', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container> */}
    </>
  );
}
