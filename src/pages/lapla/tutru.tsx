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
  TableCell,
  TableRow,
  TableHead,
  Table,
  Paper,
  TableContainer,
  TableBody,
} from "@mui/material";
const dataTable = [
  { index: 1, hao: "Hào Thượng" },
  { index: 2, hao: "Hào Ngũ" },
  { index: 3, hao: "Hào Tứ" },
  { index: 4, hao: "Hào Tam" },
  { index: 5, hao: "Hào Nhị" },
  { index: 6, hao: "Hào Sơ" },
];
export default function TuTru() {
  return (
    <Page title={PAGE_TITLE.LAPLA} menuIndex={2}>
      <Box className="lapla">
        <h1>Lập lá số tứ tru bát tự</h1>
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
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Thời gian luận quẻ:</h3>
            <TextField sx={{ width: "75%" }} />
          </Stack>
          <Stack>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Lần gieo hào</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">Âm/Dương</TableCell>
                    <TableCell align="left">Động</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataTable.map((row) => (
                    <TableRow
                      key={row.index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.index}
                      </TableCell>
                      <TableCell align="left">{row.hao}</TableCell>
                      <TableCell align="left">
                        <TextField />
                      </TableCell>
                      <TableCell align="left">
                        <Radio />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Box>
        <Button sx={{ width: "20%", background: "red", marginTop: "20px" }}>
          Gieo quẻ
        </Button>
      </Box>
    </Page>
  );
}
