import BlogsPageContainerDesktop from './BlogsPageContainerDesktop';
import BlogsPageContainerMobile from './BlogsPageContainerMobile';
import PropTypes from 'prop-types';

function BlogsPageContainer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <BlogsPageContainerMobile {...props} />;
  } else {
    return <BlogsPageContainerDesktop {...props} />;
  }
}

BlogsPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default BlogsPageContainer;
