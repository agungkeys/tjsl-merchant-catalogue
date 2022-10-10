import PropTypes from 'prop-types';
import MerchantPageContainerDesktop from './MerchantPageContainerDesktop';
import MerchantPageContainerMobile from './MerchantPageContainerMobile';

import { useQuery } from 'react-query';
import { fetchMerchant } from '../../hooks/useMerchant';

function MerchantPageContainer(props) {
  const { isMobile, query } = props;

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
};

export default MerchantPageContainer;
