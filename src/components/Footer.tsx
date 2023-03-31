import { Box } from "@mui/material"
import Container from "@mui/system/Container"
import Image from "./Image"
const Footer = () => {
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
                height: '80%',
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
                    <Image src='https://ocnhoi.net/wp-content/uploads/2019/11/contact-person-la-gi.png' sx = {{
                        objectFit: 'fill',
                        width: '100%',
                        height: '100%'
                    }} />   
                </Box>          
            </Box>     
            <Box className='line' sx={{
                width: '100%',
                height: '10%',
                backgroundColor: '#8F0101'
            }}/> 
        </Container>
    )
}
export default Footer