import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/card/ArticleCard";
import { useGetArticleBySourceQuery } from "../features/services/newsService";
import { useEffect } from "react";
import { setActiveNews } from "../features/news/newSlice";

export default function Detail() {
  const navigate = useNavigate();
  const selectedNews = useSelector((store) => store.activeNews);
  const dispatch = useDispatch();
  const {
    data,
    isLoading: loadingArticles,
    error,
  } = useGetArticleBySourceQuery(selectedNews?.source?.id);
  useEffect(() => {
    const isNotSelected = JSON.stringify(selectedNews) === "{}";
    if (isNotSelected) return navigate("/");
  }, [navigate, selectedNews]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4 max-h-screen relative px-4 overflow-y-auto flex flex-col gap-6">
        {loadingArticles && (
          <div className="h-full w-full bg-base-200 flex items-center justify-center">
            <progress className="progress progress-secondary w-56"></progress>
          </div>
        )}

        {!error && (
          <ArticleCard
            article={selectedNews}
            handleRedirect={() => dispatch(setActiveNews(selectedNews))}
          />
        )}

        {(!loadingArticles && !error ) &&
          data?.articles.map((article, index) => (
            <ArticleCard
              key={`generated-${index}`}
              article={article}
              handleRedirect={() => dispatch(setActiveNews(article))}
            />
          ))}
      </div>
      <div className="col-span-8">
        <div className="">
          <img className="w-full" src={selectedNews.urlToImage} alt="" />
        </div>
        <div className="mt-6">
          <h1 className="text-5xl font-bold">{selectedNews.title}</h1>
          <p className="text-3xl my-6">{selectedNews.description}</p>
          <p className="text-xl ">{selectedNews.content}</p>
        </div>
      </div>
    </div>
  );
}
