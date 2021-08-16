import Contact from '../components/contact'
import ContentBlock from '../components/ContentBlock'
import Head from '../components/Head'

const OverOns = () => {
  return ( 
    <div className="main">
      <Head tag="sub" page="Over ons" header="Een passie voor het structureren van informatie" text="Een passie voor het structureren van informatie" text="Hi. Mijn naam is Luc Brouwer, bedenker en oprichter van Fivides. Ik heb een passie voor het structureren van informatie. Ik bedoel daarmee de techniek om grote hoeveelheden, complexe informatie op een zodanige manier op te schrijven dat een lezer er zijn weg in vindt. Door mijn jarenlange ervaring in het bedrijfsleven en het werken met studenten heb ik die techniek kunnen verfijnen. Begin 2021 kwam ik er per toeval achter, dat die techniek uitstekend te gebruiken is voor het analyseren van de informatie op een website. Door een combinatie van marketingkennis en de techniek voor het structureren van informatie bleek ik haarfijn de zwakke plekken in de informatie op een website te kunnen blootleggen. Daaruit is de Fivides Actiepad Analyse voortgekomen."/>

      <div className="content">
        <div className="bg">
          <div className="bg__line"></div>
          <div className="bg__line"></div>
          <div className="bg__line"></div>
        </div>

        <div className="content__wrapper">
          <ContentBlock tag="default" header="Jarenlange ervaring met structureren van informatie" text="Bij mij begon de interesse voor het structureren van informatie tijdens mijn studie aan de Erasmus Universiteit in Rotterdam. Ik zat als student in diverse redacties en schreef daarvoor veel teksten. Dat legde waarschijnlijk de basis. Voor mijn werk schreef ik later veel complexe rapporten zoals marketingplannen (Douwe Egberts) kredietvoorstellen (ABN AMRO) en uitgeefplannen (Noordhoff Uitgevers). Bij die bedrijven viel het mij al op dat veel collega’s moeite hadden met het schrijven van die rapporten, terwijl het mij redelijk makkelijk afging." textTwo="In de tijd dat ik les gaf voor met name de MBA studie van NCOI businessschool, zag ik dat zo goed als alle studenten moeite hadden met het schrijven van eindopdrachten en scripties. Toen wist ik dat hier een groter probleem speelt. Ik verdiepte mij in de technieken van het structureren van informatie en schreef het boek: Gast in het hoofd van de lezer, hoe professionals effectiever kunnen schrijven. Daarin wordt de techniek van vraaggestuurde informatieoverdracht uitgelegd. Ik heb bij diverse bedrijven hier workshops voor verzorgd (Achmea, Vopak, Damen Shipyards). Voor Snelslim ontwikkelde ik tenslotte een aanpak voor HBO studenten om snel een goede HBO-scriptie te schrijven. Maar uiteindelijk blijkt dat de techniek voor het structureren van informatie makkelijk lijkt, maar voor velen moeilijk is om uit te voeren. "/>

          <ContentBlock tag="default" header="Kennis van marketing" text="Voor Snelslim heb ik bijna honderd HBO studenten aan een goedgekeurde scriptie geholpen. Ruwweg een derde van die scripties ging over websites die niet effectief waren. Samen met die studenten bestudeerde ik daarvoor veel wetenschappelijke marketing artikelen en hebben we toegepast onderzoek uitgevoerd. Dat leverde mij belangrijke kennis op. Samen met mijn marketingkennis uit de praktijk (onder andere bij Douwe Egberts) en mijn kennis van het structureren van informatie had ik de sleutels in handen voor het ontwikkelen van de Fivides Actiepad Analyse. Alleen had ik dat toen nog niet door… "/>

          <ContentBlock tag="default" header="Per toeval op het juiste spoor" text="Toen ik een vriend vertelde dat er wel erg veel interessante kennis in wetenschappelijke artikelen te vinden is over de effectiviteit van websites, vroeg hij mij om eens naar zijn website te kijken. Wat zou hij daaraan kunnen verbeteren? Daarop heb ik nog eens allerlei wetenschappelijke artikelen doorgenomen. Dat leidde tot het inzicht dat vertrouwen in een website cruciaal is voor een websitebezoeker om tot een actie over te gaan. En dat vertrouwen moet door de informatie op die website worden opgewekt. Toen ik diverse variabelen die dat vertrouwen opwekken op een rijtje zag, besefte ik dat dit feitelijk dezelfde elementen zijn die ik in mijn boek “Gast in het hoofd van de lezer” beschreef. In combinatie met het besef dat de informatie op een website het doel heeft om de website bezoeker een gewenste actie te laten uitvoeren ontstond het concept van het actiepad. Dit leidde uiteindelijk tot de Fivides Actiepad Analyse. Want het inrichten van een actiepad op een website is feitelijk precies hetzelfde als het aanbrengen van structuur in grote hoeveelheden, complexe informatie. Ik heb die techniek overigens ook op deze website toegepast. Voor geïnteresseerden wil ik graag mijn kennis delen. Neem gerust contact op." textTwo={["Heb je vragen over de Fivides Actiepad Analyse of wil je een Fivides Actiepad Analyse bestellen? Mail naar: ", <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl</a>, "."]}/>
          
        </div>     
      </div>

      <Contact />
    </div>
   );
}
 
export default OverOns;