import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route
        path="calendar"
        element={
          <div>
            <span>Calendar</span>
          </div>
        }
      />
      <Route
        path="visits"
        element={
          <div>
            <span>Visits</span>
          </div>
        }
      />
      <Route
        path="contacts"
        element={
          <div>
            <span>Contacts</span>
          </div>
        }
      />
      <Route
        path="imports"
        element={
          <div>
            <span>Imports</span>
          </div>
        }
      />
    </Route>,
  ),
);

export default router;
