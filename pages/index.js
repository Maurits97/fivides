import Header from '../components/HeaderBlock'
import ContentBlockWrapper from '../components/ContentBlockWrapper'
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Fivides Actiepad"/>
      </Head>
      <div className="main">
        <Header tag="main" header="Knappe copy" text="Knappe copy versterkt het effect van een goed ontworpen website. Dat komt omdat knappe website copy vertrouwen creëert en aanzet tot actie. Daarmee overtuigt je website 24 uur per dag, 7 dagen per week. " />

        <div className="content content__mainpage">
          <div className="bg">
            <div className="bg__line"></div>
            <div className="bg__line"></div>
            <div className="bg__line"></div>
          </div>
          <div className="content__wrapper content__wrapper__mainpage">
            <ContentBlockWrapper>
              <h2 className="content__header">Fivides staat voor website copy die scoort</h2>
              <p className="content__text line-height">Website copy moet doelgericht geschreven worden om te kunnen scoren. Naast de SEO doelen zijn de twee belangrijkste doelen: creëren van vertrouwen en het motiveren tot actie. Fivides kan je helpen aan website copy waarmee je deze doelen realiseert. Het is ook mogelijk om de copy van je huidige website te laten analyseren door Fivides. Met de resultaten van die analyse kun je dan zelf aan de slag om de copy op je website te verbeteren. Op deze website vind je veel informatie die je kan helpen.</p>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='review'>
              <p className="content__review__name">R. Dulmers, eigenaar Scholen met Succes</p>
              <p className="content__review line-height">"Zeer informatieve rapportage van Fivides met heldere, consequent doorgevoerde analyse en veel zaken om op strategisch/tactisch niveau over na te denken met het team. Op operationeel vlak veel concrete punten die op korte termijn kunnen worden aangepakt om effectiviteit, aantrekkelijkheid en actiegerichtheid van de website te versterken."</p>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Copy die vertrouwen creëert</h2>
              <p className="content__text line-height">Het design en het beeld van een website geeft de klant een eerste indruk. Die eerste indruk schept verwachtingen die de copy moet waarmaken. Die copy zal allereerst vertrouwen moeten creëren bij de klant. De copy moet dan aan vier eisen voldoen:</p>
              <ol className='content__text ordered-list'>
                <li>de copy is relevant</li>
                <li>de copy is duidelijk</li>
                <li>de copy is consistent</li>
                <li>de copy is bevat argumenten</li>
              </ol>
              <p className='content__text line-height'>Het is volstrekt logisch dat vertrouwen in je website belangrijk is. Waarom zou je immers op een website iets bestellen of aanvragen als je het niet vertrouwd? Als de copy op de website geen vertrouwen realiseert, schaadt het je reputatie. Dat gebeurt dan 24 uur per dag, zeven dagen per week. Het blog <a className='link--default' href='https://blog.fivides.nl/vertrouwen-belangrijkste-succesfactor-website'>‘Vertrouwen als belangrijkste succesfactor voor een commerciële website’</a> gaat dieper in op de aspecten die vertrouwen kunnen creëren.</p>
              <Link href='/analysemodel'><button className="content__button">Lees meer</button></Link>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Copy die tot actie aanzet</h2>
              <p className='content__text line-height'>Website copy zet aan tot actie als die aansluit op de informatiebehoefte en de emotie van de klant. Dat vergt ten eerste een rationele benadering om de klant stap voor stap naar een actie te leiden. In het blog <a className='link--default' href="https://blog.fivides.nl/vertrouwen-belangrijkste-succesfactor-website">‘Met een actiepad je conversie effectief verhogen’</a>, lees je daar meer over. Ten tweede komt bij het schrijven de nodige creativiteit kijken om de klant ook emotioneel te raken. Dat is nodig om te inspireren, te overtuigen en te motiveren. Daar komt een speciaal schrijversvakmanschap bij kijken. Luc Brouwer van Fivides beschikt over dat vakmanschap. Waar blijkt dat uit? Nou kijk eens naar deze website van Fivides. Daar zijn diverse technieken van schrijversvakmanschap toegepast. </p>
              <Link href='/actiepad'><button className="content__button">Lees meer</button></Link>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Laat die website copy maar snel komen!</h2>
              <p className='content__text line-height'>Wil je snel websiteteksten laten schrijven door een professional? Wil je copy die vertrouwen wekt en tot actie aanzet? Dan staat Luc Brouwer van Fivides voor je klaar. Gespecialiseerd als tekstschrijver voor websites levert hij snel copy die scoort. Neem direct contact op om je website teksten te laten schrijven door Fivides. Mail naar <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl.</a></p>
              <Link href='/websitecopy'><button className="content__button">Lees meer</button></Link>
            </ContentBlockWrapper>

            <ContentBlockWrapper type='block'>
              <h2 className="content__header">Maak die website analyse zodat ik snel aan de slag kan!</h2>
              <p className='content__text line-height'>Wil je snel weten of jouw website vertrouwen wekt en voldoende aanzet tot actie? Bestel dan de Fivides Actiepad Analyse. Binnen vijf werkdagen ontvang je een rapport met duidelijke adviezen om je website weer te laten scoren. Daarmee kun je gericht aan de slag om de copy op je website te verbeteren. </p>
              <Link href='/websiteanalyse'><button className="content__button">Lees meer</button></Link>
            </ContentBlockWrapper>
          </div>    
        </div>
      </div>
    </>
  )
}
