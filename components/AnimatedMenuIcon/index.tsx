import styles from './AnimatedMenuIcon.module.css';

interface Props {
    onClick: () => void;
    open: boolean
}

// Renders an animated three-bar icon representing a menu on mobile.
// We pass classname prop to the input so a parent component can
// access it in order to verify if checkbox is checked or not
export default function  AnimatedMenuIcon({ onClick, open }: Props) {
    return (
        <div 
            className={`${styles.icon} ${open ? styles['icon--open'] : ''}`} 
            onClick={onClick} 
        >
            <span className={styles.icon__trace}></span>
            <span className={styles.icon__trace}></span>
            <span className={styles.icon__trace}></span>
        </div>
    )
};


/*
    Solution with checkbox and forwardRef
*/
// import { forwardRef } from 'react';
// import styles from './AnimatedMenuIcon.module.css';

// // Renders an animated three-bar icon representing a menu on mobile.
// // We pass classname prop to the input so a parent component can
// // access it in order to verify if checkbox is checked or not
// const AnimatedMenuIcon = forwardRef<HTMLInputElement>((_, ref) => {
//     return (
//         <>
//             <input ref={ref} type="checkbox" id="AnimatedMenuIconToggle" className={styles.checkbox} />
//             <label htmlFor="AnimatedMenuIconToggle" className={styles.icon}>
//                 <div className={styles.icon__trace}></div>
//                 <div className={styles.icon__trace}></div>
//                 <div className={styles.icon__trace}></div>
//             </label>
//         </>
//     )
// });

// // fix ESLint warning
// AnimatedMenuIcon.displayName = 'AnimatedMenuIcon';
// export default AnimatedMenuIcon;