import Link from "next/link";
import Head from "next/head";

import {NavBar} from "@/components/NavBar";


export const MainLayout = ({children}) => {
  return(
      <div>
          <Head>
              <title>First App</title>
              <meta name="description" content="Home Page"/>
              <link rel="icon" href="/favicon.ico"/>
          </Head>
          <NavBar/>
          <main>
              {children}
          </main>
      </div>
  )
}
