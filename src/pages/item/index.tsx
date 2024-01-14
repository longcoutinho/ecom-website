import {PAGE_TITLE, PageURL} from "@/constants";
import Page from "@/layouts";
import { Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React from "react";
import BannerTitle from "@/components/BannerTitle";
import {COMMON_TEXT} from "@/constants/message";

export default function ItemComponent() {

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={1}>
      <Box className="item-page-content" sx={{ width: "100vw" }}>
          <BannerTitle
              link={PageURL.POST}
              title_link="Blog"
              title={COMMON_TEXT.COLLECTION}></BannerTitle>
      </Box>
    </Page>
  );
}
