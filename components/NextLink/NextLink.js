import Link from 'next/link';
import PropTypes from 'prop-types';

function NextLink(props) {
  const {
    link = { pathname: '/', query: {}, asPath: '/' },
    children,
    className,
    passHref,
    onClick,
    onMouseLeave,
    onMouseOver,
    style,
    ...rest
  } = props;

  const anchorProps = {
    className,
    onClick,
    onMouseLeave,
    onMouseOver,
  };

  if (typeof link === 'string') {
    return (
      <a style={style} href={link} {...anchorProps} {...rest}>
        {children}
      </a>
    );
  }

  if (typeof onClick === 'function') {
    return (
      <a style={style} {...anchorProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link
      as={link.asPath}
      href={{ pathname: link.pathname, query: link.query }}
      passHref
    >
      <a {...anchorProps} {...rest} style={style}>
        {children}
      </a>
    </Link>
  );
}

NextLink.propTypes = {
  link: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  passHref: PropTypes.string,
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  style: PropTypes.string,
};

export default NextLink;
