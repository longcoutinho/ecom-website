import { Box } from "@mui/material"
import Container from "@mui/system/Container"
import Image from "./Image"

export default function Header() {
    //data
    const listMenuItem = [
        {
            title: 'Trang tin tức huyền học',
            redirect_link: '#'
        },
        {
            title: 'Sản phẩm phong thủy',
            redirect_link: '#'
        },
        {
            title: 'Lập lá số phong thủy',
            redirect_link: '#'
        },
        {
            title: 'Đặt lịch tư vấn',
            redirect_link: '#'
        }
    ]
    //components
    const Menu = () => {
        const listMenu = listMenuItem.map((menuItem) => 
            <Box className='menu-item' sx={{
                width: 'auto',
                height: '100%',
            }}>
                <a href={menuItem.redirect_link}>{menuItem.title}</a>
            </Box>);
        return (
            <Box className='menu' sx={{
                width: '100%',
                height: '15%',
                display: 'flex',
                flexDirection: 'row'
            }}>
                {listMenu}
            </Box> 
        )
    }
    //export components
    return (
        <Container disableGutters maxWidth={false} sx={{
            height: 200,
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
                    width: '20%',
                    height: '100%',
                }}> 
                    <Image src='https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png' sx = {{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                    }} />          
                </Box>  
                <Box className='banner' sx={{
                    width: '80%',
                    height: '100%',
                }}>        
                    <Image src='https://img.timviecthietke.com/2021/06/kich-thuoc-banner-website-1.png' sx = {{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }} />   
                </Box>          
            </Box>     
            <Menu></Menu>
        </Container>
    )
}