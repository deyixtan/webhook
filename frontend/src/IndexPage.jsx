import Grid from "@mui/material/Grid";
import RequestDetail from "./RequestDetail";
import RequestList from "./RequestList";

const IndexPage = () => {
  return (
    <Grid container sx={{ height: "100vh", width: "100vw" }}>
      <Grid item xs={12} md={5}>
        <RequestList />
      </Grid>
      <Grid item xs={0} md={7}>
        <RequestDetail />
      </Grid>
    </Grid>
  );
};

export default IndexPage;
