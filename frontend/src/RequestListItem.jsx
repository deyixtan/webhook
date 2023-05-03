import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const RequestListItem = ({ idx, requestItem }) => {
  const { method, url } = requestItem;

  return (
    <TableRow key={idx}>
      <TableCell component="th" scope="row">
        {idx}
      </TableCell>
      <TableCell>{method}</TableCell>
      <TableCell>{url}</TableCell>
    </TableRow>
  );
};

export default RequestListItem;
