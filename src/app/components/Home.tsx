import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello:any) {
  return (
    <Box bgImage={hello.src} bgAttachment='fixed' py="200px" bgSize='cover'>
        <Container maxW={1300}>
            <Heading color="black" >{hello.title}</Heading>
        </Container>
    </Box>
  )
}
