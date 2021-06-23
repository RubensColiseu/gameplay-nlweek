import React from 'react';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';


import { SignIn } from './src/screens/Signin';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <Routes></Routes>
    </Background>
  );
}

