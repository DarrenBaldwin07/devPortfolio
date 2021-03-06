import { Box, Text, Image as Img, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { motion } from "framer-motion"

interface props {
    title: string
    img: string
}

const StackLogo = ({ title, img }: props) => {
    const [show, setShow] = useState(false)
    return (
        <VStack spacing='4'>
            <Box display={{base: 'none', md: 'block'}} visibility={show ? 'visible' : 'hidden'}>
                <motion.div animate={show ? { scale: 1.2 } : {}} transition={{duration: 0.5, ease: "easeOut"}}>
                    <Box w={100} textAlign='center' p={2} rounded='full' opacity={0.8} bg='brand.lightGrey' >
                        <Text color='white'>{title}</Text>
                    </Box>
                </motion.div>
            </Box>
            <Box h={100} onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} _hover={{cursor: 'pointer'}}>    
                <Img m={{base: 4, md: 0}} w={24} src={img} alt='stack logo'/>
            </Box>
        </VStack>
    )
}

export default StackLogo