import { Box, Divider } from "@mui/material";
import Container from "@mui/system/Container";
import { Facebook, Google, YouTube } from "@mui/icons-material";
const Footer = () => {
  return (
    <Container disableGutters maxWidth={false} className="footer-container">
      <Box sx={{ padding: "20px 0" }}>
        <h2 style={{ color: "#eb1b24" }}>
          CÔNG TY TNHH TƯ VẤN PHONG THỦY HỒNG KỲ
        </h2>
      </Box>
      <Box className="footer-item">
        <Box className="item1">
          <p className="primary-text">
            Trung Tâm Nghiên Cứu Văn Hóa Phương Đông
          </p>
          <p className="sub-text">
            Số 12A Nhiêu Tứ, phường 7, quận Phú Nhuận, TP.HCM
          </p>
        </Box>
        <Box className="item2">
          <Box>
            <p className="primary-text">Hotline:</p>
            <p className="sub-text">0986 363 131</p>
          </Box>
          <Box>
            <p className="primary-text">Email:</p>
            <p className="sub-text">hongkyfengshui@gmail.com</p>
          </Box>
        </Box>
        <Box className="item3">
          <Facebook sx={{ marginRight: "6px", color: "white" }} />
          <Google sx={{ marginRight: "6px", color: "white" }} />
          <YouTube sx={{ color: "white" }} />
        </Box>
      </Box>
      <Divider className="divider-footer" />
      <Box sx={{ paddingBottom: "12px" }}>
        <p style={{ color: "gray" }}>
          Copyright © 2018{" "}
          <span style={{ fontWeight: "bold" }}>
            TƯ VẤN PHONG THUỶ HỒNG KỲ - HONGKY FENGSHUI
          </span>
        </p>
        <p style={{ color: "gray" }}>
          Thiết kế web : <span style={{ fontWeight: "bold" }}>TRUST.vn</span>
        </p>
      </Box>
    </Container>
  );
};
export default Footer;
