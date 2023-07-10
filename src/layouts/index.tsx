import React, { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { PAGE_TITLE } from "@/constants";
import Footer from "@/components/Footer";



const Page = (props: any) => {
  const { children, title, admin, menuIndex, cartAmount: number } = props;
  console.log("k");



  return (
          <div>
              <Head>
                  <title>{PAGE_TITLE.PREFIX + title}</title>
              </Head>
              <Header/>
              {children}
              <Footer />
          </div>
  );
};

export default Page;
