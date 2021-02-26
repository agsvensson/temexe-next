import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  
  return (
    <ChallengesProvider>
    {/* objetos dentro do Provider tem acesso aos dados dentro daquele contexto */}
    <Component {...pageProps} />
    </ChallengesProvider>  
  ) 
}

export default MyApp
