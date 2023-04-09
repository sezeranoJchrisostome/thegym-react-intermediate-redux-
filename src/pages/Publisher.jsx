import { useDispatch, useSelector } from "react-redux";
import { useGetArticleBySourceQuery } from "../features/services/newsService";
import ArticleCard from "../components/card/ArticleCard";
import { useNavigate } from "react-router-dom";
import { setActiveNews } from "../features/news/newSlice";
import { useEffect } from "react";

export default function Publisher() {
  const source = useSelector((state) => state.activeSource);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetArticleBySourceQuery(source);
  useEffect(() => {
    !source && navigate("/")
  }, [source,navigate])
  
  return (
    <div className="h-screen">
      <div className="grid grid-cols-4 gap-6 w-full">
        {isLoading && (
          <div className="h-full w-full bg-base-200 flex items-center justify-center">
            <progress className="progress progress-secondary w-56"></progress>
          </div>
        )}
        {!isLoading &&
          !error &&
          data?.articles.map((article, index) => (
            <ArticleCard
              key={`generated-${index}`}
              article={article}
              handleRedirect={() => {
                dispatch(setActiveNews(article));
                navigate("/details")
              }}
            />
          ))}
      </div>
    </div>
  );
}
