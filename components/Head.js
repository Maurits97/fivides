const Head = (props) => {
  const subPageCheck = () => {
    if (props.tag == "sub") {
      return <span className="header__span">{props.page}</span>
    }
  }
  return ( 
    <div className="head">
      {subPageCheck()}
      <h1 className={`header ${props.tag === 'sub' ? 'header__subpage' : ''}`}>{props.header}</h1>
      <p className={`subtext line-height ${props.tag === 'sub' ? 'subtext__subpage' : ''}`}>{props.text}</p>
      <div className={`head__circle ${props.tag === 'sub' ? 'sub__circle' : ''}`}></div>
    </div>
   );
}
// subtext__mainpage
export default Head;