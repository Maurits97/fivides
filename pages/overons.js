import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'
import Head from '../components/Head'

const OverOns = () => {
  return ( 
    <div className="main">
      <Head tag="sub" header="Over ons" text="Met een Actiepad Analyse van Fivides weet je hoe je van een jouw websitebezoekers klanten kunt maken."/>

      <div className="content">
        <div className="bg">
          <div className="bg__line"></div>
          <div className="bg__line"></div>
          <div className="bg__line"></div>
        </div>

        <div className="content__wrapper">
          <ContentBlock tag="default" header="Maak van je website bezoekers klanten" text="Website bezoekers worden klanten als de informatie op een website vertrouwen opwekt en tot actie aanzet. Door betrouwbare informatie in de juiste volgorde aan te reiken wordt een pad naar de gewenste actie gelegd. Fivides noemt dat het actiepad. Een Actiepad Analyse van Fivides maakt zichtbaar waar de zwakke plekken in de informatie op de actiepaden van jouw website zitten. Daarmee kun je snel aan de slag om de informatie op jouw actiepaden te verbeteren en meer klanten te krijgen."/>
          <ContentBlock tag="block" header="Vertrouwen is cruciaal" text="Er is veel wetenschappelijk bewijs dat vertrouwen in een website cruciaal is om gewenst gedrag bij website bezoekers te stimuleren. Daarvoor moet die informatie relevant, consistent, duidelijk en beargumenteerd zijn." link="/"/>
        </div>     
      </div>

   
    </div>
   );
}
 
export default OverOns;