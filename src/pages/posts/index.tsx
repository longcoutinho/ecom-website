import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, List } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import TitleContent from "@/components/TitleContent";
import Image from "@/components/Image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { type } from "os";
import zIndex from "@mui/material/styles/zIndex";


<link rel="preconnect" href="https://fonts.gstatic.com"></link>
interface TypePost {
  id: Number,
  name: string,
}

interface Post {
  image: string,
  title: string,
  author: string,
  createTime: Date,
  type: Number,
  content: String,
}

interface Course {
  title: string,
  studyTime: string,
  openDate: Date, 
}

interface Service {
  name: string,
  image: string,
}

export default function Home() {
  //datas
  const listPaginatorPosts = [
    "Bài viết 1",
    "Bài viết 1",
    "Bài viết 2",
    "Bài viết 3",
    "Bài viết 4",
    "Bài viết 5",
  ]
  const listServices:Service[] = [
    {
      name: "dịch vụ tư vấn",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "chia sẻ kinh nghiệm",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "hệ thống đào tạo",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "hệ thống đào tạo",
      image: "url(http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png)",
    },
    {
      name: "hệ thống đào tạo",
      image: "url(http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png)",
    }
  ]
  const listCoursesDetail:Course[] = [
    {
      title: 'Phong thủy ứng dụng cho cuộc sống',
      studyTime: '7:00',
      openDate: new Date
    },
    {
      title: 'Phong thủy ứng dụng cho cuộc sống',
      studyTime: '7:00',
      openDate: new Date
    },
    {
      title: 'Phong thủy ứng dụng cho cuộc sống',
      studyTime: '7:00',
      openDate: new Date
    }
  ]
  const listPosts:Post[] = [
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 1,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 1,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 1,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 2,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 2,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 2,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 3,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 3,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày",
      author: "longhvh",
      createTime: new Date,
      type: 3,
      content: "asdasdasdasdasdddddddddddddddddddddd",
    },
  ]
  const listPostType:TypePost[] = [
    {
      id: 1,
      name: 'Tin tức',
    },
    {
      id: 2,
      name: 'Kinh Nghiệm',
    },
    {
      id: 3,
      name: 'Dịch vụ tư vấn',
    },
  ]
  //components
  
  const ListPosts = () => {

    const ListPostComponents = (props:any) => {
      const ListPostsContent = listPosts.map((post) => {
          return (
            <Box
                className="list-posts-detail-element flex-col"
                sx={{padding: '10px 0px 10px 0px', width: '300px', height: '400px', marginTop: '10px'}}
            >
              <Box className = "full-width half-col">
                <Image id="image-post" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
              </Box>
              <Box className = "full-width half-col flex-col" sx={{padding: '10px', justifyContent: 'space-between'}}>
                <h1 style={{fontSize: '15px', color: 'white'}}>{post.title}</h1>
                <p style={{fontSize: '15px', color: 'gray', marginTop: '5px'}}>{post.createTime.toDateString()}</p>
                <Button sx={{color: 'white', backgroundColor: 'red', borderRadius: '3px'}}>Xem chi tiết</Button>
              </Box>    
            </Box> 
          )
      })
      return (
        <Box
          className="list-posts-detail flex-col one-third-row full-height"
        >
          {ListPostsContent}
        </Box>
      )
    }
    
    const ListPostsContainer = listPostType.map((posttype) => {
      return (
        <ListPostComponents type={posttype.id} name={posttype.name}></ListPostComponents>
      )
    })

    return (
      <Box
        className="list-posts-content flex-row full-width full-height"
        sx={{
          height: "300px",
          marginTop: "40px",
        }}
      >
        {ListPostsContainer}
      </Box>
    );
  }

  const MenuPostComponent = () => {
    const listMenuItems = ['Tin phong thủy', 'Vật phẩm phong thủy', 'Sự kiện', 'Ứng dụng vạn sự kỳ thư', 'Tin trà']
    const ListMenuPostComponent = listMenuItems.map((item) => {
      return (
        <Box sx={{marginLeft: '20px'}}>
          <p style={{color: 'gray', textTransform: 'uppercase'}}>{item}</p>
        </Box>
      )
    })
    return (
      <Box sx={{height: '50px'}} className="flex-row full-width center">
        {ListMenuPostComponent}
      </Box>
    )
  }
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="content full-width">
        <Box
          className="header-content full-width flex-row"
          sx={{
            position: 'relative',
            padding: '0px 300px 70px 300px',
            height: '350px',
            backgroundSize: 'cover',
            backgroundImage: 'url("http://hongkyfengshui.vn/vnt_upload/weblink/slide_1.jpg")',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            zIndex: -1,
          }}
        >
          <Box className="flex-col center full-width full-height" sx={{color: 'white'}}>
           <p style={{textTransform: 'uppercase', fontSize: '30px', marginTop: '70px'}}><span style={{padding: '10px 30px 10px 30px', border: '2px solid white'}}>Tin tức</span></p>
          </Box>
        </Box>
        <Box
          className="focus-content full-width flex-col"
          sx={{
            padding: '0px 300px 0px 300px',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7) 50px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 0%)',
            backgroundClip: 'padding-box',
          }}
        >
          <MenuPostComponent></MenuPostComponent>
          <ListPosts></ListPosts>
        </Box>
      </Box>
    </Page>
  );
}
