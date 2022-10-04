import { Box } from '@chakra-ui/react';
import HeadHome from '../../components/Heads/HeadHome';
import MainLayout from '../../layout/MainLayout';
import BlogsPageContainer from '../../page_container/blogs/BlogsPageContainer';
import PropTypes from 'prop-types';

function BlogList(props) {
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
        ogImageUrl="https://res.cloudinary.com/borneos-co/image/upload/w_561,h_461,c_fill/v1659268660/images/seo_image_borneos_gls9un.png"
        ogImageAlt="KamiUmkm"
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl="https://www.kamiumkm.com,"
      />
      <BlogsPageContainer {...props} />
    </MainLayout>
  );
}

BlogList.propTypes = {
  isMobile: PropTypes.bool,
};

export default BlogList;
