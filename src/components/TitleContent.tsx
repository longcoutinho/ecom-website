import { Box } from "@mui/material"
import Container from "@mui/system/Container"
import { displayName } from "react-quill"
import Image from "./Image"

interface TitleContent {
    titleContent: String;
}

const TitleContent = (props: TitleContent) => {
    //data
    //components
    //export components
    return (
        <Box className='title-content' sx={{
            width: '100%',
            height: '100px',    
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
        }}> 
            <Box className='shape-title-content' sx={{
            width: '20px',
            height: '100%',
            backgroundColor: '#8F0101'
            }}> 
            </Box>
            <p style={{marginLeft: '20px', fontSize: '40px', fontWeight: '700', color: '#8F0101'}}>{props.titleContent}</p>
        </Box>
    )
}
export default TitleContent;