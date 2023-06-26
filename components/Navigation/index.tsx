'use client';

/*
    Solution passing state to AnimatedMenuIcon
*/
import { NavigationLinks } from "@/interfaces";
import { MtNavLink } from "../UI";
import { usePathname } from "next/navigation";
import AnimatedMenuIcon from "../AnimatedMenuIcon";
import styles from './Navigation.module.css';
import { useEffect, useState } from "react";

interface Props {
    links: NavigationLinks[];
}

// Renders links of a navigation menu
export default function Navigation({ links } : Props) {    
    // some elements and functions will behave different for bigger screens
    const BIG_SCREEN = 768;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    const [menuOpened, setMenuOpened] = useState(screenWidth >= BIG_SCREEN);

    // we get the route to style active link
    const pathname = usePathname();
       
    // add styles to show/hide links
    const navigationVisible = menuOpened 
        ? styles['navigation--visible'] 
        : styles['navigation--hidden'];

    // listen to any changes of the screen size
    useEffect(() => {        
        function handleScreenResize() {
            setScreenWidth(window.innerWidth);
            setMenuOpened(window.innerWidth >= BIG_SCREEN);
        }

        window.addEventListener('resize', handleScreenResize)

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        }
    }, [])    

    function toggleMenu() {
        setMenuOpened(oldState => !oldState);
    }

    function closeMenu() {
        // only close it if it's a mobile screen
        if (screenWidth < BIG_SCREEN) setMenuOpened(false);
        return;
    }

    return (
        <>
            {(screenWidth < BIG_SCREEN) && <AnimatedMenuIcon onClick={toggleMenu} open={menuOpened} />}
            <nav className={`${styles.navigation} ${navigationVisible}`}>
                <ul>
                    {links.map(link => {
                        // check if link corresponds to the current route
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name} className={styles.navigation__item} onClick={closeMenu}>
                                <MtNavLink                                 
                                    href={link.href}
                                    className={isActive ? 'navLink--active' : ''}
                                >
                                    {link.name}
                                </MtNavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}


/*
    Solution with AnimatedMenuIcon using forwardRef and checkbox
*/
// import { NavigationLinks } from "@/interfaces";
// import { NavLink } from "../UI";
// import { usePathname } from "next/navigation";
// import AnimatedMenuIcon from "../AnimatedMenuIcon";
// import styles from './Navigation.module.css';
// import { useEffect, useRef } from "react";

// interface Props {
//     links: NavigationLinks[];
// }

// // Renders links of a navigation menu
// export default function Navigation({ links } : Props) {
//     const pathname = usePathname();
//     const checkBoxEl = useRef<HTMLInputElement>(null);

//     // hide the menu whenever the user clicks on a link
//     function closeMenu() {
//         if (checkBoxEl.current){
//             checkBoxEl.current.checked = false;
//         }
//     }

//     // add class to select checkbox in CSS
//     useEffect(() => {
//         checkBoxEl.current?.classList.add(styles.menu);
//     }, [])
    
//     return (
//         <>
//             <AnimatedMenuIcon ref={checkBoxEl} />
//             <nav className={styles.navigation}>
//                 <ul>
//                     {links.map(link => {
//                         // check if link corresponds to the current route
//                         const isActive = pathname === link.href;
//                         return (
//                             <li key={link.name} className={styles.navigation__item} onClick={closeMenu}>
//                                 <NavLink                                 
//                                     href={link.href}
//                                     className={isActive ? 'navLink--active' : ''}
//                                 >
//                                     {link.name}
//                                 </NavLink>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//         </>
//     )
// }