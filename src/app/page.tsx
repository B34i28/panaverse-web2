'use client'
import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import Banner from './components/Banner'
import Iconintro from './components/Iconintro'
import Quarters from './components/Quarters'
import Specialt from './components/Specialt'

export default function Home() {
  return (
    <>
    <Box bgAttachment="fixed" bgImage="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?cs=srgb&dl=pexels-veeterzy-114979.jpg&fm=jpg">
      <Container maxW={1400}>
        <Iconintro />
        <Banner />
        <Quarters />
        <Specialt />
        </Container>
    </Box>
    </>
    
  )
}
