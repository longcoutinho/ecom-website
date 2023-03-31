import { Box } from "@mui/material"
import Container from "@mui/system/Container"
import { useEffect, useState } from "react";
import Image from "./Image"

interface Header {
    menuIndex: number;
}

interface MenuItem {
    title: String;
    redirectLink: String;
}

const Header = (props: Header) => {
    //data
    const initMenuItem = [
        {
            title: 'Trang tin tức huyền học',
            redirect_link: '#',
        },
        {
            title: 'Sản phẩm phong thủy',
            redirect_link: '#',
        },
        {
            title: 'Lập lá số phong thủy',
            redirect_link: '#',
        },
        {
            title: 'Đặt lịch tư vấn',
            redirect_link: '#',
        }
    ]
    //init
    const [listMenuItem, setListMenuItem] = useState(initMenuItem)
    //components
    const Menu = () => {
        const listMenu = listMenuItem.map((menuItem, index) => 
            <Box className='menu-item' sx={{
                    width: '20%',
                    height: '90%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: props.menuIndex !== index ? 'white' : '#8F0101',
                    backgroundColor: props.menuIndex !== index ? '#8F0101' : 'white',
                    fontWeight: 700,
                    margin: '0px 10px 0px 10px'
    
            }}>
                <a href={menuItem.redirect_link}>{menuItem.title}</a>
            </Box>)
        return (
            <Box className='menu' sx={{
                width: '100%',
                height: '15%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'end',
                backgroundColor: '#8F0101'
            }}>
                {listMenu}
            </Box> 
        )
    }
    
    //export components
    return (
        <Container disableGutters maxWidth={false} sx={{
            height: 300,
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box className='line' sx={{
                width: '100%',
                height: '10%',
                backgroundColor: '#8F0101'
            }}/> 
            <Box className='logo and banner' sx={{
                width: '100%',
                height: '75%',
                display: 'flex',
                flexDirection: 'row'
            }}> 
                <Box className='logo' sx={{
                    width: '30%',
                    height: '100%',
                }}> 
                    <Image src='https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png' sx = {{
                            objectFit: 'fill',
                            width: '100%',
                            height: '100%'
                    }} />          
                </Box>  
                <Box className='banner' sx={{
                    width: '70%',
                    height: '100%',
                }}>        
                    <Image src='https://viettelnamban.com/wp-content/uploads/2021/03/21-1400x438.png' sx = {{
                        objectFit: 'fill',
                        width: '100%',
                        height: '100%'
                    }} />   
                </Box>          
            </Box>     
            <Menu></Menu>
        </Container>
    )
}
export default Header