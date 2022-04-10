import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'
import Header from '../components/HeaderBlock'
import Head from 'next/head';
import ContentBlockWrapper from '../components/ContentBlockWrapper';
import Link from 'next/link';

const Actiepad = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="sub" page="Actiepad" header="Actiepaden verhogen de effectiviteit van een website" text="Goed doordachte actiepaden leiden bezoekers van een website naar een gewenste actie en verhogen daarmee de effectiviteit van een website."/>

        <div className="content">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>

          <div className="content__wrapper">
            <ContentBlockWrapper>
              <h2 className="content__header">Het effect van een actiepad</h2>
              <p className="content__text line-height">Een actiepad bestaat uit informatie die een bezoeker op een website aantreft, waarbij die informatie de bezoeker naar een gewenste actie leidt. Actiepaden verhogen de effectiviteit van een website als de informatie op die actiepaden aansluit op de informatiebehoefte van de bezoeker van die website. Die informatiebehoefte uit zich in vragen van de bezoeker en begint met de zoekvraag die iemand bij Google intikt. Vervolgens zal elk informatie-element weer nieuwe vragen oproepen. Vragen als: wat is dat dan, waarom is dat zo, wie doet dat, hoe werkt dat dan en wat kost het? Als antwoord op die informatiebehoefte communiceert alles wat de bezoeker op de website tegenkomt. De bezoeker vindt dus antwoorden in tekst, in visuele elementen zoals foto’s en afbeeldingen maar ook in navigatieknoppen en zelfs het design van de website. Een doordacht actiepad waarborgt dat alle vragen van een websitebezoeker overzichtelijk aan bod komen.</p>
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Leiding geven op een actiepad</h2>
              <p className="content__text line-height">Om een bezoeker naar een actie te leiden is het noodzakelijk dat een actiepad begint met een duidelijke statement als centraal antwoord op de zoekvraag van een bezoeker. Dat statement bevat de belofte van het voordeel dat de bezoeker zal krijgen als die de gewenste actie uitvoert. In marketingtermen heet dat: de waardepropositie. Op de homepage van deze website is de waardepropositie dat een Fivides Actiepad Analyse laat zien hoe jouw websitebezoekers klanten kunnen worden. Dat is het antwoord op de zoekvraag: Wat moet ik doen om meer klanten te krijgen via mijn website? Door alle vragen te beantwoorden die de waardepropositie van Fivides oproept, wordt de bezoeker geleid naar de call to action: mail naar l.brouwer@fivides.nl.</p>
              <p className="content__text line-height">
                Er zullen meer vragen leven bij de bezoeker voordat die de gewenste actie wil uitvoeren. Daarom zijn in de tekst op de homepage overzichtelijke links gelegd naar detailinformatie over actiepaden, het analysemodel en de rapportage. Deze onderwerpen zijn ook te zien in de navigatiebalk. De Over Ons-knop geeft ten slotte informatie over het bedrijf (in dit geval de persoon) achter de dienstverlening. Omdat dit tegenwoordig een standaard pagina is, hoeft daar niet apart naar gelinkt te worden.
              </p>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Het actiepad moet vertrouwen opwekken</h2>
              <p className="content__text line-height">De kwaliteit van de antwoorden op een actiepad bepaalt uiteindelijk de effectiviteit van een website. De antwoorden moeten namelijk het vertrouwen opwekken in de organisatie achter de website, én in de aangereikte oplossing. Zonder vertrouwen, geen actie. Vertrouwen wordt opgewekt als de antwoorden relevant, consistent, duidelijk en beargumenteerd zijn.</p>
              <Link href='/analysemodel'><button className="content__button">Lees meer</button></Link>  
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Fivides Actiepad Analyse geeft inzicht in effectiviteit van een website</h2>
              <p className="content__text line-height">De Fivides Actiepad Analyse geeft je snel inzicht in de effectiviteit van jouw website. Dat is belangrijk omdat een effectieve website meer reacties van websitebezoekers oplevert. Dat betekent meer leads, meer klanten, meer bestellingen. De Fivides Actiepad Analyse maakt zichtbaar waar het actiepad verbeterd kan worden.  Bovendien wordt zichtbaar gemaakt welke elementen op de website afbreuk doen aan het vertrouwen in de website en de aangereikte oplossing. Daarvoor wordt eerst de relevantie van de informatie bepaald. Vervolgens is te zien welke informatie tekortschiet op de eigenschappen consistentie, duidelijkheid en argumentatie.</p>
              <Link href='/websiteanalyse'><button className="content__button">Lees meer</button></Link>  
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Ga nu aan de slag en bestel een Fivides Actiepad Analyse met <span className="green">25%</span> introductiekorting</h2>
              <p className='content__text line-height'>Ter introductie is de Fivides Actiepad Analyse nu te bestellen met 25% korting. Je betaalt slechts €712,50 (excl. 21% BTW) in plaats van €950 (excl. 21% BTW).</p>
              <p className='content__text line-height'>Mail Luc Brouwer om de Fivides Actiepad Analyse met 25% korting te bestellen. Vermeld in de mail voor welke website je een Fivides Actiepad Analyse wilt laten uitvoeren. Voeg liefst ook een telefoonnummer toe. Wij nemen daarna contact op om de bestelling rond te maken. Voor vragen over, of het bestellen van de Fivides Actiepad Analyse: mail naar <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
            </ContentBlockWrapper>
          </div>     
        </div>

        {/* <Contact /> */}
      </div>
    </>
   );
}
 
export default Actiepad;