import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import HeadHome from '../../components/Heads/HeadHome';
import MainLayout from '../../layout/MainLayout';
import BlogPageContainer from '../../page_container/blog/BlogPageContainer';

function Blog(props) {
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
        title="KamiUMKM | Mitra Merchant TJSL"
        description="KamiUMKM | Mitra Merchant TJSL"
        keyword="KamiUMKM | Mitra Merchant TJSL"
        ogTitle="KamiUMKM | Mitra Merchant TJSL"
        ogDescription="KamiUMKM | Mitra Merchant TJSL"
        ogImageUrl="https://res.cloudinary.com/borneos-co/image/upload/v1666752382/tjsl-core/seo-image/Icon_SEO_KamiUMKM_xrxf9m.png"
        ogImageAlt="KamiUmkm"
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl="https://www.kamiumkm.com,"
      />
      <BlogPageContainer {...props} />
    </MainLayout>
  );
}

Blog.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

Blog.getInitialProps = async (props) => {
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

export default Blog;
