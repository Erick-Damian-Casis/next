import Link from "next/link";
import {ActiveLink} from "@/components/ActiveLink";

export const NavBar = () => {
    const menuItems = [
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'About',
            path: '/about'
        },
        {
            text: 'Contact',
            path: '/contact'
        },
        {
            text: 'Pricing',
            path: '/pricing'
        },
    ];
  return (
    <nav style={{margin: '5px'}}>
        {menuItems.map((item, index) =>
             <ActiveLink key={index} title={item.text} href={item.path}/>
        )}
    </nav>
  )
}


