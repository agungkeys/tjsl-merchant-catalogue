import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import BlogsPageContainerDesktop from './BlogsPageContainerDesktop';
import BlogsPageContainerMobile from './BlogsPageContainerMobile';
import { fetchBlogs } from '../../hooks/useBlogs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function BlogsPageContainer(props) {
  const { isMobile, query } = props;
  const { page, perPage } = query;
  const Router = useRouter();

  const {
    data: dataBlogs,
    isError: isErrorBlogs,
    isLoading: isLoadingBlogs,
    isFetching: isFetchingBlogs,
    isSuccess: isSuccessBlogs,
    refetch: refetchBlogs,
  } = useQuery(['blogs'], () => fetchBlogs({ page, perPage, sort: 'desc' }), {
    staleTime: 0,
  });

  function fetchPagination(page) {
    page = JSON.stringify(page);
    Router.push(`/blog?page=${page || 1}&perPage=${perPage || `9`}`);
  }

  useEffect(() => {
    if (page || perPage) {
      refetchBlogs();
    }
  }, [page, perPage]);

  props = {
    ...props,
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
    fetchPagination,
  };

  if (isMobile) {
    return <BlogsPageContainerMobile {...props} />;
  } else {
    return <BlogsPageContainerDesktop {...props} />;
  }
}

BlogsPageContainer.propTypes = {
  isMobile: PropTypes.bool,
  query: PropTypes.object,
};

export default BlogsPageContainer;
