import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input } from "@mui/material";

export default function Home() {
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
      <Box className="content full-width flex-col">
        <Box
          className="header-content full-width flex-col"
          sx={{
            height: "600px",
            borderBottom: "2px solid red",
          }}
        ></Box>
      </Box>
    </Page>
  );
}
