import {
  HStack,
  Stack,
  ButtonGroup,
  IconButton,
  Image,
  Box,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import logo from "../../constants/Images/logo.png";
import Profile from "./profile/Profile";
import Hamburger from "../../constants/svg/Hamburger";
import HeaderDrawer from "./HeaderDrawer";
import HeaderTypeFilter from "./HeaderTypeFilter";
import Search_icon from "../../constants/svg/SearchIcon";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShopCartContext";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovering, setIsHovering] = useState(false);
  const { bagProdCount } = useShoppingCart();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Box
      as="header"
      w="100vw"
      h="80px"
      position={"fixed"}
      bg={"white"}
      zIndex="2"
      shadow={"lg"}
      display={"flex"}
      justifyContent={"center"}
      boxShadow="0 4px 12px 0 rgba(0,0,0,.05)"
    >
      <Stack flexDirection="row" alignItems={"center"} w={"95%"} spacing={0}>
        <HStack>
          <Button
            variant={"ghost"}
            onClick={onOpen}
            display={{ base: "block", md: "none" }}
          >
            <Hamburger />
          </Button>
          <HeaderDrawer isOpen={isOpen} onClose={onClose} />
          <Link to="/">
            <Image w={{ base: "200px", md: "150px" }} src={logo} />
          </Link>
        </HStack>

        <HeaderTypeFilter />

        <HStack
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Button
            display={{ base: "block", lg: "none" }}
            alignItems="center"
            variant={"ghost"}
          >
            <Search_icon />
          </Button>
          <Profile
            isHovering={isHovering}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <Stack>
            <IconButton
              icon={<CiHeart size={25} />}
              aria-label=""
              title="wishlist"
              variant="ghost"
              _hover={{ variant: "ghost" }}
              onClick={() => navigate("/wishlist-page")}
            />
            {/* <Text fontSize={'xs'}>Profile</Text> */}
          </Stack>
          <Stack position="relative">
            <IconButton
              icon={<HiOutlineShoppingBag fontSize="1.50rem" />}
              aria-label=""
              title="bag"
              variant="ghost"
              _hover={{ variant: "ghost" }}
              onClick={() => navigate("/bag-page")}
            />
            {bagProdCount === 0 ? null : (
              <Text
                fontSize={"12"}
                fontWeight={"500"}
                p="1px 6px"
                position="absolute"
                left="25"
                bottom={"5"}
                color="white"
                bg={"#f16565"}
                borderRadius={"50%"}
              >
                {bagProdCount}
              </Text>
            )}
            {/* <Text fontSize={'xs'}>Profile</Text> */}
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Header;
