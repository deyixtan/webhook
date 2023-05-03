import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RequestContext from "./RequestContext";
import RequestListItem from "./RequestListItem";

const RequestList = () => {
  const requestItems = useContext(RequestContext);

  return (
    <TableContainer component={Paper} sx={{ width: "100%", height: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>METHOD</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestItems.map((requestItem, idx) => (
            <RequestListItem
              idx={requestItems.length - idx}
              requestItem={requestItem}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RequestList;
