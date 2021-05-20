import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return ( 
    <div className={styles.footer}>
      <img className={styles.logo} src="/img/Fivides_Logo_Luc_Brouwer.png" />
      <div className={styles.footer__circle}></div>
    </div>
   );
}
 
export default Footer;