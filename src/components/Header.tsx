import { Box } from "@mui/material"
import Container from "@mui/system/Container"
import Image from "./Image"
export default function Header() {
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
                height: '80%',
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
            <Box className='line' sx={{
                width: '100%',
                height: '10%',
                backgroundColor: '#8F0101'
            }}/> 
        </Container>
    )
}