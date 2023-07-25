import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      <Grid container paddingX={4} paddingY={2} gap={4}>
        <Grid item>Dashboard</Grid>
        <Grid item>Calendario</Grid>
        <Grid item>Visite mediche</Grid>
        <Grid item>Contatti</Grid>
        <Grid item>Batch importati</Grid>
      </Grid>
      <Grid container>
        <Grid item height={890} xs={10}>
          <Typography>Main content</Typography>
        </Grid>
        <Grid item height={890} xs={2}>
          <Typography>Main content</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AppLayout;
