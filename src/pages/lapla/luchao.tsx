import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box} from "@mui/material";

export default function LucHao() {

  return (
    <Page title={PAGE_TITLE.LAPLA} menuIndex={2}>
      <Box className="lapla">
        <h1>Gieo quẻ lục hào</h1>
      </Box>
    </Page>
  );
}
