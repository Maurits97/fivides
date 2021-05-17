import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className="main">
      <div className={styles.head}>
        <h1 className={styles.header}>Fivides Actiepad Analyse</h1>
        <p className={styles.subtext}>Met een Actiepad Analyse van Fivides weet je hoe je van een jouw websitebezoekers klanten kunt maken.</p>
        <div className={styles.head__circle}></div>
      </div>

      <div className="content">
        <div className={styles.bg}>
          <div className={styles.bg__line}></div>
          <div className={styles.bg__line}></div>
          <div className={styles.bg__line}></div>
        </div>

        <div className="content__wrapper">
          <div className="content__container">
            <h2 className="content__header">Maak van je website bezoekers klanten</h2>
            <p className="content__text">Website bezoekers worden klanten als de informatie op een website vertrouwen opwekt en tot actie aanzet. Door betrouwbare informatie in de juiste volgorde aan te reiken wordt een pad naar de gewenste actie gelegd. Fivides noemt dat het actiepad. Een Actiepad Analyse van Fivides maakt zichtbaar waar de zwakke plekken in de informatie op de actiepaden van jouw website zitten. Daarmee kun je snel aan de slag om de informatie op jouw actiepaden te verbeteren en meer klanten te krijgen.</p>
          </div>

          <div className="content__container block">
            <h2 className="content__header">Vertrouwen is cruciaal</h2>
            <p className="content__text">Er is veel wetenschappelijk bewijs dat vertrouwen in een website cruciaal is om gewenst gedrag bij website bezoekers te stimuleren. Daarvoor moet die informatie relevant, consistent, duidelijk en beargumenteerd zijn. </p>
            <button className="content__button">Lees meer</button>
          </div>

          <div className="content__container block">
            <h2 className="content__header">Leid je website bezoeker naar de actie</h2>
            <p className="content__text">Om een bezoeker op je website naar een actie te leiden moet de informatie niet alleen betrouwbaar zijn, maar ook richting geven aan de gedachten van die bezoeker.  Dat doe je door stap voor stap informatie te verstrekken die aansluit op de vragen van de website bezoeker. Elk stukje informatie dat een bezoeker tegenkomt zal namelijk weer nieuwe vragen oproepen. Door al die vragen te beantwoorden leid je de bezoeker naar de laatste vraag waarop de actie kan volgen. Zo een laatste vraag luidt dan: “Wat moet ik doen om nu een bestelling te plaatsen”.</p>
            <button className="content__button">Lees meer</button>
          </div>

          <div className="content__container block">
            <h2 className="content__header">Actiepad Analyse van Fivides wijst de weg</h2>
            <p className="content__text">De rapportage van een Actiepad Analyse van Fivides maakt in tekst en beeld duidelijk wat de zwakke plekken in de informatie op een actiepad zijn. Ten eerste is te zien welke informatie tekortschiet op relevantie, consistentie, duidelijkheid en argumentatie. Ten tweede wordt zichtbaar gemaakt welke elementen een bezoeker van het actiepad afleiden of waar gaten in het actiepad zitten. Zoals Johan Cruijff al zei: ‘je gaat het pas zien als je het doorhebt’. Het zal je verbazen dat je die zwakke plekken niet eerder zelf hebt gezien. In een schriftelijke rapportage beschrijft Fivides uitvoerig de resultaten van de Actiepad Analyse. Daarbij worden aanbevelingen gedaan voor verbeteracties. De bijgeleverde power point, maakt het makkelijk om de resultaten door te nemen met medewerkers of derden zoals een web-ontwerper of een webbouwer. Zo kun je direct aan de slag om de informatie op jouw website te verbeteren.</p>
            <button className="content__button">Lees meer</button>
          </div>

          <div className="contact">
            <h3></h3>
            <p></p>
          </div>

        </div>        
      </div>
    </div>
  )
}
