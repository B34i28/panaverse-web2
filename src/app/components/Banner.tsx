import React from 'react'
import { Box, Heading, Button, Container, Text,Flex, SimpleGrid } from '@chakra-ui/react'
import png from './../../../public/gettyimages.webp'
import Image from 'next/image'
import money from './../../../public/download.jpg'


export default function Banner() {
  return (
    <>
        <Box>
            <Container maxW={1400}>
                <Flex pt={{lg:"130px",base:"40px"}} pb="70px" px="30px" display={{base:"grid",lg:"flex"}}>
                    <Box flexBasis="50%">
                        <Heading>Getting Ready for the Next Generation and Future of the Internet Web 3.0 and Metaverse</Heading>
                        <Text pt="10px"> Join a 13 Trillion Dollar Industry with 5 Billion Users</Text>
                        <Button mt="10px" size="lg" colorScheme={'teal'}>More Info</Button>
                    </Box>
                    <Box flexBasis="50%" mt={{base:"20px"}}>
                        <Image height="500" width="500" src={png} alt='metaverse' />
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Box>
            <Container maxW={1400}>
                <Flex gap="100px" pt={{lg:"100px",base:"10px"}} pb="50px" display={{base:"grid",lg:"flex"}}>
                    <Box flexBasis="50%">
                        <Image src={money} height="450" width="450" alt="money" />
                    </Box>
                    <Box flexBasis="50%">
                        <Heading>Earn While You Learn</Heading>
                        <Text pr="30px" pt="10px">In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning.</Text>
                        <Button mt="10px" colorScheme={'teal'}>Read More</Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    </>
    )
}
