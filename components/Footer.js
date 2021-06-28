import styles from '../styles/Footer.module.scss'

const Footer = () => {
  const date= new Date();
  const year = date.getFullYear();

  return ( 
    <div className={styles.footer}>
      <p>© {year} Fivides</p>
      <p className={styles.footer__contact}>Contact: <a href="mailto:info@fivides.nl" className="contact__email" target="_blank">info@fivides.nl</a></p>
      <div className={styles.footer__circle}></div>
    </div>
   );
}
 
export default Footer;