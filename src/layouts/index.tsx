import React, { useEffect } from "react";
import Head from "next/head";
import { PAGE_TITLE } from "@/constants";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";



const Page = (props: any) => {
  const { children, title, admin, menuIndex, cartAmount: number } = props;



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
