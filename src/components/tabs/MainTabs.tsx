import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "react-router-dom";
import { useRouteMatch } from "../../hooks/useRouteMatch";

function MainTabs() {
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
        label="Dashboard"
        value="/dashboard"
        to="/dashboard"
        component={Link}
      />
      <Tab
        label="Calendario"
        value="/calendar"
        to="/calendar"
        component={Link}
      />
      <Tab
        label="Visite mediche"
        value="/visits/${id}"
        to="/visits/${id}"
        component={Link}
      />
      <Tab label="Contatti" value="/contacts" to="/contacts" component={Link} />
      <Tab
        label="Batch importati"
        value="/imports"
        to="/imports"
        component={Link}
      />
    </Tabs>
  );
}

export default MainTabs;
