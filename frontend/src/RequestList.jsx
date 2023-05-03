import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RequestContext from "./RequestContext";
import RequestListItem from "./RequestListItem";

const RequestList = () => {
  const { requestItems } = useContext(RequestContext);

  return (
    <Stack spacing={3} padding={3}>
      <Typography variant="h6" component="h6">
        REQUEST LIST
      </Typography>
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
            {requestItems.map((requestItem, idx) => {
              const renderId = requestItems.length - idx;
              return (
                <RequestListItem
                  key={idx}
                  details={{ idx, renderId, requestItem }}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default RequestList;
