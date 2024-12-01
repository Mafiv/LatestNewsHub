import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient(); // Initialize QueryClient

// API Fetching function
const fetchNews = async () => {
  const url = `https://gnews.io/api/v4/search?q=example&apikey=975abf73e61749b80f98edc264b59f17`;
  const response = await axios.get(url);
  return response.data; // Return only the data
};

// Component to display news
const NewsComponent = () => {
  // Use useQuery to fetch and cache data
  const { data, isLoading, error } = useQuery(["news"], fetchNews, {
    staleTime: 60000, // Cache data for 60 seconds
    refetchOnWindowFocus: false, // Prevent refetch when switching tabs
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div>
      <h1>News</h1>
      <ul>
        {data.articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Wrap your app with QueryClientProvider
const App = () => (
  <QueryClientProvider client={queryClient}>
    <NewsComponent />
  </QueryClientProvider>
);

export default App;

<img width="892" height="1000" alt=" Image of the Heinz ketchup bottle cut into tomato-shaped slices to show the naturalness of their product. " sizes="(max-width: 892px) 100vw, 892px" className="wp-image-37181 lazyloaded" decoding="async" src="https://cdn-chefn.nitrocdn.com/IcbkoxBoZAaIwhSaprplormwGmobedsR/assets/images/optimized/rev-e99406d/antavo.com/wp-content/uploads/2022/08/heinz-best-ads.png" ></img>