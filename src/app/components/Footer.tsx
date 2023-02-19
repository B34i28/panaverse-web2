'use client'
import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Container, Grid, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <Box bg="black">
        <Container maxW={1300}>
            <SimpleGrid textAlign={{base:"center",lg:"initial"}} spacing={"30px"} py={"30px"} templateColumns={{lg:"repeat(4,1fr)",base:"repeat(1,1fr)"}}>
                <Box>
                    <Heading color="white">About Us</Heading>
                    <Text pt={"20px"} pr={"40px"} color="gray">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                </Box>
                <Box>
                    <Heading color="white">Links</Heading>
                    <Grid pt={"20px"} color="gray">
                        <Link href="/">Home</Link>
                        <Link href="https://www.piaic.org/">PIAIC</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/about">About</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading color="white">Social Media</Heading>
                    <Grid pt={"20px"} color="gray">
                        <Link href="https://www.facebook.com/groups/panaverse">Facebook</Link>
                        <Link href="https://www.youtube.com/@panaverse/streams">Youtube</Link>
                        <Link href="https://twitter.com/Panaverse_edu">Twitter</Link>
                        <Link href="https://github.com/panaverse">Github</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading color="white">Contact Us</Heading>
                    <Grid pt="20px" color="gray">
                        <Link href="">+92-308-2220203</Link>
                        <Link href="">piaic@gmail.com</Link>
                        <Link href="">Karachi, Pakistan</Link>
                    </Grid>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
