import Head from 'next/head';
import PropTypes from 'prop-types';
import MainLayout from '../../layout/MainLayout';
import HeadHome from '../../components/Heads/HeadHome';
import ContactPageContainer from '../../page_container/contact/ContactPageContainer';

function Contact(props) {
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
        title="Kontak KamiUMKM"
        description="Kontak KamiUMKM | KamiUMKM"
        keyword="Kontak KamiUMKM | KamiUMKM"
        ogTitle="Kontak KamiUMKM"
        ogDescription="Kontak KamiUMKM | KamiUMKM"
        ogImageUrl="https://res.cloudinary.com/borneos-co/image/upload/v1666752382/tjsl-core/seo-image/Icon_SEO_KamiUMKM_xrxf9m.png"
        ogImageAlt="KamiUmkm"
        ogImageType="image/png"
        ogImageHeight="461"
        ogImageWidth="561"
        ogUrl="https://www.kamiumkm.com,"
      />
      <ContactPageContainer {...props} />
    </MainLayout>
  );
}

Contact.propTypes = {
  isMobile: PropTypes.bool,
};

export default Contact;
