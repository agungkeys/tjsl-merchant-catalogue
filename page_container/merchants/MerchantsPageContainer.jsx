import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import MerchantsPageContainerDesktop from "./MerchantsPageContainerDesktop";
import MerchantsPageContainerMobile from "./MerchantsPageContainerMobile";

import { useQuery } from 'react-query';
import { fetchMerchants } from "../../hooks/useMerchants";
import { fetchCategories } from "../../hooks/useCategories";

function MerchantsPageContainer(props) {
  const { isMobile, query } = props;
  const { page, perPage } = query;
  const Router = useRouter();

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
    isSuccess: isSuccessMerchants,
    refetch: refetchMerchants,
  } = useQuery(
    ['merchants'],
		() => fetchMerchants({ page, perPage }),
    {
      staleTime: 0,
    },
  );

  function fetchPagination(page) {
    page = JSON.stringify(page);
    // if (category) {
    //   Router.push(
    //     `/merchants/${category}?page=${page}&perPage=${perPage}`,
    //   );
    // }
    Router.push(`/merchants?page=${page}&perPage=${perPage || `9`}`);
  }

  useEffect(() => {
    if (page || perPage) {
      refetchMerchants();
    }
  }, [page, perPage]);

  props = {
    ...props,
    fetchPagination,
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
  query: PropTypes.object,
  page: PropTypes.string,
  perPage: PropTypes.string,
};

export default MerchantsPageContainer;
