import Link from "next/link";
import {NavBar} from "@/components/NavBar";
import {MainLayout} from "@/components/layout/MainLayout";
import {DarkLayout} from "@/components/layout/DarkLayout";

export default function Contact(){
    return(
        <MainLayout>
            <DarkLayout>
            <h1>Hi!, I Contact</h1>
            <p>
                Go <Link  href="/"> Home</Link>
            </p>
            </DarkLayout>
        </MainLayout>
    )
}
