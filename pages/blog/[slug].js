import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import HeadHome from '../../components/Heads/HeadHome';
import { populateAdditionalImage } from '../../helpers/utils';
import { fetchBlog } from '../../hooks/useBlog';
import MainLayout from '../../layout/MainLayout';
import BlogPageContainer from '../../page_container/blog/BlogPageContainer';

function Blog(props) {
  const { isMobile, query, dataBlog } = props;
  const data = dataBlog?.data || {};

  props = {
    ...props,
    dataBlog,
  };
  return (
    <MainLayout
      isMobile={isMobile}
      isLanding
      pathname="home"
      placeholder="Cari Merchant..."
      onSubmit={(e) => console.log(e)}
    >
      <HeadHome
        title={`${data?.title} - Blog KamiUMKM`}
        description={`${data?.title} - KamiUMKM | Blog KamiUMKM`}
        keyword={`${data?.title} - KamiUMKM | Blog KamiUMKM`}
        ogTitle={`${data?.title} - Blog KamiUMKM`}
        ogDescription={`${data?.shortDescription} - KamiUMKM | Blog KamiUMKM`}
        ogImageUrl={data?.image}
        ogImageAlt={data?.title ? data?.title : 'Blog KamiUMKM'}
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl={`https://www.kamiumkm.com/blog/${data?.slug},`}
      />

      <BlogPageContainer {...props} />
    </MainLayout>
  );
}

Blog.getInitialProps = async (props) => {
  const { query } = props.ctx;
  const dataBlog = await fetchBlog({ slug: query.slug });
  return {
    query,
    dataBlog,
  };
};

Blog.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  query: PropTypes.object,
  dataBlog: PropTypes.object,
};

export default Blog;
