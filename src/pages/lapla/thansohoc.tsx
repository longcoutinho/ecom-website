import Label from "@/components/Label";
import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";

export default function ThanSoHoc() {
  return (
    <Page title={PAGE_TITLE.LAPLA} menuIndex={2}>
      <Box className="lapla">
        <h1>Thần số học</h1>
        <Box className="tuvi">
          <Stack>
            <h3>Họ và tên:</h3>
            <TextField />
          </Stack>
          <h3>Ngày sinh:</h3>
          <Stack direction="row" className="birthday">
            <TextField className="date" />
            <TextField className="date" />
            <TextField className="date" />
          </Stack>
          <Stack>
            <FormControl>
              <h3 id="demo-radio-buttons-group-label">Giới tính:</h3>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Nam"
                name="radio-buttons-group"
                row
                className="birthday"
              >
                <FormControlLabel
                  value="Nam"
                  control={<Radio />}
                  label="Nam"
                  className="date"
                />
                <FormControlLabel
                  value="nu"
                  control={<Radio />}
                  label="Nữ"
                  className="date"
                />
                <Box className="date"></Box>
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
        <Button sx={{ width: "20%", background: "red", marginTop: "20px" }}>
          Tra cứu
        </Button>
      </Box>
    </Page>
  );
}
