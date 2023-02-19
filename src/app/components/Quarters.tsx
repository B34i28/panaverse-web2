import { Heading,Box,Badge,Text,Flex,Link,Button ,Stack, Container} from "@chakra-ui/react"
import React from 'react'


export default function Quarters() {
  return (
    <>
    <Box>
        <Container maxW={1400}>
            <Heading py={{lg:"30px",base:"30px"}} textAlign={{lg:"center",base:"left"}}>Core Courses (Common in All Specializations)</Heading>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Flex display={{base:"grid",lg:"flex"}} py={{lg:"50px",base:"10px"}} px={{lg:"30px",base:"10px"}}>
                <Box flexBasis="33.3%">
                    <Heading>Quarter 1</Heading>
                    <Text pb="20px" >Object-Oriented <br/>Programming using TypeScript</Text><br/>
                    <Button as={"a"} colorScheme="teal" href={"/Quarter1"}>Study Material</Button>
                </Box>
                <Box pt={{base:"30px",lg:"initial"}} flexBasis="33.3%">
                    <Heading>Quarter 2</Heading>
                    <Text pb="20px"> Next.js 13, cloud Apps <br/> API's</Text><br/>
                    <Button as={"a"} colorScheme="teal" href={"/Quarter2"}>Study Material</Button>
                </Box>
                <Box pt={{base:"30px",lg:"initial"}} pb={{base:"20px"}} flexBasis="33.3%">
                    <Heading>Quarter 3</Heading>
                    <Text>Dollar Making Bootcamp<br/>Full-Stack Template and API Product Development</Text><br/>
                    <Button colorScheme="teal" as={"a"} href={"/Quarter3"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    </>
  )
}
