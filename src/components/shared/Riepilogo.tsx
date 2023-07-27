import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import { useParams } from "react-router-dom";
import { MedicaDayControllerApi } from "../../api";
import { useQuery } from "@tanstack/react-query";

function Riepilogo() {
  const { id } = useParams();
  const theme = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: ["medical-day", id],
    queryFn: () =>
      new MedicaDayControllerApi().findById1(id as unknown as number),
    select: (response) => response.data,
  });

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Card style={{ backgroundColor: "white" }}>
      <CardHeader
        component={() => (
          <Box
            style={{
              padding: theme.spacing(2),
              display: "flex",

              flexDirection: "column",
              gap: theme.spacing(1),
              alignItems: "center",
            }}
          >
            <FilterFramesIcon style={{ color: "grey" }} />
            <Typography variant="body2" color="grey" fontSize={16}>
              Riepilogo
            </Typography>
          </Box>
        )}
      />
      <CardContent
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography align="center" variant="body1">
          VisiteTotali:
          {data?.visiteMediche?.length}
        </Typography>
        <Typography align="center" variant="body1" marginY={1}>
          Visite Prenotate:
          {data?.visiteMediche?.length}
        </Typography>
        <Typography align="center" variant="body1">
          Visite Libere:
          {data?.visiteMediche?.length}
        </Typography>
        <Typography align="center" variant="body1">
          Visite Libere:
          {data?.statoMedicalDay}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Riepilogo;
