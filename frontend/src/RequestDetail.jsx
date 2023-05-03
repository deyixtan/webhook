import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RequestContext from "./RequestContext";

const RequestDetail = () => {
  const { requestItems, requestSelectionIdx } = useContext(RequestContext);

  if (requestItems.length === 0 || requestSelectionIdx < 0) return <></>;
  const requestItem = requestItems[requestSelectionIdx];
  const { httpVersion, url, method, headers, query, body } = requestItem;
  return (
    <Stack spacing={3} padding={3}>
      <Typography variant="h6" component="h6">
        REQUEST INFO (ID = {requestItems.length - requestSelectionIdx})
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                http version
              </TableCell>
              <TableCell>{httpVersion}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                uri
              </TableCell>
              <TableCell>{url}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                method
              </TableCell>
              <TableCell>{method}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" component="h6">
        Request Headers
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table>
          <TableBody>
            {headers &&
              Object.keys(headers).length !== 0 &&
              Object.keys(headers).map((headerKey) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {headerKey}
                    </TableCell>
                    <TableCell>{headers[headerKey]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" component="h6">
        Request Query
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table>
          <TableBody>
            {query &&
              Object.keys(query).length !== 0 &&
              Object.keys(query).map((headerKey) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {headerKey.toLowerCase()}
                    </TableCell>
                    <TableCell>{query[headerKey]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" component="h6">
        Request Body
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table>
          <TableBody>
            {body &&
              Object.keys(body).length !== 0 &&
              Object.keys(body).map((headerKey) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {headerKey.toLowerCase()}
                    </TableCell>
                    <TableCell>{body[headerKey]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default RequestDetail;
