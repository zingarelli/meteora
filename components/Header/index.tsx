import styles from './header.module.css';
import Logo from "../Logo";
import Navigation from '../Navigation';
import Search from '../Search';

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Nossas Lojas',
        href: '/detalhes'
    },
    {
        name: 'Novidades',
        href: '/news'
    },
    {
        name: 'Promoções',
        href: '/promocoes'
    },
]

export default function Header() {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.linksWrapper}>
                <Logo src='/logo.png' alt='Logotipo da Meteora' />
                <Navigation links={links}/>
            </div>
            <div className={styles.searchWrapper}>
                <Search />
            </div>
        </header>
    )
}