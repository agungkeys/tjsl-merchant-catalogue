import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import PropTypes from 'prop-types';

function Header(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <HeaderMobile {...props} />;
  } else {
    return <HeaderDesktop {...props} />;
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool,
};

export default Header;
