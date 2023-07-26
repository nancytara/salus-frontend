import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

type BoxProps = {
  text: string;
  subText: string;
  color: string;
};

function Box({ text, subText, color }: BoxProps) {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography variant="h3" align="center" color={color}>
          {text}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color={theme.palette.grey[500]}
        >
          {subText}
        </Typography>
      </CardContent>
    </Card>
  );
}

function HomeBoxes() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} marginBottom={2}>
      <Grid item xs={3}>
        <Box
          text="88"
          subText="Certificati scaduti"
          color={theme.palette.primary.main}
        />
      </Grid>
      <Grid item xs={3}>
        <Box
          text="11"
          subText="Certificati in scadenza"
          color={theme.palette.secondary.main}
        />
      </Grid>
      <Grid item xs={3}>
        <Box text="10" subText="Sospesi" color={theme.palette.info.main} />
      </Grid>
      <Grid item xs={3}>
        <Box text="14" subText="Report" color={theme.palette.warning.main} />
      </Grid>
    </Grid>
  );
}

export default HomeBoxes;
