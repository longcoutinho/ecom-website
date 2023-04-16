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
            <Box className="center full-width full-height footer" sx={{backgroundColor: '#363636'}}>
                <p style={{color: 'white', fontSize: '200px'}}>Footer</p>
            </Box>
        </Container>
    )
}
export default Footer