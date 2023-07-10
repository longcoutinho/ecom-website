import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { PATH_PAGE } from "@/routes/path";
import { Box, Button, Grid, Input, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TITLE_TAB = [
  { title: "Lập lá số tử vi", url: PATH_PAGE.lapla.tuvi },
  { title: "Lập quẻ lục hào", url: PATH_PAGE.lapla.luchao },
  { title: "Lập lá số tứ trụ", url: PATH_PAGE.lapla.tutru },
  { title: "Thần số học", url: PATH_PAGE.lapla.thansohoc },
];
const TINTUC = [
  "Tin tuc de xuat 1",
  "Tin tuc de xuat 1",
  "Tin tuc de xuat 1",
  "Tin tuc de xuat 1",
  "Tin tuc de xuat 1",
  "Tin tuc de xuat 1",
];
export default function LapLa() {
  const route = useRouter();
  const redirect = (path: any) => {
    route.push(path);
  }
  const SearchInput = () => {
    return (
      <Box
        className="search-input full-width center flex-row"
        sx={{
          height: "100px",
        }}
      >
        <Input sx={{}}></Input>
        <Button>Tìm kiếm</Button>
      </Box>
    );
  };
  return (
    <Page title={PAGE_TITLE.LAPLA} menuIndex={2}>
      <Box className="lapla-container">
        <Box className="lapla-wrapper">
          <Box className="lapla-content">
            <Box className="lapla-title">
              <p className="lapla-bigtitle">Lập lá số tại tử vi chân nguyên</p>
              <p className="lapla-smalltitle">Slogan: Do better, be better!</p>
            </Box>
            <Box className="lapla-type-container">
              <Box className="lapla-type-content">
                <Box className="lapla-img">
                  <img src="https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=" />
                </Box>
                <Box onClick={() => redirect("/lapla/quedich")} className="lapla-para">
                  <p>Quẻ dịch</p>
                </Box>
              </Box>
              <Box className="lapla-type-content-1">
                <Box className="lapla-img">
                  <img src="https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=" />
                </Box>
                <Box onClick={() => redirect("/lapla/tuvi")} className="lapla-para">
                  <p>Lập lá số tử vi</p>
                </Box>
              </Box>
              <Box className="lapla-type-content">
                <Box className="lapla-img">
                  <img src="https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=" />
                </Box>
                <Box onClick={() => redirect("/lapla/tutru")} className="lapla-para">
                  <p>Tứ trụ</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
