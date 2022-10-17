import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import ContactPageContainerDesktop from './ContactPageContainerDesktop';
import ContactPageContainerMobile from './ContactPageContainerMobile';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function ContactPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <ContactPageContainerMobile {...props} />;
  } else {
    return <ContactPageContainerDesktop {...props} />;
  }
}

ContactPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default ContactPageContainer;
