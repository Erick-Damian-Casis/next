import Link from "next/link";

import {MainLayout} from "@/components/layout/MainLayout";
import {DarkLayout} from "@/components/layout/DarkLayout";

export default function About(){

    return(
        <MainLayout>
            <DarkLayout>
            <h1>Hi!, I am About</h1>
            <p>
                Go <Link  href="/"> Home</Link>
            </p>
            </DarkLayout>
        </MainLayout>
    )
}


