import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import {
  MedicaDayControllerApi,
  MedicalDayDTO,
  VisitaMedicaDTOStatoVisitaMedicaEnum,
} from "../../api";
import { useQuery } from "@tanstack/react-query";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

type VisitaTable = {
  nome: string;
  stato: VisitaMedicaDTOStatoVisitaMedicaEnum;
};
const columns: GridColDef<VisitaTable>[] = [
  {
    field: "nome",
    headerName: "Nome",
    flex: 1,
    valueGetter: (param: GridValueGetterParams<VisitaTable>) => param.row.nome,
  },
  {
    field: "stato",
    headerName: "Stato",
    flex: 1,
    renderCell: (params) => {
      const value = params.row.stato;

      let label;
      let color;

      if (value === VisitaMedicaDTOStatoVisitaMedicaEnum.EFFETTUATA) {
        label = "Effettuata";
        color = "success";
      } else if (value === VisitaMedicaDTOStatoVisitaMedicaEnum.INSERITA) {
        label = "Inserita";
        color = "primary";
      } else {
        label = "Non Effettuata";
        color = "warning";
      }

      return (
        <Chip
          label={label}
          color={
            color as
              | "success"
              | "warning"
              | "default"
              | "primary"
              | "secondary"
              | "error"
              | "info"
          }
        />
      );
    },
  },
];

function Pazienti() {
  const { id } = useParams();
  const theme = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: ["medical-day", id],
    queryFn: () =>
      new MedicaDayControllerApi().findById1(id as unknown as number),
    select: (response) => response.data,
  });
  const visiteMediche = data?.visiteMediche ?? [];

  const visiteMedicheRows =
    visiteMediche.map((visita) => ({
      nome: visita.dipendente?.nome,
      stato: visita.statoVisitaMedica,
    })) ?? [];

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
            <PersonIcon style={{ color: "grey" }} />
            <Typography variant="body2" color="grey" fontSize={16}>
              Pazienti
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
        <Paper sx={{ height: "auto", width: "100%" }}>
          <DataGrid
            loading={isLoading}
            columns={columns ?? []}
            rows={visiteMedicheRows ?? []}
            hideFooter
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

export default Pazienti;
