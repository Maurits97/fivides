import Head from '../components/Head'
import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'

export default function Home() {
  return (
    <div className="main">
      <Head tag="main" header="Fivides Actiepad Analyse" text="Een Fivides Actiepad Analyse laat zien hoe jouw websitebezoekers jouw klanten kunnen worden." />

      <div className="content content__mainpage">
        <div className="bg">
          <div className="bg__line"></div>
          <div className="bg__line"></div>
          <div className="bg__line"></div>
        </div>

        <div className="content__wrapper content__wrapper__mainpage">
          <ContentBlock tag="default" header="Van websitebezoeker naar klant" 
          text={["Websitebezoekers worden klanten als de informatie op een website de bezoeker naar de gewenste actie leidt en vertrouwen opwekt. Door betrouwbare informatie in de juiste volgorde aan te reiken wordt een pad naar de gewenste actie gelegd. Fivides noemt dat het actiepad. Een ", <i>Fivides Actiepad Analyse</i>, " maakt de zwakke plekken op de actiepaden van jouw website zichtbaar. Daarmee kun je snel aan de slag om de informatie op jouw actiepaden te verbeteren en meer klanten te krijgen."]} />

          <ContentBlock tag="review" name="R. Dulmers, eigenaar Scholen met Succes" text={`“Zeer informatieve rapportage van Fivides met heldere, consequent doorgevoerde analyse en veel zaken om op strategisch/tactisch niveau over na te denken met het team. Op operationeel vlak veel concrete punten die op korte termijn kunnen worden aangepakt om effectiviteit, aantrekkelijkheid en actiegerichtheid van de website te versterken.”`}/>

          <ContentBlock tag="block" header="Leid je websitebezoeker naar de actie" text={`Om een bezoeker op je website naar een actie te leiden moet de informatie aansluiten op de informatiebehoefte van die bezoeker. Dat doe je door stap voor stap informatie te verstrekken die aansluit op de vragen van de websitebezoeker. Elk stukje informatie dat een bezoeker tegenkomt zal namelijk weer nieuwe vragen oproepen. Door al die vragen te beantwoorden leid je de bezoeker naar de laatste vraag waarop de actie kan volgen. Zo een laatste vraag luidt dan: “Wat moet ik doen om nu een bestelling te plaatsen”.`} link="/actiepad"/>

          <ContentBlock tag="block" header="Vertrouwen is cruciaal" text={`Er is veel wetenschappelijk bewijs dat vertrouwen in een website cruciaal is om gewenst gedrag bij websitebezoekers te stimuleren. Dat vertrouwen wordt gewekt als de informatie op de website relevant, consistent, duidelijk en beargumenteerd is. Als de aangereikte informatie op een actiepad niet aan deze criteria voldoet, zal het vertrouwen in de website afnemen. En zonder vertrouwen zal geen gewenst gedrag volgen. Mogelijke klanten haken dan voortijdig af.`} link="/analysemodel"/>

          <ContentBlock tag="block" header="Fivides Actiepad Analyse wijst de weg" text={`De rapportage van een Fivides Actiepad Analyse maakt in tekst en beeld duidelijk wat de zwakke plekken in de informatie op een actiepad zijn. Ten eerste wordt zichtbaar gemaakt hoe relevant de informatie op een webpagina is. Ten tweede is te zien welke informatie tekortschiet op de eigenschappen consistentie, duidelijkheid en argumentatie. Zoals Johan Cruijff al zei: ‘je gaat het pas zien als je het doorhebt’. Het zal je verbazen dat je die zwakke plekken niet eerder zelf hebt gezien. In een schriftelijke rapportage staan de resultaten van de Fivides Actiepad Analyse uitvoerig beschreven. Daarbij worden aanbevelingen gedaan voor verbeteracties. Zo kun je direct aan de slag om de informatie op jouw website te verbeteren. `} link="/rapportage"/>

          <ContentBlock tag="default" header="Zie snel hoe jouw website meer klanten kan opleveren" text="De Fivides Actiepad Analyse is geschikt voor allerlei soorten websites. Twijfel jij over de kwaliteit van je website en wil je graag van meer bezoekers klanten maken? Dan helpt de Fivides Actiepad Analyse om snel te zien wat op je website verbeterd kan worden. De Fivides Actiepad Analyse richt zich op de homepage en op één actiepad. Zo een actiepad kan over meerdere webpagina’s lopen. Die worden dan allemaal geanalyseerd. Het streven is om binnen vijf werkdagen na aanvraag en betaling de rapportage van de Fivides Actiepad Analyse toe te sturen."/>
        </div>    
      </div>
 
      <Contact />
    </div>
  )
}
