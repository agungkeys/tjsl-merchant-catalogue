import PropTypes from 'prop-types';
import BlogPageContainerDesktop from './BlogPageContainerDesktop';
import BlogPageContainerMobile from './BlogPageContainerMobile';

import { useQuery } from 'react-query';
import { fetchBlog } from '../../hooks/useBlog';
import STATUS_TYPES from '../../constants/statusTypes';

function BlogPageContainer(props) {
  const { isMobile, query, dataBlog } = props;

  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    ['blog'],
    () => fetchBlog({ slug: query?.slug }),
    {
      staleTime: 0,
      initialData:
        (dataBlog?.status === STATUS_TYPES.SUCCESS && dataBlog?.data) || {},
    },
  );

  props = {
    ...props,
    data,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  };

  if (isMobile) {
    return <BlogPageContainerMobile {...props} />;
  } else {
    return <BlogPageContainerDesktop {...props} />;
  }
}

BlogPageContainer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  query: PropTypes.object,
  dataBlog: PropTypes.object,
};

export default BlogPageContainer;
