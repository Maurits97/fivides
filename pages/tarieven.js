import ContentBlockWrapper from '../components/ContentBlockWrapper'
import Link from 'next/link'
import Header from '../components/HeaderBlock'
import Head from 'next/head'

const Tarieven = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="sub" page="Tarieven" header="En wat mag dat dan wel niet kosten?" />

        <div className="content">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>

          <div className="content__wrapper">
            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Tarief website copy</h2>
              <p className='content__text line-height'>Fivides hanteert een uurtarief en dus geen tarief per woord. De kunst van goede copy is namelijk dat die kort en krachtig is, vertrouwen wekt en tot actie aanzet. Dat vereist denkwerk en creativiteit. Het is dus wel iets meer dan wat woorden opschrijven…</p>
              <p className='content__text line-height'>Website copy wordt geleverd voor €95 per uur (excl. 21% BTW). We spreken altijd van tevoren af wat geleverd wordt, en hoeveel uur daarvoor nodig is. Dat wordt in een offerte vastgelegd. Je weet dan precies wat het kost. </p>
              <p className='content__text line-height'>Een ruwe indicatie van de kosten voor copy voor een website is ergens tussen de €1.500 en €2.500 euro (excl. BTW). De kosten nemen toe naarmate een website groter is en er meer tijd gaat naar het verzamelen van informatie door navraag bij medewerkers, interviews en bijvoorbeeld het verzamelen van bronnen.</p>
              <p className='content__text line-height'>Neem nu contact op met Luc Brouwer van Fivides om een offerte aan te vragen voor copy die scoort. Mail naar <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
              <Link href='/websitecopy'><button className="content__button">Meer over website copy</button></Link>          
            </ContentBlockWrapper>
            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Tarief Fivides Actiepad Analyse.</h2>
              <p className='content__text line-height'>Ter introductie is de Fivides Actiepad Analyse nu te bestellen met 25% korting. Je betaalt slechts €712,50 (excl. 21% BTW) in plaats van €950 (excl. 21% BTW).
              </p>
              <p className='content__text line-height'>Mail Luc Brouwer om de Fivides Actiepad Analyse met 25% korting te bestellen. Vermeld in de mail voor welke website je een Fivides Actiepad Analyse wilt laten uitvoeren. Voeg liefst ook een telefoonnummer toe. Wij nemen daarna contact op om de bestelling rond te maken. Voor vragen over, of het bestellen van de Fivides Actiepad Analyse: mail naar <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
              <Link href='/websiteanalyse'><button className="content__button">Meer over website analyse</button></Link>
            </ContentBlockWrapper>
          </div>     
        </div>
      </div>
    </>
   );
}
 
export default Tarieven;