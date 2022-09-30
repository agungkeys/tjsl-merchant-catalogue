import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function NextLink(props) {
  const {
    link = { pathname: '/', query: {}, asPath: '/' },
    children,
    disabled,
    className,
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

  // Must add passHref to Link
  // let link;
  // if (href === undefined || href === '') {
  //   link = <a className={className}>{children}</a>;
  // }
  // if (href) {
  //   link = (
  //     <Link href={href} passHref>
  //       <a className={className}>{children}</a>
  //     </Link>
  //   )
  // }

  if (disabled) {
    return <>{children}</>;
  }

  if (typeof link === 'string') {
    return (
      <a style={style} href={link} {...anchorProps} {...rest}>
        {children}
      </a>
    );
  }

  if (typeof onClick === 'function') {
    return (
      <a style={{ ...style, cursor: 'pointer' }} {...anchorProps} {...rest}>
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
  link: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  passHref: PropTypes.string,
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default NextLink;
