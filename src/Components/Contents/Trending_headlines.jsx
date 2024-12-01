import { useQuery } from "@tanstack/react-query";
import { fetch_headline } from "../../Service/simpleFetch";
export function Trending_headlines({ data }) {
  
  // console.log(data);

  return (
    <section>
      <h1 className="my-4 px-4 text-xl font-semibold text-gray-700">
        Trending headline
      </h1>
      <hr className="ml-8 w-[70%] border-t border-gray-700" />
      <div className="h-[800px] overflow-y-scroll">
        {data.map((val, ind) => {
          return (
            <div className="mt-2 grid grid-cols-[1fr_3fr]" key={ind}>
              <div
                className="h-[100px] rounded-md bg-cover bg-center"
                style={{
                  backgroundImage: `url(${val.image ? val.image : "/news.png"})`,
                }}
              ></div>
              {}
              <div>
                <h6 className="p-2 pl-4 pt-6 text-sm">{val.title}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
