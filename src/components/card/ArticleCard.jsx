export default function ArticleCard({ article, handleRedirect = () => null }) {
  return (
    <div
      onClick={() => handleRedirect(article)}
      className="card bg-base-100 shadow-xl image-full cursor-pointer"
    >
      <figure>
        <img src={article?.urlToImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.source?.name}</h2>
        <p className="line-clamp-2">{article?.title}</p>
      </div>
    </div>
  );
}
