import AboutPageContainerDesktop from './AboutPageContainerDesktop';
import AboutPageContainerMobile from './AboutPageContainerMobile';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { fetchMerchants } from '../../hooks/useMerchants';

function AboutPageContainer(props) {
  const { isMobile } = props;

  const {
    data: dataMerchants,
    isError: isErrorMerchants,
    isLoading: isLoadingMerchants,
    isFetching: isFetchingMerchants,
    isSuccess: isSuccessMerchants,
  } = useQuery(
    ['merchants'],
    () => fetchMerchants({ isFavoriteProduct: 'all', isFavorite: '1' }),
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
  };

  if (isMobile) {
    return <AboutPageContainerMobile {...props} />;
  } else {
    return <AboutPageContainerDesktop {...props} />;
  }
}

AboutPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};

export default AboutPageContainer;
