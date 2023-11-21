import { Grid, GridItem, Image } from "@chakra-ui/react";
import { selectedProductData } from "../../constants/SelectedProductData";

const SelectedProduct = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
      {selectedProductData.data.map((item) => (
        <GridItem>
          <Image src={item.url} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default SelectedProduct;
