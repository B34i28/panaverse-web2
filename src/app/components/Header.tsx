'use client'
import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <Box boxShadow={"lg"} pt="10px" position="fixed">
        <Container maxW={1400}>
            <SimpleGrid templateColumns="repeat(2,1fr)">
                <Flex display={{base:"flex",lg:"flex"}} placeItems={"center"} ml={{lg:"750px",base:"none"}} color={'black'} fontSize="15" fontWeight={"semibold"} gap={{lg:7,base:3}}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="https://www.piaic.org/">PIAIC</Link>
                    <Link href="/contact">Contact</Link>
                </Flex>
                <Box mb={"5px"}><Button colorScheme={"teal"} ml={{base:"5px"}} mr={{base:"15px"}} float={'right'} as="a" href="https://portal.piaic.org/signup">Apply</Button></Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
