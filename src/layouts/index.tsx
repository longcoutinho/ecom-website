import React, { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { PAGE_TITLE } from "@/constants";
import Footer from "@/components/Footer";
import { IPageProps } from "@/interfaces";

const Page = (props: IPageProps) => {
  const { children, title, admin, menuIndex } = props;

  return (
    <div>
      <Head>
        <title>{PAGE_TITLE.PREFIX + title}</title>
      </Head>
      {children}
      <Footer />
    </div>
  );
};

export default Page;
