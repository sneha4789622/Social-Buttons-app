const Button = props => {
  //  Write your code here.
  const {classname, buttonText} = props
  return <Button classname={'button ${classname}'}>{buttonText}</Button>
}

const element = (
  //  Write your code here.
  <div classname='bg-container'>
    <div classname='content-container'>
      <h1 classname='heading'>Social Buttons</h1>

      <div classname='button'>
        <Button buttonText='Like' classname='like-button' />
        <Button buttonText='Comment' classname='comment-button' />
        <Button buttonText='Share' classname='share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
