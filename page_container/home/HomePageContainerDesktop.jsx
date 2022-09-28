import { Container, Text } from "@chakra-ui/react";
import { Carousel } from "../../components";

function HomePageContainerDesktop() {
  const itemBanners = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1660137793/images/banners/cy1iztwb4bf6xbp89x1g.webp",
      title: "image-banner-0",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1660137643/images/banners/v3pxsshr9tybdalab3js.webp",
      title: "image-banner-1",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1660137500/images/banners/j6ptjrhj8szcrp3r0xpi.webp",
      title: "image-banner-2",
    },
  ];

  const itemServices = [
    {
      id: 0,
      image: "service_1.png",
      name: "Manfaat",
      description:
        "Memberikan kemanfaatan bagi pembangunan ekonomi, sosial, lingkungan, hukum dan tata kelola bagi perusahaan.",
    },
    {
      id: 1,
      image: "service_2.png",
      name: "Kontribusi",
      description:
        "Berkontribusi meningkatkan nilai tambah dengan prinsip yang terintegrasi, terarah dan terukur dampaknya serta akuntabel.",
    },
    {
      id: 2,
      image: "service_3.png",
      name: "Pembinaan",
      description:
        "Membina usaha mikro dan usaha kecil agar lebih tangguh dan mandiri serta masyarakat sekitar perusahaan.",
    },
  ];

  const itemCategories = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1644567865/images/categories/Semua_eiizmq.svg",
      name: "Semua",
      description: "Semua Kategori",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1650784158/images/categories/xfx103dzxgsmhklumm5k.png",
      name: "Pertanian",
      description: "Kategori Pertanian",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1650784098/images/categories/pfh9klzrjkut442o24ae.png",
      name: "Fashion",
      description: "Kategori Fashion & Kain",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1650784487/images/categories/jrgbaz2nm2cgrxyufwjt.png",
      name: "Perdagangan",
      description: "Kategori Perdagangan",
    },
  ];
  return (
    <>
      <Carousel items={itemBanners} />
      <Container maxW="container.xl">
        <Text>Home Page Container Desktop</Text>
      </Container>
    </>
  );
}

export default HomePageContainerDesktop;
