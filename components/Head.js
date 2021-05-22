const Head = (props) => {
  return ( 
    <div className="head">
      <h1 className={`header ${props.tag === 'sub' ? 'header__subpage' : ''}`}>{props.header}</h1>
      <p className={`subtext line-height ${props.tag === 'sub' ? 'subtext__subpage' : ''}`}>{props.text}</p>
      <div className={`head__circle ${props.tag === 'sub' ? 'sub__circle' : ''}`}></div>
    </div>
   );
}
// subtext__mainpage
export default Head;