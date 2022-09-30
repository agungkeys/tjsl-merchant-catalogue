import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import PropTypes from 'prop-types';

function Footer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <FooterMobile {...props} />;
  } else {
    return <FooterDesktop {...props} />;
  }
}

Footer.propTypes = {
  isMobile: PropTypes.bool,
};

export default Footer;
