import PropTypes from "prop-types";
import MerchantsPageContainerDesktop from "./MerchantsPageContainerDesktop";
import MerchantsPageContainerMobile from "./MerchantsPageContainerMobile";

import { useQuery } from 'react-query';
import { fetchMerchants } from "../../hooks/useMerchants";

function MerchantsPageContainer(props) {
  const { isMobile } = props;

  const { 
    data: dataMerchants, 
    isError: isErrorMerchants, 
    isLoading: isLoadingMerchants, 
    isFetching: isFetchingMerchants, 
    isSuccess: isSuccessMerchants
  } = useQuery(
    ['merchants'],
		() => fetchMerchants({ isFavorite: null }),
    {
      staleTime: 0,
    },
  );

  props = {
    ...props,
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
