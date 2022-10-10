import PropTypes from "prop-types";
import MerchantsPageContainerDesktop from "./MerchantsPageContainerDesktop";
import MerchantsPageContainerMobile from "./MerchantsPageContainerMobile";

import { useQuery } from 'react-query';
import { fetchMerchants } from "../../hooks/useMerchants";
import { fetchCategories } from "../../hooks/useCategories";

function MerchantsPageContainer(props) {
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
		() => fetchMerchants({}),
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
  }

  if (isMobile) {
    return <MerchantsPageContainerMobile {...props} />;
  } else {
    return <MerchantsPageContainerDesktop {...props} />;
  }
}

MerchantsPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default MerchantsPageContainer;
