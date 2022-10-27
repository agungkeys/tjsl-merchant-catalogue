import Head from 'next/head';
import PropTypes from 'prop-types';
import HomePageContainer from '../page_container/home/HomePageContainer';
import MainLayout from '../layout/MainLayout';
import HeadHome from '../components/Heads/HeadHome';
import Footer from '../components/Footer';

function Home(props) {
  const { isMobile } = props;

  return (
    <MainLayout
      isMobile={isMobile}
      isLanding
      pathname="home"
      placeholder="Cari Merchant..."
      onSubmit={(e) => console.log(e)}
    >
      <HeadHome
        title="KamiUMKM | Katalog Mitra Merchant by TJSL PT. Pupuk Kalimantan Timur"
        description="KamiUMKM | Katalog Mitra Merchant by TJSL PT. Pupuk Kalimantan Timur"
        keyword="KamiUMKM | Katalog Mitra Merchant by TJSL PT. Pupuk Kalimantan Timur"
        ogTitle="KamiUMKM | Katalog Mitra Merchant by TJSL PT. Pupuk Kalimantan Timur"
        ogDescription="KamiUMKM | Katalog Mitra Merchant by TJSL PT. Pupuk Kalimantan Timur"
        ogImageUrl="https://res.cloudinary.com/borneos-co/image/upload/v1666752382/tjsl-core/seo-image/Icon_SEO_KamiUMKM_xrxf9m.png"
        ogImageAlt="KamiUmkm"
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl="https://www.kamiumkm.com,"
      />
      <HomePageContainer {...props} />
    </MainLayout>
  );
}

Home.propTypes = {
  isMobile: PropTypes.bool,
};

Home.getInitialProps = async (props) => {
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

export default Home;
