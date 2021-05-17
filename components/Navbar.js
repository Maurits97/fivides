import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  const router = useRouter();
  
  return ( 
    <nav className={styles.nav}>
      <img className={styles.logo} src="/img/Fivides_Logo_Luc_Brouwer.png" />

      <div className={styles.nav__items}>
        <Link href="/"><a className={router.pathname == "/" ? styles.nav__active : ""}>Home</a></Link>
        <Link href="/about"><a className={router.pathname == "/about" ? styles.nav__active : ""}>Actiepad</a></Link>
        <Link href="/"><a>Analysemodel</a></Link>
        <Link href="/"><a>Rapportage</a></Link>
        <Link href="/"><a>Over ons</a></Link>
      </div>
    </nav>
   );
}
 
export default Navbar;