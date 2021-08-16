import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'
import Head from '../components/Head'

const Analysemodel = () => {
  return ( 
    <div className="main">
      <Head tag="sub" page="Analysemodel" header="Vertrouwen is cruciaal" text="Het analysemodel van de Fivides Actiepad Analyse bevat vier eigenschappen van informatie die gezamenlijk het vertrouwen in die informatie opwekken. Dat vertrouwen is cruciaal omdat een websitebezoeker geen actie zal uitvoeren als het vertrouwen in de website ontbreekt."/>

      <div className="content">
        <div className="bg">
          <div className="bg__line"></div>
          <div className="bg__line"></div>
          <div className="bg__line"></div>
        </div>

        <div className="content__wrapper">
          <div className="image-container">
            <img className="image" src="/img/Fivides_Luc_Brouwer_Model.png" alt="Het anaylse model"/>
            <p className="image-text">Fig. 1 Fivides Actiepad Analysemodel</p>
          </div>

          <ContentBlock tag="default" header="Het Fivides Analysemodel" text="Het Fivides analysemodel (zie figuur 1) geeft de vier eigenschappen van informatie die als stimulus bij een persoon vertrouwen kunnen opwekken, wat vervolgens tot een gewenste actie kan leiden. Deze vier eigenschappen van informatie moeten voor een website bewust in de informatie aangebracht worden. Dat gebeurt in tekst, in beeld, in het algemene design en in het interactie design. De Fivides Actiepad Analyse maakt zichtbaar waar op de website een of meer van die eigenschappen in de informatie ontbreken. "/>

          <ContentBlock tag="default" header="Wetenschappelijke basis van het Fivides Analysemodel" text="Het Fivides Analysemodel is gebaseerd op het Stimulus-Organism-Response model van Mahrabian en Russel (1974), en bevat vier stimuli die te maken hebben met eigenschappen van informatie (figuur 1). Die eigenschappen van informatie zorgen ervoor dat de ontvanger van die informatie vertrouwen krijgt in die informatie en daarmee in de website zelf. Het voordeel van de focus op de vier eigenschappen van informatie die vertrouwen opwekken, is dat uit de analyse heel concreet naar voren komt, wat aan de informatie verbeterd moet worden." textTwo="In wetenschappelijke artikelen over websites en gedragsintenties komen de kwaliteit en de relevantie van de informatie naar voren als belangrijke stimuli om vertrouwen bij websitebezoekers op te wekken. Daarnaast wordt een veelheid aan andere stimuli genoemd. Dit zijn echter veelal afgeleiden van één of meer van de vier eigenschappen van informatie uit het Fivides Ananalyse model. Een voorbeeld daarvan is het begrip gebruiksvriendelijkheid (usability). Is bijvoorbeeld de informatie op een website niet duidelijk, dan zal dit ten koste gaan van de gebruiksvriendelijkheid. De vier genoemde eigenschappen van informatie bepalen uiteindelijk de gebruiksvriendelijkheid van een website. Het grote verschil tussen een usability test en de Fivides Actiepad Analyse is dat de usability test onderzoekt wat de gebruiker ervaart, terwijl de Fivides Actiepad Analyse direct een groot deel van de zwakheden in de informatie op een website blootlegt. De Fivides Actiepad Analyse vervangt overigens niet de usability. Er is in de Fivides Actiepad Analyse bijvoorbeeld nauwelijks aandacht voor de vormgeving en de plaats van interactiemogelijkheden op de webpagina."/>

          <ContentBlock tag="default" header="Vier eigenschappen van vertrouwenwekkende informatie" text="De vier stimuli in het Fivides Analysemodel zijn vier belangrijke eigenschappen van informatie. Door de aanwezigheid van één of meer van die eigenschappen ontstaat namelijk vertrouwen in de desbetreffende informatie. De vier eigenschappen worden hierna toegelicht." textTwo={[<strong>1) Relevantie.</strong>, " Informatie is relevant als die informatie aansluit op de informatiebehoefte, of anders gezegd: de vragen, van de bezoeker van een website. Het begrip relevantie duidt ook op de mate waarin detailinformatie wordt verstrekt. De aandacht op een website zal eerst getrokken worden met globalere informatie waarna op een actiepad gaandeweg meer detailinformatie verstrekt kan worden. Relevante informatie betreft ook de antwoorden op vragen als: waarom kan ik deze website vertrouwen? Of: wie zit achter deze website? De antwoorden kunnen in een tekst staan, maar afbeeldingen van deelname aan bijvoorbeeld Trustmonitor, of een quote van een tevreden klant kunnen ook als antwoord dienen."]} textThree={[<strong>2) Consistentie.</strong>, " Door consistent gebruik van zowel vorm, kleuren als begrippen krijgt een bezoeker van een website overzicht over de informatie op die website. Bij reeds uitgevoerde analyses blijkt dat hier snel winst te behalen is. Zo bevatte een geanalyseerde website twee verschillende woorden om naar een bestelformulier te gaan. Het woord ", <i>aanmelden</i>, " stond op een actieknop die naar het bestelformulier leidde. In de navigatiebalk werd het woord ", <i>deelnemen</i>, " gebruikt om naar het bestelformulier te gaan. Dat is niet consistent. Daar komt nog bij dat vanwege de duidelijkheid het vervolgens beter is om gewoon het woord ", <i>bestellen</i>, " en ", <i>bestelformulier</i>, " te gebruiken."]} textFour={[<strong>3) Duidelijkheid.</strong>, " Een website moet direct duidelijk zijn over welke informatie waar staat en wat met die informatie bedoeld wordt. Gebruiksvriendelijkheid is voor een groot deel het gevolg van duidelijke informatie op een website. Navigatiestructuur en navigatieknoppen moeten duidelijk zijn en ook teksten moeten duidelijk zijn. Dat betekent dat zo precies mogelijk antwoord wordt gegeven op de vragen van de bezoeker van een website. Onduidelijkheid schaadt niet alleen het vertrouwen, het schrikt de website bezoeker zodanig af dat die snel op zoek zal gaan naar een andere website."]} textFive={[<strong>4) Argumentatie.</strong>, " De laatste van de vier eigenschappen is de zorgvuldigheid waarmee beweringen op een website onderbouwd worden. Wat bewijst dat de beweringen waar zijn? Het bewijs kan een logisch verband zijn (geen vertrouwen, dan geen aankoop) maar ook bronnen zoals bijvoorbeeld wetenschappelijk onderzoek of geloofwaardige instanties zoals bijvoorbeeld Trustmonitor, de Rijksoverheid, TNO en dergelijke."]} />

        </div>     
      </div>

      <Contact />
    </div>
   );
}
 
export default Analysemodel;