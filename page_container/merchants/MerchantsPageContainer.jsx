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
  const { category, page, perPage } = query;
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
		() => fetchMerchants({ page, perPage, isFavoriteProduct: 1, category }),
    {
      staleTime: 0,
    },
  );

  function fetchPagination(page) {
    page = JSON.stringify(page);
    Router.push(`/merchants?category=${category || ''}&page=${page || 1}&perPage=${perPage || `9`}`);
  }

  function fetchResetMerchants() {
    Router.push(`/merchants?category=&page=1&perPage=9`);
  }

  useEffect(() => {
    if (page || perPage || category) {
      refetchMerchants();
    }
  }, [page, perPage, category]);

  props = {
    ...props,
    category,
    fetchResetMerchants,
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
