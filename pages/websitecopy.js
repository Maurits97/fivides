import ContentBlockWrapper from '../components/ContentBlockWrapper'
import Link from 'next/link'
import Header from '../components/HeaderBlock'
import Head from 'next/head'

const Actiepad = () => {
  return ( 
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="sub" page="Website copy" header="Staat de copy al klaar?" text="De wireframes zijn goedgekeurd. De websitebouwer wil aan de slag. Maar waar is de copy?"/>

        <div className="content">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>

          <div className="content__wrapper">
            <ContentBlockWrapper>
              <h2 className="content__header">Snelle levering van copy die scoort</h2>
              <p className="content__text line-height">Ontvang snel copy waarmee een website:</p>
              <ul className='content__text unordered-list'>
                <li>veel bezoekers trekt (SEO)</li>
                <li>het merk versterkt</li>
                <li>vertrouwen wekt</li>
                <li>totaal overtuigt en</li>
                <li>tot actie aanzet.</li>
              </ul>
            </ContentBlockWrapper>


            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Fivides levert copy die scoort</h2>
              <p className='content__text line-height'>Fivides kan snel de gewenste copy leveren door:</p>
              <ul className='content__text unordered-list'>
                <li>jarenlange ervaring in het structureren van grote hoeveelheden informatie</li>
                <li>veelzijdige kennis van allerlei verschillende organisaties, branches en bedrijfstakken</li>
                <li>jarenlange marketingkennis opgedaan in praktijk en theorie</li>
                <li>kennis van SEO</li>
                <li>uitgebreide ervaring in het schrijven van teksten voor verschillende doeleinden</li>
                <li>inzicht in het schrijven van teksten die verleiden, overtuigen en tot actie aanzetten.</li>
              </ul>
              
              <Link href='/'><button className="content__button">Lees meer</button></Link>
            </ContentBlockWrapper>

            <ContentBlockWrapper>
              <h2 className="content__header">Laat die copy maar snel komen!</h2>
              <p className='content__text line-height'>Wil je snel websiteteksten laten schrijven door een professional? Wil je copy die vertrouwen wekt en tot actie aanzet? Dan staat Luc Brouwer van Fivides voor je klaar. Gespecialiseerd als tekstschrijver voor websites levert hij snel copy die scoort. Neem direct contact op om je website teksten te laten schrijven door Fivides. Mail naar: <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
            </ContentBlockWrapper>
          </div>     
        </div>
      </div>
    </>
   );
}
 
export default Actiepad;