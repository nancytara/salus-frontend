import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function HomeBanner() {
  const theme = useTheme();

  return (
    <Paper
      style={{
        position: "relative",
        background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        height: 120,
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
      }}
    >
      <Typography variant="h5" color="white">
        Salus
      </Typography>
      <Box
        position="absolute"
        bottom={0}
        left={theme.spacing(2)}
        paddingX={theme.spacing(2)}
        paddingY={theme.spacing(1)}
        style={{ backgroundColor: `${theme.palette.grey[900]}30` }}
      >
        <Typography color="white" variant="caption">
          Bentornato, Stefano!
        </Typography>
      </Box>
    </Paper>
  );
}

export default HomeBanner;
