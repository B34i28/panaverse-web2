'use client'
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'

export default function page() {
  return (
    <>
      <Home title="About" src="https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg" />
      <Box>
        <Container maxW={1300}>
          <Flex py="50px" display={{lg:"flex",base:"grid"}}>
            <Box flexBasis="50%"><Image mx="auto" alt='President' src="https://www.piaic.org/static/media/president-png.5b5f05c1.png"/></Box>
            <Box flexBasis="50%" px={{base:"20px"}} mt={{base:"10px"}}>
              <Heading>Dr. Arif Alvi</Heading>
              <Text mt="5px">Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
              <Text mt="5px">Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</Text>
              <Text mt="5px">President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1300}>
          <Flex py="50px" display={{lg:"flex",base:"grid"}}>
            <Box flexBasis="50%" px={{base:"20px"}}>
              <Heading>Panaverse</Heading>
              <Text mt="5px">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
            </Box>
            <Box flexBasis="50%" mt={{base:"20px"}}><Image mx="auto" alt='Panaverse' src="https://www.panaverse.co/red-p-logo-text_dao_croped.png"/></Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1300}>
          <Flex py="50px" display={{lg:"flex",base:"grid"}}>
            <Box flexBasis="50%" px={{base:"20px"}}>
              <Heading>Zia Khan</Heading>
              <Heading mt="10px">The Legend</Heading>
            </Box>
            <Box flexBasis="50%" mt={{base:"20px"}}><Image width="500px" mx="auto" alt='Zia Khan' src="https://upload.wikimedia.org/wikipedia/en/0/03/Zia-Ullah-Khan.jpg"/></Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
