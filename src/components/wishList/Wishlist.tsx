import { CiHeart } from "react-icons/ci";
import { Button, Stack, Text } from "@chakra-ui/react";
import { fontStyle } from "../../constants/style";

const Wishlist = () => {
  return (
    <Stack spacing={1} backgroundColor={"white"} position={"absolute"}>
      <Button
        w={"100%"}
        borderRadius={"2"}
        leftIcon={<CiHeart size={20} />}
        variant="outline"
        borderColor={"gray.300"}
        fontSize={11}
        padding={"10px"}
      >
        WISHLIST
      </Button>
      <Text fontSize={"13px"} color={"#535766"} pt={"10px"}>
        Sizes:L
      </Text>
      <Text {...fontStyle.xsBold}>Rs 450</Text>
    </Stack>
  );
};

export default Wishlist;
