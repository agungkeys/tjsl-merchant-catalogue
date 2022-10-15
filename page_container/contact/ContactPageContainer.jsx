import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import ContactPageContainerDesktop from './ContactPageContainerDesktop';
import ContactPageContainerMobile from './ContactPageContainerMobile';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function ContactPageContainer(props) {
  const { isMobile } = props;

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telp: yup.number().required(),
    message: yup.string().required(),
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  console.log("🚀 ~ file: ContactPageContainer.jsx ~ line 21 ~ ContactPageContainer ~ errors", errors)
  const onSubmit = data => console.log(data);

  props = {
    ...props,
    register,
    handleSubmit,
    errors,
    onSubmit
  }

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
