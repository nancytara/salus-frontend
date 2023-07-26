import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query";
import { EventoControllerApi, EventoDTOTipologiaEventoEnum } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";

function getLabelForEventType(eventType: EventoDTOTipologiaEventoEnum): string {
  switch (eventType) {
    case EventoDTOTipologiaEventoEnum.VISITAMEDICAEFFETTUATA:
      return "Visita medica effettuata";
    case EventoDTOTipologiaEventoEnum.VISITAMEDICAANNULLATA:
      return "Visita medica annullata";
    case EventoDTOTipologiaEventoEnum.VISITAMEDICACONCLUSA:
      return "Visita medica conclusa";
    case EventoDTOTipologiaEventoEnum.VISITAMEDICANONEFFETTUATA:
      return "Visita medica non effettuata";
    case EventoDTOTipologiaEventoEnum.VISITAMEDICASCADUTA:
      return "Visita medica scaduta";
    case EventoDTOTipologiaEventoEnum.VISITAMEDICAPRENOTATA:
      return "Visita medica prenotata";
    case EventoDTOTipologiaEventoEnum.SCADENZAVISITAMODIFICATA:
      return "Scadenza visita medica";
    case EventoDTOTipologiaEventoEnum.ELIMINATOCERTIFICATOMEDICO:
      return "Certificato medico eliminato";
    case EventoDTOTipologiaEventoEnum.ALLEGATOCERTIFICATOMEDICO:
      return "Certificato medico allegato";
    case EventoDTOTipologiaEventoEnum.ASSEGNATOILMEDICALDAY:
      return "Medical day assegnato";
  }
}

function TodayEvents() {
  const theme = useTheme();
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => new EventoControllerApi().findAll4({}, { page: 0, size: 4 }),
  });

  return (
    <Card style={{ backgroundColor: "white" }}>
      <CardHeader
        component={() => (
          <Box
            style={{
              backgroundColor: theme.palette.primary.light,
              padding: theme.spacing(2),
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing(1),
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon style={{ color: "white" }} />
            <Typography variant="body2" color="white" fontSize={16}>
              Eventi odierni
            </Typography>
          </Box>
        )}
      />
      <CardContent style={{ padding: 0 }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <List>
            {events?.data.content?.map((event) => (
              <ListItem key={event.id}>
                <ListItemAvatar>
                  <Avatar>
                    <CalendarMonthIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${
                    event.tipologiaEvento &&
                    getLabelForEventType(event.tipologiaEvento)
                  }: ${event.dipendente?.nome} ${event.dipendente?.cognome}`}
                  secondary={
                    event.timestamp &&
                    new Date(event.timestamp).toLocaleDateString("it", {
                      dateStyle: "medium",
                    })
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}

export default TodayEvents;
