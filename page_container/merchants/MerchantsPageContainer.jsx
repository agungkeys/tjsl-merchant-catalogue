import PropTypes from "prop-types";
import MerchantsPageContainerDesktop from "./MerchantsPageContainerDesktop";
import MerchantsPageContainerMobile from "./MerchantsPageContainerMobile";

function MerchantsPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <MerchantsPageContainerMobile {...props} />;
  } else {
    return <MerchantsPageContainerDesktop {...props} />;
  }
}

MerchantsPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default MerchantsPageContainer;
