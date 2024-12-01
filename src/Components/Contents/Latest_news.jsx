export function Latest_news({ data }) {
  console.log(data);

  return (
    <>
      <div>
        <div className="my-4 flex items-center">
          <h1 className="px-4 text-xl font-semibold text-gray-700">
            Latest News
          </h1>
          <hr className="w-[75%] border-t border-gray-700" />
        </div>
        <section className="flex w-[100] flex-wrap justify-between gap-2">
          {data.map((val, ind) => {
            return (
              <div
                key={ind}
                className="group relative mb-4 ml-2 h-[240px] w-[48%] cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${val.image ? val.image : "./news.png"})`,
                }}
                onClick={() => window.open(val.url, "_blank")}
              >
                <div className="absolute bottom-0 h-[50%] w-[100%] rounded-lg bg-gradient-to-t from-black to-transparent">
                  <h3 className="p-2 pt-10 text-center text-sm tracking-wide text-white">
                    {val.title}
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-40 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
