import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "react-router-dom";
import { useRouteMatch } from "../../hooks/useRouteMatch";
import { useTheme } from "@mui/material/styles";

function MainTabs() {
  const theme = useTheme();
  const routeMatch = useRouteMatch([
    "/dashboard",
    "/calendar",
    "/visits",
    "/contacts",
    "/imports",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab
        style={{ padding: theme.spacing(3) }}
        label="Dashboard"
        value="/dashboard"
        to="/dashboard"
        component={Link}
      />
      <Tab
        style={{ padding: theme.spacing(3) }}
        label="Calendario"
        value="/calendar"
        to="/calendar"
        component={Link}
      />
      <Tab
        style={{ padding: theme.spacing(3) }}
        label="Visite mediche"
        value="/visits/${id}"
        to="/visits/${id}"
        component={Link}
      />
      <Tab
        style={{ padding: theme.spacing(3) }}
        label="Contatti"
        value="/contacts"
        to="/contacts"
        component={Link}
      />
      <Tab
        style={{ padding: theme.spacing(3) }}
        label="Batch importati"
        value="/imports"
        to="/imports"
        component={Link}
      />
    </Tabs>
  );
}

export default MainTabs;
