import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppLayout } from "./UI/AppLayout";
import { Heading_news } from "./Components/Contents/Heading_news";
import { Main_news_body } from "./Components/Contents/Main_news_body";
import { RecentNewsProvider } from "./providers/newsContent";
import ContentWrapper from "./Components/content_wrapper";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecentNewsProvider>
      <ContentWrapper />
      </RecentNewsProvider>
    </QueryClientProvider>
  );
}
