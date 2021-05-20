const Head = (props) => {
  return ( 
    <div className="head">
      <h1 className="header">{props.header}</h1>
      <p className="subtext line-height">{props.text}</p>
      <div className={`head__circle ${props.tag === 'sub' ? 'sub__circle' : ''}`}></div>
    </div>
   );
}
 
export default Head;