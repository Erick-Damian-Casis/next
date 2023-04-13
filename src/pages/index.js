import Link from "next/link";
import {NavBar} from "@/components/NavBar";
import {MainLayout} from "@/components/layout/MainLayout";

export default function HomePage(){

  return(
      <MainLayout>
          <p>Hello, My name is Erick and this is my first project next.js</p>
          <p>Ir a <Link href="/about">About</Link></p>
      </MainLayout>
  )
}
