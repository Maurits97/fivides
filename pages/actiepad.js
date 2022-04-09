import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'
import Header from '../components/HeaderBlock'
import Head from 'next/head';

const Actiepad = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
        <meta name="keywords" content="trefwoord 1, trefwoord 2, trefwoord 3"/>
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
            <ContentBlock tag="default" header="Het effect van een actiepad" text="Een actiepad bestaat uit informatie die een bezoeker op een website aantreft, waarbij die informatie de bezoeker naar een gewenste actie leidt. Actiepaden verhogen de effectiviteit van een website als de informatie op die actiepaden aansluit op de informatiebehoefte van de bezoeker van die website. Die informatiebehoefte uit zich in vragen van de bezoeker en begint met de zoekvraag die iemand bij Google intikt. Vervolgens zal elk informatie-element weer nieuwe vragen oproepen. Vragen als: wat is dat dan, waarom is dat zo, wie doet dat, hoe werkt dat dan en wat kost het? Als antwoord op die informatiebehoefte communiceert alles wat de bezoeker op de website tegenkomt. De bezoeker vindt dus antwoorden in tekst, in visuele elementen zoals foto’s en afbeeldingen maar ook in navigatieknoppen en zelfs het design van de website. Een doordacht actiepad waarborgt dat alle vragen van een websitebezoeker overzichtelijk aan bod komen."/>

            <ContentBlock tag="default" header="Leiding geven op een actiepad" text="Om een bezoeker naar een actie te leiden is het noodzakelijk dat een actiepad begint met een duidelijke statement als centraal antwoord op de zoekvraag van een bezoeker. Dat statement bevat de belofte van het voordeel dat de bezoeker zal krijgen als die de gewenste actie uitvoert. In marketingtermen heet dat: de waardepropositie. Op de homepage van deze website is de waardepropositie dat een Fivides Actiepad Analyse laat zien hoe jouw websitebezoekers klanten kunnen worden. Dat is het antwoord op de zoekvraag: Wat moet ik doen om meer klanten te krijgen via mijn website? Door alle vragen te beantwoorden die de waardepropositie van Fivides oproept, wordt de bezoeker geleid naar de call to action: mail naar l.brouwer@fivides.nl." textTwo="Er zullen meer vragen leven bij de bezoeker voordat die de gewenste actie wil uitvoeren. Daarom zijn in de tekst op de homepage overzichtelijke links gelegd naar detailinformatie over actiepaden, het analysemodel en de rapportage. Deze onderwerpen zijn ook te zien in de navigatiebalk. De Over Ons-knop geeft ten slotte informatie over het bedrijf (in dit geval de persoon) achter de dienstverlening. Omdat dit tegenwoordig een standaard pagina is, hoeft daar niet apart naar gelinkt te worden."/>

            <ContentBlock tag="block" header="Het actiepad moet vertrouwen opwekken" text="De kwaliteit van de antwoorden op een actiepad bepaalt uiteindelijk de effectiviteit van een website. De antwoorden moeten namelijk het vertrouwen opwekken in de organisatie achter de website, én in de aangereikte oplossing. Zonder vertrouwen, geen actie. Vertrouwen wordt opgewekt als de antwoorden relevant, consistent, duidelijk en beargumenteerd zijn." link="/analysemodel" />

            <ContentBlock tag="block" header="Fivides Actiepad Analyse geeft inzicht in effectiviteit van een website" text="De Fivides Actiepad Analyse geeft je snel inzicht in de effectiviteit van jouw website. Dat is belangrijk omdat een effectieve website meer reacties van websitebezoekers oplevert. Dat betekent meer leads, meer klanten, meer bestellingen. De Fivides Actiepad Analyse maakt zichtbaar waar het actiepad verbeterd kan worden.  Bovendien wordt zichtbaar gemaakt welke elementen op de website afbreuk doen aan het vertrouwen in de website en de aangereikte oplossing. Daarvoor wordt eerst de relevantie van de informatie bepaald. Vervolgens is te zien welke informatie tekortschiet op de eigenschappen consistentie, duidelijkheid en argumentatie." link="/rapportage" />
          </div>     
        </div>

        <Contact />
      </div>
    </>
   );
}
 
export default Actiepad;