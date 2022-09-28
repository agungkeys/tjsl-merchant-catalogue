import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";

function Product(props) {
  const { isMobile, onMerchant } = props;

  if (isMobile) {
    return <ProductMobile {...props} />;
  } else {
    return <ProductDesktop {...props} />;
  }
}

export default Product;
