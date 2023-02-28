import React, { useEffect } from "react";
import { Page, Box } from "zmp-ui";
import api from "zmp-sdk";

const Home = () => {
  const { platform } = api.getSystemInfo();
  return (
    <Page
      className={`home-page ${
        platform === "android" ? "min-h-[120vh]" : "min-h-[140vh]"
      }  flex flex-col flex-1`}
    >
      <Box></Box>
      <Box
        className="mt-[20px] px-[13px] pt-[8px] mb-[40px] bg-gray-color flex flex-col"
        style={{ flex: 1 }}
      ></Box>
    </Page>
  );
};

export default Home;
