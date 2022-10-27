import Head from 'next/head';
import PropTypes from 'prop-types';
import MerchantsPageContainer from '../../page_container/merchants/MerchantsPageContainer';
import MainLayout from '../../layout/MainLayout';
import HeadHome from '../../components/Heads/HeadHome';

function MerchantList(props) {
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
        title="Mitra KamiUMKM"
        description="Mitra KamiUMKM | Mitra Merchant TJSL"
        keyword="Mitra KamiUMKM | Mitra Merchant TJSL"
        ogTitle="Mitra KamiUMKM"
        ogDescription="KamiUMKM | Mitra Merchant TJSL"
        ogImageUrl="https://res.cloudinary.com/borneos-co/image/upload/v1666752382/tjsl-core/seo-image/Icon_SEO_KamiUMKM_xrxf9m.png"
        ogImageAlt="KamiUmkm"
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl="https://www.kamiumkm.com,"
      />
      <MerchantsPageContainer {...props} />
    </MainLayout>
  );
}

MerchantList.propTypes = {
  isMobile: PropTypes.bool,
};

MerchantList.getInitialProps = async (props) => {
  const { store, isServer, query, params, res, req } = props.ctx;
  return {
    query
  };
};

export default MerchantList;
