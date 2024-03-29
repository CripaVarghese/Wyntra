import { Stack, Text } from "@chakra-ui/react";
import { fontStyle } from "../../constants/style";

const ProductSpec = () => {
  return (
    <Stack py="20px">
      {productSpecArray.data.map((item) => (
        <Stack key={item.id}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            {item.mainHeader}
          </Text>
          <Text fontSize={"sm"}>{item.des}</Text>
          {item.subHeader.map((subHeader) => (
            <>
              <Text {...fontStyle.smBold}>{subHeader.header}</Text>
              <Text fontSize={"sm"}>{subHeader?.des}</Text>
            </>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default ProductSpec;

interface productSpecArrayType {
  data: {
    id: number;
    mainHeader: string;
    des: string;
    subHeader: {
      header: string;
      des?: string | undefined;
      des2?: string | undefined;
    }[];
  }[];
}

const productSpecArray: productSpecArrayType = {
  data: [
    {
      id: 1,
      mainHeader: "PRODUCT DETAILS",
      des: "Teal green Tropical printed T-shirt, has a round neck, and long sleeves",
      subHeader: [
        {
          header: "Size & Fit",
          des: "Slim Fit",
          des2: "The model (height 6') is wearing a size M",
        },
        {
          header: "Material & Care",
          des: "Material: 100% Super Combed Cotton",
          des2: "Machine Wash",
        },
        {
          header: "Complete The Look",
          des: "Made of cotton, you'll love the high-quality fit and feel of this Urbano Fashion tee. This teal item can be teamed with fitted jeans for a clean look or lounge shorts for casual weekend wear.",
        },
      ],
    },
  ],
};
