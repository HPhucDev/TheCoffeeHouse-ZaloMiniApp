import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import { ConfigProvider, getConfig } from "./config-provider";
import "../localization";
import HomePage from "../pages/Home";
import AppHeader from "../layouts/Header";
import BottomNavigationLayout from "../layouts/BottomNavigation";

const MyApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
          "--zmp-secondary-color": getConfig((c) => c.template.secondaryColor),
        }}
      >
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AppHeader />
              <AnimationRoutes>
                <Route path="/" element={<HomePage />}></Route>
              </AnimationRoutes>
              <BottomNavigationLayout />
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
