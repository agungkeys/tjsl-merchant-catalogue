import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";
import PropTypes from 'prop-types';

function Product(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <ProductMobile {...props} />;
  } else {
    return <ProductDesktop {...props} />;
  }
}

Product.propTypes = {
  isMobile: PropTypes.bool,
};

export default Product;
