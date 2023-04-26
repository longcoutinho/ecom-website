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
      <Box className="lapla">
        <Box className="lap-la-tab">
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              paddingTop: "50px",
            }}
          >
            {TITLE_TAB.map((tab, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Item
                  onClick={() => route.push(tab.url)}
                  sx={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {tab.title}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className="lap-la-info">
          <h2>Tìm hiểu thêm về phong thủy, lý số</h2>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              paddingTop: "50px",
            }}
          >
            {TINTUC.map((item, index) => (
              <Grid
                key={index}
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Item
                  sx={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Page>
  );
}
