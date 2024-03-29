import {
  Button,
  Grid,
  GridItem,
  Stack,
  Text,
  chakra,
  // useDisclosure,
} from "@chakra-ui/react";
import { fontStyle } from "../../constants/style";
import { useShoppingCart } from "../../context/ShopCartContext";
import ProductInCart from "../category/ProductInCart";
import { useNavigate, useParams } from "react-router-dom";
// import ModalCart from "../ModalCart";

const WishlistProdAdded = ({ cartItems }: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { increaseItemBagQuantity, cartProdCount } = useShoppingCart();
  // const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Stack w={"100%"} h={"100vh"} pt="40px" alignItems={"center"}>
      <Stack w={"90%"} h={"400px"} gap={10}>
        <Text fontWeight={"700"} fontSize={"16px"}>
          My Wishlist{" "}
          <chakra.span color={"#282828"} fontWeight={"normal"} fontSize={"md"}>
            {cartProdCount} item
          </chakra.span>
        </Text>
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={4}
          h={"100%"}
          position={"relative"}
        >
          {cartItems &&
            cartItems.map((item: { id: any }) => (
              <GridItem w={"90%"} border={"1px solid #e9e9eb"} key={id}>
                <ProductInCart key={item.id} {...item} />
                <Button
                  color={"#ff3f6c"}
                  variant={"outline"}
                  borderRadius={"none"}
                  w="100%"
                  mt="25px"
                  {...fontStyle.xsBold}
                  // onClick={onOpen}
                  onClick={() => {
                    increaseItemBagQuantity(item.id);
                    navigate("/bag-page");
                  }}
                >
                  MOVE TO BAG
                </Button>
                {/* <ModalCart isOpen={isOpen} onClose={onClose} /> */}
              </GridItem>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default WishlistProdAdded;
