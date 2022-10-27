import Head from 'next/head';
import PropTypes from 'prop-types';
import MerchantPageContainer from '../../page_container/merchant/MerchantPageContainer';
import MainLayout from '../../layout/MainLayout';
import HeadHome from '../../components/Heads/HeadHome';
import { fetchMerchant } from '../../hooks/useMerchant';

function Merchant(props) {
  const { 
    isMobile, 
    query,
    dataMerchant 
  } = props;
  const data = dataMerchant?.data || {};
  props = {
    ...props,
    dataMerchant
  }
  return (
    <MainLayout
      isMobile={isMobile}
      isLanding
      pathname="home"
      placeholder="Cari Merchant..."
    >
      <HeadHome
        title={`${data?.name} - Mitra KamiUMKM`}
        description={`${data?.name} - KamiUMKM | Mitra Merchant TJSL`}
        keyword={`${data?.name} - KamiUMKM | Mitra Merchant TJSL`}
        ogTitle={`${data?.name} - Mitra KamiUMKM`}
        ogDescription={`${data?.description} - KamiUMKM | Mitra Merchant TJSL`}
        ogImageUrl={data?.seoImage ? data.seoImage : data.image}
        ogImageAlt={data?.name ? data?.name : 'KamiUMKM'}
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl={`https://www.kamiumkm.com/merchants/`+data?.slug}
      />
      <MerchantPageContainer {...props} />
    </MainLayout>
  );
}

Merchant.getInitialProps = async (props) => {
  const { query } = props.ctx;
  const dataMerchant = await fetchMerchant({ slug: query.slug });
  return {
    query,
    dataMerchant,
  };
};

Merchant.propTypes = {
  isMobile: PropTypes.bool,
  query: PropTypes.object,
  dataMerchant: PropTypes.object
};

export default Merchant;
