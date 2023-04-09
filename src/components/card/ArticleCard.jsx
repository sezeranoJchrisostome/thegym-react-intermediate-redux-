export default function ArticleCard({ article, handleRedirect = () => null }) {
  return (
    <div
      onClick={() => handleRedirect(article)}
      className="card bg-base-100 shadow-xl image-full cursor-pointer relative overflow-hidden min-h-[200px] max-h-[200px]"
    >
      <figure>
        <img className="" src={article?.urlToImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.source?.name}</h2>
        <p className="line-clamp-2">{article?.title}</p>
      </div>
    </div>
  );
}
