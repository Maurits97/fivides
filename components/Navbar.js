import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  const router = useRouter();
  
  let mobileNavOpen = false;

  function navClicked() {
    const mobileNav = document.getElementById('mobile__nav');

    if (mobileNavOpen === false) {
      mobileNav.classList.add(`${styles.mobile__active}`) //adds active class
      mobileNavOpen = true;
    } else {
      mobileNav.classList.remove(`${styles.mobile__active}`) //removes active class
      mobileNavOpen = false;
    }
  }
  
  return ( 
    <nav className={styles.nav}>
      <Link href="/"><img className={styles.logo} src="/img/Fivides_Logo_Luc_Brouwer.png" alt="logo"/></Link>

      <div className={styles.nav__items}>
        <Link href="/"><a className={router.pathname == "/" ? styles.nav__active : ""}>Home</a></Link>
        <Link href="/websitecopy"><a className={router.pathname == "/websitecopy" ? styles.nav__active : ""}>Website copy</a></Link>
        <Link href="/websiteanalyse"><a className={router.pathname == "/websiteanalyse" ? styles.nav__active : ""}>Website analyse</a></Link>
        <Link href="/tarieven"><a className={router.pathname == "/tarieven" ? styles.nav__active : ""}>Tarieven</a></Link>
        <Link href="https://blog.fivides.nl">Blog</Link>
        <Link href="/overons"><a className={router.pathname == "/overons" ? styles.nav__active : ""}>Over ons</a></Link>
      </div>

      <div className={styles.hamburger} onClick={navClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </div>

      <div className={styles.mobile__nav} id="mobile__nav">
        <svg onClick={navClicked} className={styles.cross} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>

        <div className={styles.mobile__nav__items}>
          <Link href="/"><a onClick={navClicked} className={router.pathname == "/" ? styles.items__active : ""}>Home</a></Link>
          <Link href="/websitecopy"><a onClick={navClicked} className={router.pathname == "/websitecopy" ? styles.items__active : ""}>Website copy</a></Link>
          <Link href="/websiteanalyse"><a onClick={navClicked} className={router.pathname == "/websiteanalyse" ? styles.items__active : ""}>Website analyse</a></Link>
          <Link href="/tarieven"><a onClick={navClicked} className={router.pathname == "/tarieven" ? styles.items__active : ""}>Tarieven</a></Link>
          <Link href="https://blog.fivides.nl">Blog</Link>
          <Link href="/overons"><a onClick={navClicked} className={router.pathname == "/overons" ? styles.items__active : ""}>Over ons</a></Link>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;