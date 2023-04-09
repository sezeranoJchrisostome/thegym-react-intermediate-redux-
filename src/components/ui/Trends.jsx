import { useGetTopTrendsQuery } from "../../features/services/newsService";
import { setActiveNews } from "../../features/news/newSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ArticleCard from "../card/ArticleCard";

export default function Trends() {
  const [currentArt, setCurrentArt] = useState([]);
  const [query, setQuery] = useState("");
  const { data, isLoading } = useGetTopTrendsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRedirect = (article) => {
    dispatch(setActiveNews(article));
    navigate("/details");
  };

  const resetArticles = useCallback(() => {
    if (!isLoading) setCurrentArt(data?.articles);
  }, [data, isLoading]);

  useEffect(() => {
    resetArticles();
  }, [resetArticles]);

  useEffect(() => {
    if (query.trim().length < 2) return resetArticles();
    setCurrentArt((currentData) =>
      currentData.filter((article) =>
        article.content.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    );
  }, [query, data, resetArticles]);

  return (
    <>
      {isLoading && (
        <div className="absolute top-0 right-0 h-full w-full bg-base-200 flex items-center justify-center">
          <progress className="progress progress-secondary w-56"></progress>
        </div>
      )}

      {!isLoading && (
        <div className="col-span-9 px-4">
          <div className="form-control">
            <label className="input-group">
              <input
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                placeholder="Search..."
                className="input input-bordered"
              />
              <span>🔎</span>
            </label>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {currentArt.map((article, index) => (
              <ArticleCard
                key={`generated-${index}`}
                article={article}
                handleRedirect={() => handleRedirect(article)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
