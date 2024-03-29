import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import WyntraUser_icon from "../../constants/svg/WyntraUserIcon";
import RightArrow_icon from "../../constants/svg/RightArrowIcon";
import { fontStyle } from "../../constants/style";

const HeaderDrawer = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent h="100%">
        <DrawerHeader color="white" bg="#3f3947" h="50%">
          <Stack alignItems={"flex-start"} py="10px">
            <HStack
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              w="100%"
              position={"relative"}
            >
              <Button bg="white" p="5px" w="16%" h="100%" borderRadius={"3px"}>
                <WyntraUser_icon />
              </Button>
              <DrawerCloseButton color={"white"} w="0px" />
            </HStack>

            <HStack
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              w="100%"
              pt="12px"
            >
              <Text {...fontStyle.smBold}>Wyntra User</Text>
              <RightArrow_icon />
            </HStack>
          </Stack>
        </DrawerHeader>

        {/* <DrawerBody>
        </DrawerBody> */}

        {/* <DrawerFooter>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default HeaderDrawer;
