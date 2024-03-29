import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Home } from './src/pages/Home'

export default function App() {
  useLayoutEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Home />
    </>
  )
}