import { Heading,Box,Badge,Text,Link,Button,Flex, Container} from "@chakra-ui/react"
import React from 'react'

export default function Specialt() {
  return (
    <>
    <Box py="30px" px={{lg:"30px",base:"5px"}}>
        <Container maxW={1400}>
            <Heading>Specialized Tracks:</Heading>
            <Text>After completing the first three quarters the participants will select</Text>
            <Text>one or more specializations consisting of two courses each</Text>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Heading py="30px" pl={{lg:"30px",base:"5px"}}>1. Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
            <Flex py={{lg:"50px",base:"20px"}} display={{lg:"flex",base:"grid"}}>
                <Box flexBasis="50%" pl={{lg:"250px",base:"10px"}}>
                    <Heading>Quarter 4</Heading>
                    <Text pt="10px">Developing Smart Contracts and</Text>
                    <Text>Planet-Scale Web 3.0 Dapps</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter4a"}>Study Material</Button>
                </Box>
                <Box flexBasis="50%" pl={{lg:"50px",base:"10px"}} pt={{base:"30px",lg:"initial"}}>
                    <Heading>Quarter 5</Heading>
                    <Text pt="10px">Developing Planet-Scale Open Virtual </Text>
                    <Text>and Augmented Metaverse Experiences</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter5a"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Heading py="30px" pl={{lg:"30px",base:"5px"}}>2. Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
            <Flex py={{lg:"50px",base:"20px"}} display={{lg:"flex",base:"grid"}}>
                <Box flexBasis="50%" pl={{lg:"250px",base:"10px"}}>
                    <Heading>Quarter 4</Heading>
                    <Text pt="10px">Developing Planet-Scale Intelligent</Text>
                    <Text>APIs and Python Programming</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter4a"}>Study Material</Button>
                </Box>
                <Box flexBasis="50%" pl={{lg:"50px",base:"10px"}} pt={{base:"30px",lg:"initial"}}>
                    <Heading>Quarter 5</Heading>
                    <Text pt="10px">Deep Learning and MLOps</Text>
                    <Button mt="35px" colorScheme="teal" as={"a"} href={"/Quarter5a"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Heading py="30px" pl={{lg:"30px",base:"5px"}}>3. Cloud-Native Computing Specialization</Heading>
            <Flex py={{lg:"50px",base:"20px"}} display={{lg:"flex",base:"grid"}}>
                <Box flexBasis="50%" pl={{lg:"250px",base:"10px"}}>
                    <Heading>Quarter 4</Heading>
                    <Text pt="10px">Certified Kubernetes Application Developer (CKAD)</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter4a"}>Study Material</Button>
                </Box>
                <Box flexBasis="50%" pl={{lg:"50px",base:"10px"}} pt={{base:"30px",lg:"initial"}}>
                    <Heading>Quarter 5</Heading>
                    <Text pt="10px">Developing Multi-Cloud APIs using CDK </Text>
                    <Text>for Terraform</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter5a"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Heading py="30px" pl={{lg:"30px",base:"5px"}}>4. Ambient Computing and IoT Specialization</Heading>
            <Flex py={{lg:"50px",base:"20px"}} display={{lg:"flex",base:"grid"}}>
                <Box flexBasis="50%" pl={{lg:"250px",base:"10px"}}>
                    <Heading>Quarter 4</Heading>
                    <Text pt="10px">Ambient Computing with Voice Assistants</Text>
                    <Text>and Matter Protocol Devices</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter4a"}>Study Material</Button>
                </Box>
                <Box flexBasis="50%" pl={{lg:"50px",base:"10px"}} pt={{base:"30px",lg:"initial"}}>
                    <Heading>Quarter 5</Heading>
                    <Text pt="10px">Embedded Programming using</Text>
                    <Text>C and Rust</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter5a"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Heading py="30px" pl={{lg:"30px",base:"5px"}}>5. Genomics and Bioinformatics Specialization</Heading>
            <Flex py={{lg:"50px",base:"20px"}} display={{lg:"flex",base:"grid"}}>
                <Box flexBasis="50%" pl={{lg:"250px",base:"10px"}}>
                    <Heading>Quarter 4</Heading>
                    <Text pt="10px">Python for Biologists</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter4a"}>Study Material</Button>
                </Box>
                <Box flexBasis="50%" pl={{lg:"50px",base:"10px"}} pt={{base:"30px",lg:"initial"}}>
                    <Heading>Quarter 5</Heading>
                    <Text pt="10px">Bioinformatics with Python</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter5a"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Heading py="30px" pl={{lg:"30px",base:"5px"}}>6. Network Programmability and Automation Specialization</Heading>
            <Flex py={{lg:"50px",base:"20px"}} display={{lg:"flex",base:"grid"}}>
                <Box flexBasis="50%" pl={{lg:"250px",base:"10px"}}>
                    <Heading>Quarter 4</Heading>
                    <Text pt="10px">CCNA 200-301 Certification</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter4a"}>Study Material</Button>
                </Box>
                <Box flexBasis="50%" pl={{lg:"50px",base:"10px"}} pt={{base:"30px",lg:"initial"}}>
                    <Heading>Quarter 5</Heading>
                    <Text pt="10px">Network Programmability and Automation</Text>
                    <Button mt="10px" colorScheme="teal" as={"a"} href={"/Quarter5a"}>Study Material</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    </>
  )
}
