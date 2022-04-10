import ContentBlockWrapper from '../components/ContentBlockWrapper'
import Header from '../components/HeaderBlock'
import Head from 'next/head'

const OverOns = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="sub" page="Over ons" header="Koppie Copy" />

        <div className="content">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>

          <div className="content__wrapper">
            <ContentBlockWrapper>
              <p className='content__text line-height'>
              Hi. Mijn naam is Luc Brouwer, bedenker en oprichter van Fivides. Ik heb een passie voor het schrijven van copy voor websites. In 2021 kwam ik er per toeval achter dat ik de ideale combinatie van kennis en ervaring heb om perfecte website copy te maken. Dat is een combinatie van strategische marketingkennis en schrijversvakmanschap. Ik werkte in het verleden in een marketingfunctie bij Douwe Egberts en gaf ook les in marketing en strategie voor een MBA en in het HBO. Daarnaast ben ik altijd actief geweest met schrijven. Ik zat in diverse redacties en schreef twee boeken. Mijn eerste boek, Marktcreatie, werd in België in 2003 nog genomineerd als management boek van het jaar. Later schreef ik het boek: Gast in het hoofd van de lezer. Dat is een boek waarin ik voor professionals uitleg hoe je duidelijker kunt schrijven. Dat heb ik met workshops ook in de praktijk gebracht voor professionals van, onder andere, Achmea, Damen Shipyards en Vopak.
              </p>
            </ContentBlockWrapper>

            <div className="image-container image-container--profile">
              <img className="image image--profile" src="/img/profielfoto_Luc_Brouwer.jpg" alt="Profiel foto Luc Brouwer"/>
            </div>

            <ContentBlockWrapper>
              <p className='content__text line-height'>De laatste jaren heb ik bijna honderd studenten aan een goedgekeurde scriptie geholpen. Het viel mij op dat ruwweg een derde van die scripties gericht was op het onderzoeken van slecht functionerende websites. Toen een vriend mij in 2021 vroeg om eens naar zijn website te kijken kwam opeens alles samen. Want voor een website gebruik je dezelfde logica die nodig is om van een berg informatie een goede tekst te maken. En om die website te laten scoren moet de copy duidelijk zijn afgestemd op de strategische marketingdoelen. Voeg daar wat schrijversvakmanschap aan toe om een tekst emotioneel te laden en je krijgt teksten die scoren. Toegankelijk teksten die overtuigen en motiveren om tot een actie te komen. Kortom copy die scoort. Dat is waar ik voor sta.
              </p>

              <p className='content__text line-height'>Voor geïnteresseerden wil ik graag mijn kennis delen. Neem gerust contact op.</p>

              <p className='content__text line-height'>Mail: <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
            </ContentBlockWrapper>

          </div>     
        </div>
      </div>
    </>
   );
}
 
export default OverOns;