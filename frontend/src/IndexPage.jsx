import Grid from "@mui/material/Grid";
import RequestDetail from "./RequestDetail";
import RequestList from "./RequestList";

const IndexPage = () => {
  return (
    <Grid container sx={{ height: "100vh", width: "100vw" }}>
      <Grid item xs={12} md={5} sx={{ height: "100%", width: "100%" }}>
        <RequestList />
      </Grid>
      <Grid item xs={12} md={7} sx={{ height: "100%", width: "100%" }}>
        <RequestDetail />
      </Grid>
    </Grid>
  );
};

export default IndexPage;
