export const getBackgroundImageStyle = (index, showTitle = true,headlines) => ({
    backgroundImage:
      headlines[index].image == null
        ? "url(/news.jpg)"
        : `url(${headlines[index].image ? headlines[index].image : "/news.jpg"})`,
    backgroundSize: "cover",
    borderRadius: headlines[index].image ? "0.5rem" : "0",
    ...(showTitle
      ? {
          "&:after": {
            content: `'${headlines[index].title}'`,
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "0.5rem",
            fontSize: "1.2rem",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
          },
        }
      : {}),
    
  });

  export const dateFormat = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };