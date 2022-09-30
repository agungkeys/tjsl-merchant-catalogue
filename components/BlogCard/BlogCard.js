import BlogCardDesktop from './BlogCardDesktop';
import BlogCardMobile from './BlogCardMobile';
import PropTypes from 'prop-types';

function BlogCard(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <BlogCardMobile {...props} />;
  } else {
    return <BlogCardDesktop {...props} />;
  }
}

BlogCard.propTypes = {
  isMobile: PropTypes.bool,
};

export default BlogCard;
