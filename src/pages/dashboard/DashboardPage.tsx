import Grid from "@mui/material/Grid";
import TodaySection from "../../components/shared/TodaySection";
import TodayEvents from "../../components/shared/TodayEvents";

function DashboardPage() {
  return (
    <Grid container>
      <Grid item xs={10} padding={1}></Grid>
      <Grid item xs={2} padding={1}>
        <TodaySection />
        <TodayEvents />
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
