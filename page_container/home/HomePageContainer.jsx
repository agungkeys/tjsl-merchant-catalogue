import PropTypes from "prop-types";
import HomePageContainerDesktop from "./HomePageContainerDesktop";
import HomePageContainerMobile from "./HomePageContainerMobile";
function HomePageContainer(props) {
  const { isMobile } = props;
  if (isMobile) {
    return <HomePageContainerMobile {...props} />;
  } else {
    return <HomePageContainerDesktop {...props} />;
  }
}

HomePageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default HomePageContainer;
