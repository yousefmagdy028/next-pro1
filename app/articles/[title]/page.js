export default function ShowArticlesPage(props){
  console.log(props)
  return(
    <div>
      <h1>Show Articles</h1>
      <h1>{props.params.title}</h1>
    </div>
  )
}