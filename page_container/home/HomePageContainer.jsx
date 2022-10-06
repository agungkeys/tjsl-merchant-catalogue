import PropTypes from "prop-types";
import HomePageContainerDesktop from "./HomePageContainerDesktop";
import HomePageContainerMobile from "./HomePageContainerMobile";

import { useQuery } from 'react-query';
import { fetchCategories } from "../../hooks/useCategories";
import { fetchMerchants } from "../../hooks/useMerchants";
import { fetchBlogs } from "../../hooks/useBlogs";
function HomePageContainer(props) {
  const { isMobile } = props;

  const { 
    data: dataCategories, 
    isError: isErrorCategories, 
    isLoading: isLoadingCategories, 
    isFetching: isFetchingCategories, 
    isSuccess: isSuccessCategories
  } = useQuery(
    ['categories'],
		() => fetchCategories(),
		{
      staleTime: 0,
		},
  );

  const { 
    data: dataMerchants, 
    isError: isErrorMerchants, 
    isLoading: isLoadingMerchants, 
    isFetching: isFetchingMerchants, 
    isSuccess: isSuccessMerchants
  } = useQuery(
    ['merchants'],
		() => fetchMerchants(),
		{
      staleTime: 0,
		},
  );

  const { 
    data: dataBlogs, 
    isError: isErrorBlogs, 
    isLoading: isLoadingBlogs, 
    isFetching: isFetchingBlogs, 
    isSuccess: isSuccessBlogs
  } = useQuery(
    ['blogs'],
		() => fetchBlogs(),
		{
      staleTime: 0,
		},
  );
    
  props = {
    ...props,
    dataCategories,
    isErrorCategories,
    isLoadingCategories,
    isFetchingCategories,
    isSuccessCategories,
    dataMerchants,
    isErrorMerchants, 
    isLoadingMerchants, 
    isFetchingMerchants, 
    isSuccessMerchants,
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
  }


  if (isMobile) {
    return <HomePageContainerMobile {...props} />;
  } else {
    return <HomePageContainerDesktop {...props} />;
  }
}

HomePageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default HomePageContainer;
