import PropTypes from 'prop-types';
import MerchantPageContainerDesktop from './MerchantPageContainerDesktop';
import MerchantPageContainerMobile from './MerchantPageContainerMobile';

function MerchantPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <MerchantPageContainerMobile {...props} />;
  } else {
    return <MerchantPageContainerDesktop {...props} />;
  }
}

MerchantPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default MerchantPageContainer;
