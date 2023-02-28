import React from "react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Header, Icon } from "zmp-ui";
import { getConfig } from "../../components/config-provider";
import { useTranslation } from "react-i18next";
import CouponInactive from "../../assets/icons/Linear/coupon.svg";

function AppHeader() {
  const location = useLocation();
  const { t } = useTranslation();
  const language = localStorage.getItem("remember-language");
  const title = useMemo(() => {
    switch (location.pathname) {
      case "/":
        return t("Header.Home");
      case "/stores":
        return t("Header.Stores");
      case "/coupon":
        return t("Header.Coupon");
      case "/order":
        return t("Header.Order");
      case "/other":
        return t("Header.Other");
      default:
        return "The Coffee House";
    }

    return getConfig((c) => c.app.title);
  }, [location.pathname, language]);

  return (
    <>
      <Header
        className="sticky top-0"
        title={title}
        style={{ backgroundColor: getConfig((c) => c.app.statusBarColor) }}
        showBackIcon={location.pathname !== "/"}
      />
    </>
  );
}

export default AppHeader;
