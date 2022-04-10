import Link from 'next/link'
import ContentBlockWrapper from '../components/ContentBlockWrapper'
import Header from '../components/HeaderBlock'
import Head from 'next/head';

const Analysemodel = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="sub" page="Analysemodel" header="Vertrouwen is cruciaal" text="Het analyse model van Fivides bevat vier eigenschappen van informatie die gezamenlijk het vertrouwen in die informatie opwekken. Dat vertrouwen is cruciaal omdat een websitebezoeker geen actie zal uitvoeren als het vertrouwen in de website ontbreekt."/>

        <div className="content">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>

          <div className="content__wrapper">
            <ContentBlockWrapper>
              <h2 className="content__header">Het Fivides Analyse Model</h2>
              <div className="image-container">
                <img className="image" src="/img/Fivides_Luc_Brouwer_Model.png" alt="Het anaylse model"/>
                <p className="image-text">Fig. 1 Fivides Actiepad Analysemodel</p>
              </div>
              <p className="content__text line-height">Het Fivides Analyse Model (zie figuur 1) geeft de vier eigenschappen van informatie die als stimulus bij een persoon vertrouwen kunnen opwekken. Dat vertrouwen leidt vervolgens tot een gewenste actie. De vier eigenschappen van informatie die vertrouwen opwekken, moeten voor een website bewust in de informatie aangebracht worden. Dat gebeurt in tekst, in beeld, in het algemene design en in het interactie design. </p>
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Wetenschappelijke basis van het Fivides Analyse Model</h2>
              <p className="content__text line-height">Het Fivides Analysemodel is gebaseerd op het Stimulus-Organism-Response model van Mahrabian en Russel (1974), en bevat vier stimuli die te maken hebben met eigenschappen van informatie (figuur 1). Die eigenschappen van informatie zorgen ervoor dat de ontvanger van die informatie vertrouwen krijgt in die informatie en daarmee in de website zelf. Het voordeel van de focus op de vier eigenschappen van informatie die vertrouwen opwekken, is dat uit de analyse heel concreet naar voren komt, wat aan de informatie verbeterd moet worden.</p>
              <p className='content__text line-height'>In wetenschappelijke artikelen over websites en gedragsintenties komen de kwaliteit en de relevantie van de informatie naar voren als belangrijke stimuli om vertrouwen bij websitebezoekers op te wekken. Daarnaast wordt een veelheid aan andere stimuli genoemd. Dit zijn echter veelal afgeleiden van één of meer van de vier eigenschappen van informatie uit het Fivides Analyse model. Een voorbeeld daarvan is het begrip gebruiksvriendelijkheid (usability). Is bijvoorbeeld de informatie op een website niet duidelijk, dan zal dit ten koste gaan van de gebruiksvriendelijkheid. De vier genoemde eigenschappen van informatie bepalen uiteindelijk de gebruiksvriendelijkheid van een website. Het grote verschil tussen een usability test en de Fivides Actiepad Analyse is dat de usability test onderzoekt wat de gebruiker ervaart, terwijl de Fivides Actiepad Analyse direct een groot deel van de zwakheden in de informatie op een website blootlegt. De Fivides Actiepad Analyse vervangt overigens niet de usability test. Er is in de Fivides Actiepad Analyse bijvoorbeeld nauwelijks aandacht voor de vormgeving en de plaats van interactiemogelijkheden op de webpagina.
              </p> 
            </ContentBlockWrapper>
            <ContentBlockWrapper>
              <h2 className="content__header">Vier eigenschappen van vertrouwenwekkende informatie</h2>
              <p className='content__text line-height'>De vier stimuli in het Fivides Analysemodel zijn vier belangrijke eigenschappen van informatie. Door de aanwezigheid van één of meer van die eigenschappen ontstaat namelijk vertrouwen in de desbetreffende informatie. De vier eigenschappen worden hierna toegelicht.
              </p>
              <p className='content__text line-height'><strong>1) Relevantie. </strong>Informatie is relevant als die informatie aansluit op de informatiebehoefte, of anders gezegd: de vragen, van de bezoeker van een website. Het begrip relevantie duidt ook op de mate waarin detailinformatie wordt verstrekt. De aandacht op een website zal eerst getrokken worden met globalere informatie waarna op een actiepad gaandeweg meer detailinformatie verstrekt kan worden. Relevante informatie betreft ook de antwoorden op vragen als: waarom kan ik deze website vertrouwen? Of: wie zit achter deze website? De antwoorden kunnen in een tekst staan, maar afbeeldingen van deelname aan bijvoorbeeld Trustmonitor, of een quote van een tevreden klant kunnen ook als antwoord dienen.</p>
              <p className='content__text line-height'><strong>2) Consistentie. </strong>Door consistent gebruik van zowel vorm, kleuren als begrippen krijgt een bezoeker van een website overzicht over de informatie op die website. Bij reeds uitgevoerde analyses blijkt dat hier snel winst te behalen is. Zo bevatte een geanalyseerde website twee verschillende woorden om naar een bestelformulier te gaan. Het woord aanmelden stond op een actieknop die naar het bestelformulier leidde. In de navigatiebalk werd het woord deelnemen gebruikt om naar het bestelformulier te gaan. Dat is niet consistent. Daar komt nog bij dat vanwege de duidelijkheid het vervolgens beter is om gewoon het woord bestellen en bestelformulier te gebruiken.</p>
              <p className='content__text line-height'><strong>3) Duidelijkheid. </strong>Een website moet direct duidelijk zijn over welke informatie waar staat en wat met die informatie bedoeld wordt. Gebruiksvriendelijkheid is voor een groot deel het gevolg van duidelijke informatie op een website. Navigatiestructuur en navigatieknoppen moeten duidelijk zijn en ook teksten moeten duidelijk zijn. Dat betekent dat zo precies mogelijk antwoord wordt gegeven op de vragen van de bezoeker van een website. Onduidelijkheid schaadt niet alleen het vertrouwen, het schrikt de website bezoeker zodanig af dat die snel op zoek zal gaan naar een andere website.</p>
              <p className='content__text line-height'><strong>4) Argumentatie. </strong>De laatste van de vier eigenschappen is de zorgvuldigheid waarmee beweringen op een website onderbouwd worden. Wat bewijst dat de beweringen waar zijn? Het bewijs kan een logisch verband zijn (geen vertrouwen, dan geen aankoop) maar ook bronnen zoals bijvoorbeeld wetenschappelijk onderzoek of geloofwaardige instanties zoals bijvoorbeeld Trustmonitor, de Rijksoverheid, TNO en dergelijke.</p>
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Maak die website analyse zodat ik snel aan de slag kan!</h2>
              <p className="content__text line-height">Wil je snel weten of jouw website vertrouwen wekt en voldoende aanzet tot actie? Bestel dan de Fivides Actiepad Analyse. Binnen vijf werkdagen ontvang je een rapport met duidelijke adviezen om je website weer te laten scoren. Daarmee kun je gericht aan de slag om de copy op je website te verbeteren.</p>
              <p className='content__text line-height'>Ter introductie is de Fivides Actiepad Analyse nu te bestellen met 25% korting. Je betaalt slechts €712,50 (excl. 21% BTW) in plaats van €950 (excl. 21% BTW).</p>
              <p className='content__text line-height'>Mail Luc Brouwer om de Fivides Actiepad Analyse met 25% korting te bestellen. Vermeld in de mail voor welke website je een Fivides Actiepad Analyse wilt laten uitvoeren. Voeg liefst ook een telefoonnummer toe. Wij nemen daarna contact op om de bestelling rond te maken. Voor vragen over, of het bestellen van de Fivides Actiepad Analyse: mail naar <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Laat die website copy maar snel komen!</h2>
              <p className='content__text line-height'>Wil je snel websiteteksten laten schrijven door een professional? Wil je copy die vertrouwen wekt en tot actie aanzet? Dan staat Luc Brouwer van Fivides voor je klaar. Gespecialiseerd als tekstschrijver voor websites levert hij snel copy die scoort. Neem direct contact op om je website teksten te laten schrijven door Fivides. Mail naar: <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
              <Link href='/websitecopy'><button className="content__button">Lees meer</button></Link>  
            </ContentBlockWrapper>
          </div>     
        </div>
      </div>
    </>
   );
}
 
export default Analysemodel;