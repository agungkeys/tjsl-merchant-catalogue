import Head from 'next/head';
import PropTypes from 'prop-types';
import MerchantPageContainer from '../../page_container/merchant/MerchantPageContainer';
import MainLayout from '../../layout/MainLayout';
import HeadHome from '../../components/Heads/HeadHome';

function Merchant(props) {
  const { isMobile, query } = props;
  return (
    <MainLayout
      isMobile={isMobile}
      isLanding
      pathname="home"
      placeholder="Cari Merchant..."
      onSubmit={(e) => console.log(e)}
    >
      <HeadHome
        title="Mitra KamiUMKM"
        description="KamiUMKM | Mitra Merchant TJSL"
        keyword="KamiUMKM | Mitra Merchant TJSL"
        ogTitle="Mitra KamiUMKM"
        ogDescription="KamiUMKM | Mitra Merchant TJSL"
        ogImageUrl="https://res.cloudinary.com/borneos-co/image/upload/w_561,h_461,c_fill/v1659268660/images/seo_image_borneos_gls9un.png"
        ogImageAlt="KamiUmkm"
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl="https://www.kamiumkm.com,"
      />
      <MerchantPageContainer {...props} />
    </MainLayout>
  );
}

Merchant.propTypes = {
  isMobile: PropTypes.bool,
  query: PropTypes.object,
};

Merchant.getInitialProps = async (props) => {
  const { store, isServer, query, params, res, req } = props.ctx;
  // const dataBanners = await fetchBanners();
  // const dataCategories = await fetchCategories();
  // const dataMerchantFavorites = await fetchMerchantFavorites();
  // const dataMerchants = await fetchMerchants();
  return {
    query,
    // dataBanners,
    // dataCategories,
    // dataMerchantFavorites,
    // dataMerchants,
  };
};

export default Merchant;
