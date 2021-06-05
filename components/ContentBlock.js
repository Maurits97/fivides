import Link from 'next/link'

const ContentBlock = (props) => {
  if (props.tag === 'default'){
    return (
      <div className="content__container">
        <h2 className="content__header">{props.header}</h2>
        <p className="content__text line-height">{props.text}</p>
        <p className="content__text line-height">{props.textTwo}</p>
        <p className="content__text line-height">{props.textThree}</p>
        <p className="content__text line-height">{props.textFour}</p>
        <p className="content__text line-height">{props.textFive}</p>
      </div>
    )
  } else if (props.tag === 'block') {
  return ( 
    <div className="content__container block">
      <h2 className="content__header">{props.header}</h2>
      <p className="content__text line-height">{props.text}</p>
      <Link href={props.link}><button className="content__button">Lees meer</button></Link>
    </div>
    )
  } else if (props.tag === 'review') {
    return (
      <div className="content__container review">
        <p className="content__review__name">{props.name}</p>
        <p className="content__review line-height">{props.text}</p>
    </div>
    )
  } 
}
 
export default ContentBlock;