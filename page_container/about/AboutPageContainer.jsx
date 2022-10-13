import AboutPageContainerDesktop from './AboutPageContainerDesktop';
import AboutPageContainerMobile from './AboutPageContainerMobile';
import PropTypes from 'prop-types';

function AboutPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <AboutPageContainerMobile {...props} />;
  } else {
    return <AboutPageContainerDesktop {...props} />;
  }
}

AboutPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default AboutPageContainer;
