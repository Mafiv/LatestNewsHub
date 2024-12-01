/*************  ✨ Codeium Command 🌟  *************/
export function Heading_news({ data }) {
  const headlines = data;
  console.log(headlines);
  const getBackgroundImageStyle = (index, showTitle = true) => ({
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

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="lg:mb-8 lg:grid lg:grid-cols-2 lg:pb-2">
      <section className="lg: lg:flex lg:flex-col">
        <div
          className="relative mt-5 lg:mx-auto lg:mb-5 lg:h-[360px] lg:w-[600px] lg:rounded-md lg:border lg:border-black lg:shadow-md lg:shadow-black/20"
          style={getBackgroundImageStyle(0)}
        >
          <div className="absolute bottom-0 h-auto w-[100%] rounded-lg bg-gradient-to-t from-black to-transparent">
            <h3 className="font-Helvetica px-4 pt-10 text-2xl font-bold tracking-wide text-[#F7F7F4]">
              {headlines[0].title}
            </h3>
            <div className="flex-row-2 font-Helvetica my-4 ml-6 flex gap-4 text-sm text-[#908f8f]">
              <p>By {headlines[0].source.name}</p>
              <p>{dateFormat(headlines[0].publishedAt)}</p>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:px-3">
          <div className="lg:flex-col-[3fr_1fr] lg:flex lg:justify-between lg:gap-4 lg:px-2">
            <p className="font-Helvetica lg:text-sm">
              <span className="lg:text-sm lg:text-yellow-500">
                {headlines[1].title}
              </span>
              <br></br>
              {headlines[1].description.split(" ").slice(0, 10).join(" ") +
                " ..."}
            </p>
            <div
              className="relative bg-cover lg:h-[100%] lg:w-[55%]"
              style={getBackgroundImageStyle(1)}
            ></div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="lg:mb-4 lg:grid lg:h-[250px] lg:w-full lg:grid-cols-[2fr_3fr] lg:bg-[#1A1A1A] lg:px-4 lg:pt-4 lg:text-white">
          <div
            className="overflow-hidden text-ellipsis px-4"
            style={{ height: "11rem" }}
          >
            {headlines[2].description}
          </div>
          <div
            className="relative lg:ml-4 lg:h-[220px]"
            style={getBackgroundImageStyle(2)}
          >
            <div className="absolute bottom-0 h-auto w-[100%] rounded-lg bg-gradient-to-t from-black to-transparent">
              <h3 className="font-Helvetica pt-10 text-center px-4 text-sm tracking-wide text-white">
                {headlines[2].title}
              </h3>
              <div className="flex-row-2 font-Helvetica my-4 ml-6 flex gap-4 text-sm text-[#908f8f]">
                <p>By {headlines[2].source.name}</p>
                <p>{dateFormat(headlines[2].publishedAt)}</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="gap-2 lg:grid lg:h-[200px] lg:grid-cols-[2fr_3fr] lg:p-2">
          <div
            className="relative"
            style={getBackgroundImageStyle(3, false)}
          ></div>
          <div className="">
            <h3 className="font-Helvetica px-4 text-xl font-bold tracking-wide text-black">
              {headlines[3].title}
            </h3>
            <div className="flex-row-2 font-Helvetica ml-4 mt-2 flex gap-4 text-sm text-[#908f8f]">
              <p>By {headlines[3].source.name}</p>
              <p>{dateFormat(headlines[3].publishedAt)}</p>
            </div>
            <hr className="my-2 ml-2 w-[80%] border-t border-gray-700" />

            <div
              className="overflow-hidden text-ellipsis px-4"
              style={{ height: "5em" }}
            >
              <p className="font-Helvetica text-sm text-[#04594D]">
                {headlines[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/******  2e2a48b4-c967-475a-ae8f-98eca561dc45  *******/