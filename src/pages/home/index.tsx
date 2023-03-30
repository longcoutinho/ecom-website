import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Container from "@mui/system/Container"
import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from "@/components/Image"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Home = () => {
  //datas
  const listFeaturedNews = [
    'Bài viết 1',
    'Bài viết 2',
    'Bài viết 3',
    'Bài viết 4',
    'Bài viết 5'
  ]
  //components
  const ListFeaturedNews = () => {
    const arr = listFeaturedNews.map((content) => <SwiperSlide>{content}</SwiperSlide>)
      return (<Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {arr}
          ...
        </Swiper>)
  }
  //Home element
  return (
    <Container disableGutters maxWidth={false} sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header/>
      <Box className='content' sx={{
        width: '100%',
        height: 400,
        display: 'flex',
        flexDirection: 'row'
      }}>
        <ListFeaturedNews></ListFeaturedNews>  
      </Box>
      <Footer/>
    </Container>
  )
};
export default Home;
