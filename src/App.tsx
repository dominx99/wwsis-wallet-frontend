import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import "./App.scss";
import { darkTheme as styledComponentsDarkTheme } from "./app/styled-components/themes";
import { darkTheme as muiDarkTheme } from "./app/mui/themes";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <React.StrictMode>
      <StyledComponentsThemeProvider theme={styledComponentsDarkTheme}>
        <MuiThemeProvider theme={muiDarkTheme}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </MuiThemeProvider>
      </StyledComponentsThemeProvider>
    </React.StrictMode>
  );
}

export default App;
