import { Trending_headlines } from "./Trending_headlines";
import { Latest_news } from "./Latest_news";

export function Main_news_body({ data }) {
  const trending = data.trending;
  const headingnews = data.headingnews;
  // console.log(data.trending);
  console.log(trending);

  return (
    <section className="grid grid-cols-[3fr_2fr] gap-4 pt-4">
      {<Latest_news data={trending} />}
      <div>
        <div className="mx-auto mb-6 w-[80%]">
          <img
            src="https://cdn-chefn.nitrocdn.com/IcbkoxBoZAaIwhSaprplormwGmobedsR/assets/images/optimized/rev-e99406d/antavo.com/wp-content/uploads/2024/10/pop-up-24-10-15.jpg"
            width="600"
            height="1080"
            alt=""
            className="banner-pop-up-content__png lazyloaded"
            decoding="async"
          />
        </div>
        <Trending_headlines data={headingnews} />
      </div>
    </section>
  );
}
