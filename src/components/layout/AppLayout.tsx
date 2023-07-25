import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Outlet } from "react-router-dom";
import MainTabs from "../tabs/MainTabs";

function AppLayout() {
  return (
    <Grid container>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-between"
        flexGrow={1}
        border={1}
      >
        <Grid>
          <Grid container>
            <Grid padding={2} borderRight={1}>
              <SupervisedUserCircleIcon />
            </Grid>
            <Grid padding={2} borderRight={1}>
              <WidgetsIcon />
              <StarIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid flexGrow={1}>
          <Grid
            container
            height="100%"
            alignItems="center"
            justifyContent="space-between"
            paddingX={2}
          >
            <Typography>Agenzia del demanio</Typography>
            <Grid>
              <Grid container>
                <AccountCircleIcon />
                <Typography>Stefano Martella</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <MainTabs />
      <Grid container>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default AppLayout;
