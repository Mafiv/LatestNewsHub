import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetch_MainNews, fetch_headline, fetch_mediaStack } from "../Service/simpleFetch";

// Create a context
export const NewsContext = createContext();

// Function to fetch both news
const fetchNews = async () => {
  const trending = await fetch_MainNews();
  const latest = await fetch_headline();
  const mediaStack = await fetch_mediaStack();

  return { trending, latest, mediaStack };
};

export const RecentNewsProvider = ({ children }) => {
  // Use the useQuery hook to fetch the news
  const { data, error, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 2400 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  // Render loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Provide the fetched data to the children via context
  // console.log(data);
  return (
    <NewsContext.Provider
      value={{
        trending: data.trending,
        latest: data.latest,
        mediaStack: data.mediaStack,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

