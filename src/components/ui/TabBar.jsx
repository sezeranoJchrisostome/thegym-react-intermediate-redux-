import { useDispatch } from "react-redux";
import { useGetAllSourcesQuery } from "../../features/services/newsService";
import { setSource } from "../../features/news/sourceSlice";
import { useNavigate } from "react-router-dom";

export default function TabBar() {
  const { data } = useGetAllSourcesQuery(12, 1);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div className="col-span-3 overflow-auto flex flex-col gap-4 items-start">
      {data?.sources?.map((source, index) => {
        return (
          <button
            key={`genre-${index}`}
            onClick={() => {
              dispatch(setSource(source.id));
              navigate("/publisher")
            }}
            className="text-base text-[#8c8d8f] cursor-pointer"
          >
            {source.name}
          </button>
        );
      })}


    </div>
  );
}
