
export const GifItem = ({ title, url, id}) => {
  return (
    <article>
      <img src={url} alt={title} />
      <p>{ title }</p>
    </article>
  )
}
