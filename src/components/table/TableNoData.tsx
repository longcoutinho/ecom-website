import { TableRow, TableCell } from "@mui/material";
import EmptyContent from "../EmptyContent";

export default function TableNoData({ isNotFound }: any) {
  return (
    <>
      {isNotFound ? (
        <TableRow>
          <TableCell colSpan={9}>
            <EmptyContent
              title="No Data"
              sx={{
                "& span.MuiBox-root": { height: 160 },
              }}
            />
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0 }} />
        </TableRow>
      )}
    </>
  );
}
