import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className="main">
      <div className={styles.head}>
        <h1 className={styles.header}>Fivides Actiepad Analyse</h1>
        <p className={styles.subtext}>Met een Actiepad Analyse van Fivides weet je hoe je van een jouw websitebezoekers klanten kunt maken.</p>
      </div>

      <div className="content">
        <div className={styles.bg}>
          <div className={styles.bg__line}></div>
          <div className={styles.bg__line}></div>
          <div className={styles.bg__line}></div>
        </div>

        <div className="content__wrapper">
          <div className={styles.element}></div>
        </div>
        
      </div>
      
    </div>
  )
}
