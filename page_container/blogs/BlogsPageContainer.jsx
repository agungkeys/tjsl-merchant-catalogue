import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import BlogsPageContainerDesktop from './BlogsPageContainerDesktop';
import BlogsPageContainerMobile from './BlogsPageContainerMobile';
import { fetchBlogs } from '../../hooks/useBlogs';

function BlogsPageContainer(props) {
  const { isMobile } = props;

  const { 
    data: dataBlogs, 
    isError: isErrorBlogs, 
    isLoading: isLoadingBlogs, 
    isFetching: isFetchingBlogs, 
    isSuccess: isSuccessBlogs
  } = useQuery(
    ['blogs'],
		() => fetchBlogs({ sort: 'desc'}),
		{
      staleTime: 0,
		},
  );

  props = {
    ...props,
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
  }

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
