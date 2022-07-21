import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
           <a href="#"><img src={igniteLogo} alt="logo do ignite" /></a>
        </header>
    )
}