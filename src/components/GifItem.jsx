
export const GifItem = ({ title, url, id}) => {
  return (
    <article className="card">
      <img src={url} alt={title} />
      <p>{ title }</p>
    </article>
  )
}
