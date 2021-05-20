const Contact = () => {
  return ( 
    <div className="contact">
      <h3 className="contact__header">Nu met <span className="green">50%</span> introductiekorting </h3>
      <p className="contact__text line-height">Ter introductie is de Fivides Actiepad Analyse, met een rapportage in power point, nu te bestellen met 50% korting. Je betaalt slechts €475 (excl. 21% BTW) in plaats van €950 (excl. 21% BTW). Binnen vijf werkdagen na aanvraag en betaling wordt de rapportage inclusief de power point toegestuurd.</p>
      <h4 className="contact__subheader">Interesse?</h4>
      <p className="contact__subtext line-height">Mail nu Luc Brouwer van Fivides om een Actiepad Analyse met 50% korting te bestellen.</p>
      <a href="mailto:l.brouwer@fivides.nl" className="contact__email" target="_blank">l.brouwer@fivides.nl</a>
    </div>  
   );
}
 
export default Contact;