import { ChakraProvider, theme } from '@chakra-ui/react'
import React, { useRef, useEffect, useState } from 'react'
import FAQ from './components/FAQ'
import Navbar from './components/Navbar'
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll';
import {key} from './APIKEY'

const App = () => {

  const [index, setIndex] = useState(null)
  const [toggleColorFlag, setToggleColorFlag] = useState(false)

  const alanBtnInstance = useRef(null);

  useEffect(() => {
      if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
              key: key,
              onCommand: (commandData) => {
                  if (commandData.command === 'gotoFaq') {
                    scroller.scrollTo(`accordion-item-${commandData.gaqId}`,{
                        duration: 800,
                        delay: 0,
                        smooth: 'easeInOutQuart'
                      }
                    )
                    setIndex(commandData.faqId - 1)
                  } else if (commandData.command === 'toggleColorMode') {
                    setToggleColorFlag(flag => !flag)
                  }
              }
          })
      }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag}/>
      <FAQ index={index} setIndex={setIndex}/>
    </ChakraProvider>
  )
}


export default App
