import PropTypes from "prop-types";
import HomePageContainerDesktop from "./HomePageContainerDesktop";
import HomePageContainerMobile from "./HomePageContainerMobile";

import { useQuery } from 'react-query';
import { fetchCategories } from "../../hooks/useCategories";
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
    
  props = {
    ...props,
    dataCategories,
    isErrorCategories,
    isLoadingCategories,
    isFetchingCategories,
    isSuccessCategories
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
