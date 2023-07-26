import Grid from "@mui/material/Grid";
import HomeBanner from "../../components/shared/HomeBanner";
import HomeBoxes from "../../components/shared/HomeBoxes";
import TodayEvents from "../../components/shared/TodayEvents";
import TodaySection from "../../components/shared/TodaySection";

function DashboardPage() {
  return (
    <Grid container>
      <Grid item xs={10} padding={1}>
        <HomeBanner />
        <HomeBoxes />
      </Grid>
      <Grid item xs={2} padding={1}>
        <TodaySection />
        <TodayEvents />
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
