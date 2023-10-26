import {
  Box,
  Stack,
  Avatar,
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  InputLeftElement,
  Input,
  InputGroup,
  
} from '@chakra-ui/react'
import data from './data.json'
import ShoppingCartProvider from './context/ShoppingCartContext'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/Hi'
import DrawerContentDisplay from './components/DrawerContentDisplay'
import Hero from './components/Hero'
import Footer from './components/Footer'
import NavbarTypeItems from './components/NavbarTypeItems'

function App(  ) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filter, setFilter] = useState(data)

// const navbarItems= ['MEN','WOMEN','KIDS', 'HOME & LIVING', 'BEAUTY', 'STUDIO']

//   const handleAllClick = () => {
//     setFilter(data)
// }

//   const handleClick = (event:any) => {
//     const title = event.target.title;
//     const items = data.filter(item => item.type === title)
//     setFilter(items);
//   };

  return (
    <ShoppingCartProvider>
        <Box as="header" w={'100%'} position={'fixed'} bg={'white'} zIndex='1' shadow={'lg'} display={'flex'} justifyContent={'center'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px'}>
          <Stack flexDirection={{ base: 'column', sm:'row' }} justifyContent={'space-between'} alignItems={'center'} h={'20'} w={'95%'}>
                <HStack fontSize="md">
                  <Text m="0" p='0' bgGradient='linear(to-l, #7928CA, #FF0980)' bgClip='text' fontSize='2xl'
                    fontWeight='extrabold'>WeShop</Text>
                </HStack>
                <NavbarTypeItems />
                <InputGroup w="md" backgroundColor='#F5F4F7' borderColor='#F5F4F7' borderRadius={'3px'}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="muted" boxSize="5" />
                  </InputLeftElement>
                    <Input width={'30rem'} fontSize={'xs'} placeholder="Search for products, brands and more" />
                </InputGroup>
              <HStack w={'10%'}>
                <ButtonGroup variant="ghost" display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
                  <Stack>
                    <Avatar boxSize="6"  />
                    {/* <Text fontSize={'xs'}>Profile</Text> */}
                  </Stack>
                  <Stack>
                    <IconButton p={'0'} m={'0'} icon={<FaShoppingCart fontSize="1.25rem" onClick={onOpen}  />}  aria-label="" title="Add to cart" _hover={{ bgGradient:'linear(to-r, yellow.500, green.500)', color:'white'}} />
                    {/* <Text fontSize={'xs'}>Profile</Text> */}
                  </Stack>
                  <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                  >
                    <DrawerOverlay />
                    <DrawerContentDisplay />
                  </Drawer> 
                  <Stack>
                    <IconButton icon={<HiOutlineShoppingBag fontSize="1.50rem" />}  aria-label="" title="Orders" _hover={{ bgGradient:'linear(to-r, teal.500, pink.500)', color:'white'}}  />
                    {/* <Text fontSize={'xs'}>Profile</Text> */}
                  </Stack>
                </ButtonGroup>
              </HStack>
          </Stack>
        </Box>
        <Hero />
        <Footer />
    </ShoppingCartProvider>
  )
}

export default App





