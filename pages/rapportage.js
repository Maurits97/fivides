import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'
import Head from '../components/Head'

const Rapportage = () => {
  return ( 
    <div className="main">
      <Head tag="sub" page="Rapportage" header="Direct aan de slag om je website te verbeteren!" text="Met de rapportage van de Fivides Actiepad Analyse kun je direct aan de slag om je website te verbeteren. De rapportage bevat een overzicht van alle informatie op de website die tekort schiet. Vaak is dan al duidelijk wat verbeterd kan worden. Daarnaast worden adviezen gegeven om de informatie op bepaalde webpagina’s te verbeteren."/>

      <div className="content">
        <div className="bg">
          <div className="bg__line"></div>
          <div className="bg__line"></div>
          <div className="bg__line"></div>
        </div>

        <div className="content__wrapper">
          <ContentBlock tag="default" header="Helder overzicht van verbeterpunten" text="De rapportage van de Fivides Actiepad Analyse geeft per geanalyseerde webpagina een helder overzicht van alle informatie-elementen die tekort schieten op de eigenschappen: relevantie, consistentie, duidelijkheid en argumentatie. Dat gebeurt ten eerste voor de homepage. Daarna worden de webpagina’s van één actiepad naar keuze geanalyseerd. Het is het pad dat naar een door de websitebezoeker te ondernemen actie leidt zoals een bestelling of een aanvraag voor informatie. In de rapportage staan per webpagina, voor elke van de vier eigenschappen, screenshots met een toelichting op de tekortkomingen. Deze tekortkomingen worden aangevuld met adviezen."/>
          
          <ContentBlock tag="default" header="Duidelijke adviezen voor verbetering" text="De analyses van de vier eigenschappen van informatie op een webpagina worden aangevuld met adviezen voor verbetering. Die verbetering is enerzijds gericht op verbetering van de bestaande informatie op het de homepage en het gekozen actiepad. Die verbetering kan met tekst te maken hebben, maar ook met afbeeldingen. Daarnaast worden adviezen verstrekt om de informatie anders te structureren of om informatie toe te voegen of juist weg te laten. "/>
        </div>     
      </div>

      <Contact />
    </div>
   );
}
 
export default Rapportage;