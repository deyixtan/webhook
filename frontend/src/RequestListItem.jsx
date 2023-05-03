import { useContext } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RequestContext from "./RequestContext";

const RequestListItem = ({ details }) => {
  const { setRequestSelectionIdx } = useContext(RequestContext);
  const { idx, renderId, requestItem } = details;

  const { method, url } = requestItem;

  const handleItemClick = (idx) => {
    setRequestSelectionIdx(idx);
  };

  return (
    <TableRow hover onClick={() => handleItemClick(idx)}>
      <TableCell component="th" scope="row">
        {renderId}
      </TableCell>
      <TableCell>{method}</TableCell>
      <TableCell>{url}</TableCell>
    </TableRow>
  );
};

export default RequestListItem;
