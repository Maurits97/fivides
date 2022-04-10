import ContentBlockWrapper from '../components/ContentBlockWrapper'
import Header from '../components/HeaderBlock'
import Link from 'next/link';
import Head from 'next/head'

const WebsiteAnalyse = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="sub" page="Website analyse" header="Direct aan de slag om je website te verbeteren!" text="Met de resultaten van de Fivides Actiepad Analyse kun je direct aan de slag om je website zelf te verbeteren. Je krijgt gedetailleerde adviezen die ertoe leiden dat je website weer vertrouwen wekt en beter tot actie aanzet. "/>

        <div className="content">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>

          <div className="content__wrapper">
            <ContentBlockWrapper>
              <h2 className="content__header">Heldere adviezen voor verhogen effectiviteit website</h2>
              <p className="content__text line-height">De Fivides Actiepad Analyse levert een rapport op met heldere adviezen. Per web pagina wordt duidelijk gemaakt waar verbetering gewenst is en wat je dan het best kunt doen. Het betreft adviezen over:</p>

              <ol className='content__text ordered-list'>
                <li>het aanscherpen van de waardepropositie</li>
                <li>de relevantie van informatie</li>
                <li>de consistentie van gebruikte begrippen </li>
                <li>de duidelijkheid van de teksten</li>
                <li>de deugdelijkheid van de argumentatie</li>
                <li>de wijze waarop de tekst tot actie aanzet</li>
                <li>de klantvriendelijkheid van een aanvraag- of bestelformulier. </li>
              </ol>
              <p className="content__text line-height">In de rapportage staan per webpagina screenshots met een toelichting en advies. </p>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Degelijke analyse op basis van het Fivides Website Analyse Model</h2>
              <p className="content__text line-height">De Fivides Actiepad analyse gebruikt het Fivides Website Analyse model. Dit is een door Luc Brouwer ontwikkeld model. Het model is gebaseerd op wetenschappelijk onderzoek over website kwaliteit en kennis over de manier hoe informatie het best via tekst overgedragen kan worden. </p>

              <Link href='/analysemodel'><button className="content__button">Lees meer</button></Link>           
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Ga nu aan de slag en bestel een Fivides Actiepad Analyse met <span className="green">25%</span> introductiekorting</h2>
              <p className='content__text line-height'>Ter introductie is de Fivides Actiepad Analyse nu te bestellen met 25% korting. Je betaalt slechts €712,50 (excl. 21% BTW) in plaats van €950 (excl. 21% BTW).</p>
              <p className='content__text line-height'>Mail Luc Brouwer om de Fivides Actiepad Analyse met 25% korting te bestellen. Vermeld in de mail voor welke website je een Fivides Actiepad Analyse wilt laten uitvoeren. Voeg liefst ook een telefoonnummer toe. Wij nemen daarna contact op om de bestelling rond te maken. Voor vragen over, of het bestellen van de Fivides Actiepad Analyse: mail naar <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Tips en trics voor verbeteren van jouw website</h2>
              <p className="content__text line-height">Fivides geeft je ook veel tips en trics over het verbeteren van je website. Zie de blogs (linken naar blog) van Luc Brouwer. Kijk ook eens op Frank Watching naar het artikel van Luc Brouwer van Fivides: <a className='link--default' href='https://www.frankwatching.com/archive/2021/11/10/rendement-website-klein-bedrijf/'>Zo haal je als klein bedrijf meer rendement uit je website [5 stappen]</a>.</p>         
            </ContentBlockWrapper>
          </div>     
        </div>
      </div>
    </>
   );
}
 
export default WebsiteAnalyse;