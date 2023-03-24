import { Checkbox, TableRow, TableCell, TableHead } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSelectAllRows,
  sx,
  handleSortAsc,
  handleSortDec,
  arrow,
}: any) {
  return (
    <TableHead sx={sx}>
      <TableRow>
        {onSelectAllRows && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </TableCell>
        )}

        {headLabel.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            {headCell.label}
            {headCell.id === "createdAt" ? (
              <div>
                {arrow === true ? (
                  <ArrowUpwardIcon
                    onClick={handleSortDec}
                    sx={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                ) : (
                  <ArrowDownwardIcon
                    onClick={handleSortAsc}
                    sx={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                )}
              </div>
            ) : (
              ""
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
