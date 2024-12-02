import { NewsContext } from "../providers/newsContent";
import { AppLayout } from "../UI/AppLayout";
import { Heading_news } from "./Contents/Heading_news";
import HeadNewsSlider from "./Contents/headNewsSlider";
import { Main_news_body } from "./Contents/Main_news_body";
import { useContext } from "react";

export default function ContentWrapper() {
  const { trending, latest } = useContext(NewsContext);

  const headingnews = latest && latest.length > 4 ? latest.slice(5) : [];
  const headlines = latest && latest.length > 3 ? latest.slice(0, 4) : [];

  //   console.log(headingnews);
  //   console.log(headlines);

  return (
    <>
      <AppLayout />
      <HeadNewsSlider />
      <Heading_news data={headlines}/>
      {/* {console.log(JSON.stringify(trending))} */}
      <Main_news_body data={{ trending, headingnews }} />
    </>
  );
}
