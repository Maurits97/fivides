const ContentBlockWrapper = (props) => {
  return (
    <div className={`content__container ${ props.type ?? ''}`}>
      { props.children }
    </div>
  )
}

export default ContentBlockWrapper;