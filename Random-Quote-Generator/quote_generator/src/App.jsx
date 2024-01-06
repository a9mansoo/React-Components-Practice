import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import { Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { motion } from "framer-motion"

function App() {
  const [quote, setQuote] = useState({id: "A quote is a wish your heart makes",
                                      author: "By Me"});
  const { isLoading, response, getQuote } = useFetch();

  useEffect(() => {
      if (response !== null){
        setQuote(response)
      }
  }, [response]
  )

  const onClick = () => {
    getQuote()
  }

  return (
    <main>
      <motion.div animate={{ scale: isLoading ? 0 : 1 }} padding="10rem">
            <Text fontSize='lg' as="i">
                "{quote.id}"
            </Text>
            <Text fontSize="md" as="i" textAlign="right" display="block" marginTop="0.5rem">
                {quote.author}
            </Text>
            </motion.div>
          <Divider />
        <Button border="solid" variant='solid' textAlign="center" colorScheme='ghost' color="black" onClick={onClick} marginTop="2rem">
                    {isLoading? <Spinner></Spinner>: "Generate New Quote"}
        </Button>
    </main>
  )
}

export default App
