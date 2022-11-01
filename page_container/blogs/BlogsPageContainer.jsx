import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import BlogsPageContainerDesktop from './BlogsPageContainerDesktop';
import BlogsPageContainerMobile from './BlogsPageContainerMobile';
import { fetchBlogs } from '../../hooks/useBlogs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchBlogCategories } from '../../hooks/useBlogCategories';

function BlogsPageContainer(props) {
  const { isMobile, query } = props;
  const { category, page, perPage } = query;
  const Router = useRouter();

  const {
    data: dataBlogs,
    isError: isErrorBlogs,
    isLoading: isLoadingBlogs,
    isFetching: isFetchingBlogs,
    isSuccess: isSuccessBlogs,
    refetch: refetchBlogs,
  } = useQuery(
    ['blogs'],
    () => fetchBlogs({ page, perPage, sort: 'desc', category }),
    {
      staleTime: 0,
    },
  );

  const {
    data: dataBlogCategories,
    isError: isErrorBlogCategories,
    isLoading: isLoadingBlogCategories,
    isFetching: isFetchingCategories,
    isSuccess: isSuccessBlogCategories,
  } = useQuery(['blogCategories'], () => fetchBlogCategories(), {
    staleTime: 0,
  });

  function fetchPagination(page) {
    page = JSON.stringify(page);
    Router.push(
      `/blog?category=${category || ''}&page=${page || 1}&perPage=${
        perPage || `9`
      }`,
    );
  }

  function fetchResetBlogs() {
    Router.push(`/blog?category=&page=1&perPage=9`);
  }

  useEffect(() => {
    if (page || perPage || category) {
      refetchBlogs();
    }
  }, [page, perPage, category]);

  props = {
    ...props,
    category,
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
    dataBlogCategories,
    isErrorBlogCategories,
    isLoadingBlogCategories,
    isFetchingCategories,
    isSuccessBlogCategories,
    fetchPagination,
    fetchResetBlogs,
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
