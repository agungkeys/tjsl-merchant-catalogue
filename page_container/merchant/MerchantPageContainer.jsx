import PropTypes from 'prop-types';
import MerchantPageContainerDesktop from './MerchantPageContainerDesktop';
import MerchantPageContainerMobile from './MerchantPageContainerMobile';

import { useQuery } from 'react-query';
import { fetchMerchant } from '../../hooks/useMerchant';
import STATUS_TYPES from '../../constants/statusTypes';

function MerchantPageContainer(props) {
  const { isMobile, query, dataMerchant } = props;

  const { 
    data,
    isError,
    isLoading,
    isFetching,
    isSuccess
  } = useQuery(
    ['merchant'],
		() => fetchMerchant({ slug: query?.slug}),
		{
      staleTime: 0,
      initialData: dataMerchant?.status === STATUS_TYPES.SUCCESS && dataMerchant?.data || {},
		},
  );

  props = {
    ...props,
    data,
    isError,
    isLoading,
    isFetching,
    isSuccess
  }
  if (isMobile) {
    return <MerchantPageContainerMobile {...props} />;
  } else {
    return <MerchantPageContainerDesktop {...props} />;
  }
}

MerchantPageContainer.propTypes = {
  isMobile: PropTypes.bool,
  query: PropTypes.object,
  dataMerchant: PropTypes.object
};

export default MerchantPageContainer;
