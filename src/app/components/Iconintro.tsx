import { Heading,Box,Flex,Badge,Text,Stack, Container} from "@chakra-ui/react"
import React from 'react'
import Link from "next/link"
import { Image } from '@chakra-ui/react'

export default function Iconintro() {
  return (
    <Box>
        <Container maxW={1400}>
            <Flex direction={{base:"column",md:"column" ,lg:"row"}} pl={"20px"} >
                <Box>
                    <Image src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" 
                        alt="PanaVerse DAO"  pl="10px"
                        boxSize={"325px"} />
                </Box>
                <Box pt={"50px"} textAlign={"center"}>      
                    <Heading mb={"20px"} as="h1" fontSize={{lg:"66px",base:"40px"}}>Certified Web 3.0 and Metaverse Developer</Heading>
                    <Text as="b" fontSize="20px">A One and Quarter Years Panaverse DAO Earn as you Learn Program</Text>
                </Box>
            </Flex>
        </Container>
    </Box>
  )
}
