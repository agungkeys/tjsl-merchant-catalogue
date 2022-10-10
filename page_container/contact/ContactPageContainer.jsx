import PropTypes from 'prop-types';
import ContactPageContainerDesktop from './ContactPageContainerDesktop';
import ContactPageContainerMobile from './ContactPageContainerMobile';

function ContactPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <ContactPageContainerMobile {...props} />;
  } else {
    return <ContactPageContainerDesktop {...props} />;
  }
}

ContactPageContainer.prototype = {
  isMobile: PropTypes.bool,
};

export default ContactPageContainer;
