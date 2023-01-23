import React, { useState } from 'react'
import WelcomePageIntroduction from './welcomePageComponents/WelcomePageIntroduction'
import WelcomePageUserInput from './welcomePageComponents/WelcomePageUserInput.js'
const WelcomePage = () => {
  const [getStarted,setGetStarted] = useState(false);
  const showNextPageHandler=(data)=>{
         setGetStarted(data)
  }
  return (
    <>
    {!getStarted && <WelcomePageIntroduction showNextPage={showNextPageHandler}></WelcomePageIntroduction>}
    {getStarted && <WelcomePageUserInput showNextPage={showNextPageHandler}></WelcomePageUserInput>}
    </>
  )
}

export default WelcomePage