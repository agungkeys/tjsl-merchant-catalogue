import PropTypes from 'prop-types';
import BlogPageContainerDesktop from './BlogPageContainerDesktop';
import BlogPageContainerMobile from './BlogPageContainerMobile';

function BlogPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <BlogPageContainerMobile {...props} />;
  } else {
    return <BlogPageContainerDesktop {...props} />;
  }
}

BlogPageContainer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default BlogPageContainer;
