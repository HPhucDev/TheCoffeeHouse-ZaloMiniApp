import React, { useState } from "react";
import { BottomNavigation, Icon } from "zmp-ui";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeInactive from "../../assets/icons/Linear/home.svg";
import HomeActive from "../../assets/icons/Bold/home.svg";
import OrderInactive from "../../assets/icons/Linear/order.svg";
import OrderActive from "../../assets/icons/Bold/order.svg";
import StoresInactive from "../../assets/icons/Linear/stores.svg";
import StoresActive from "../../assets/icons/Bold/stores.svg";
import CouponInactive from "../../assets/icons/Linear/coupon.svg";
import CouponActive from "../../assets/icons/Bold/coupon.svg";
import OtherInactive from "../../assets/icons/Linear/other.svg";
import OtherActive from "../../assets/icons/Bold/other.svg";

const BottomNavigationLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("/");

  const links = [
    {
      name: `${t("BottomNavigation.Home")}`,
      icon: <img src={HomeInactive} width="20px" className="ml-1" />,
      activeIcon: <img src={HomeActive} width="20px" className="ml-1" />,
      path: "/",
    },
    {
      name: `${t("BottomNavigation.Order")}`,
      icon: <img src={OrderInactive} width="20px" className="ml-1" />,
      activeIcon: <img src={OrderActive} width="20px" className="ml-1" />,
      path: "/order",
    },
    {
      name: `${t("BottomNavigation.Stores")}`,
      icon: <img src={StoresInactive} width="20px" className="ml-1" />,
      activeIcon: <img src={StoresActive} width="20px" className="ml-1" />,
      path: "/stores",
    },
    {
      name: `${t("BottomNavigation.Coupon")}`,
      icon: <img src={CouponInactive} width="20px" className="ml-1" />,
      activeIcon: <img src={CouponActive} width="20px" className="ml-1" />,
      path: "/coupon",
    },
    {
      name: `${t("BottomNavigation.Other")}`,
      icon: <img src={OtherInactive} width="17px" className="ml-1" />,
      activeIcon: <img src={OtherActive} width="17px" className="ml-1 " />,
      path: "/other",
    },
  ];

  return links.some((link) => link.path === location?.pathname) ? (
    <BottomNavigation
      fixed
      className="z-[999] pt-3"
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
      id={"bottom-nav"}
    >
      {links.map((link) => (
        <BottomNavigation.Item
          key={link.path}
          label={link.name}
          icon={link.icon}
          activeIcon={link.activeIcon}
          linkTo={link.path}
          className={`flex-col justify-items-center flex pt-1 ${
            location.pathname === link.path ? "text-primary" : "text-gray"
          } `}
        />
      ))}
    </BottomNavigation>
  ) : (
    <></>
  );
};

export default BottomNavigationLayout;
