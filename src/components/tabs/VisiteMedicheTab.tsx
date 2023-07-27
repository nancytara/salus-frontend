import React from "react";
import { useRouteMatch } from "../../hooks/useRouteMatch";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

function VisiteMedicheTab() {
  const routeMatch = useRouteMatch(["/:id/dettagli", "/fogliofirme"]);
  const currentTab = routeMatch?.pattern?.path;
  return (
    <Tabs value={currentTab}>
      <Tab
        label="Dettagli"
        value="visits/:id/dettagli"
        to=":id/dettagli"
        component={Link}
      />
      <Tab
        label="Foglio Firme"
        value="visits/fogliofirme"
        to="fogliofirme"
        component={Link}
      />
    </Tabs>
  );
}

export default VisiteMedicheTab;
