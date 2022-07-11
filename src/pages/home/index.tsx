import { useQuery } from "@apollo/client";
import { TAGS } from "../../constants";
import { Job } from "../../types";
import { JOBS } from "../../utils/graphql";
import { useMemo, useState, useEffect } from "react";
import Loader from "../../components/loader";
import Error from "../../components/error";
import useDebounce from "../../utils";

function Home() {
  const { loading, error, data } = useQuery<{ jobs: Job[] }>(JOBS);
  const [filterTag, setFilterTag] = useState("all");
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);

  const filterByTag = useMemo(() => {
    if (filterTag !== "all") {
      return data?.jobs
        .map(
          (item) =>
            item.tags
              .map((d) => d.name.toLowerCase())
              .includes(filterTag.toLowerCase()) && item
        )
        .filter(Boolean);
    }
    return data?.jobs.filter(Boolean);
  }, [filterTag, data]);

  useEffect(() => {
    searchText ? setFilterTag(searchText) : setFilterTag("all");
  }, [debouncedValue]);

  return (
    <main>
      <div className="container mx-auto">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <div className="p-5">
            <input
              type="text"
              className="w-full rounded-md p-4 border-2 border-red-500 focus:outline-none "
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              data-test-id="input-box"
            />
            <div className="mt-4 w-full overflow-auto mt-4">
              <div className="flex space-x-4">
                {TAGS?.map((tag, index) => (
                  <button
                    className="bg-red-500 grid place-items-center p-4 rounded-md"
                    key={index}
                    onClick={() => setFilterTag(tag.toLowerCase())}
                    data-test-id="tag-box"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex space-y-4 flex-col mt-4">
              {filterByTag?.length === 0 ? (
                <div className="h-screen w-full grid place-items-center">
                  {" "}
                  <p className="text-black font-bold">
                    no jobs for this yet , please check later
                  </p>
                </div>
              ) : (
                <>
                  <p data-test-id="date">{new Date().toDateString()}</p>
                  {filterByTag?.slice(0, 4).map((item: any) => {
                    return (
                      <div className="flex lg:space-x-4 " key={item.id}>
                        <div
                          className="bg-cover bg-no-repeat w-[6rem] bg-center rounded-md place-items-center hidden lg:grid"
                          style={{
                            backgroundImage: `url(${item?.company?.logoUrl})`,
                            backgroundColor: "red",
                          }}
                        >
                          {!item.company.logoUrl && (
                            <p className="uppercase text-white font-bold">{`${
                              item.company?.name[0]
                            } ${
                              item.company.name[item.company.name.length - 1]
                            }`}</p>
                          )}
                        </div>
                        <div className="w-full shadow-lg rounded-md flex flex-col justify-center p-5 bg-blue-500 ">
                          <p className="text-white font-bold text-[1.3rem]">
                            {" "}
                            {item.company?.name}
                          </p>
                          <p className="text-white font-bold"> {item?.title}</p>
                          <div className="flex space-x-2 overflow-auto w-full">
                            {item.tags?.map((tag: any, index: number) => (
                              <div
                                className="bg-red-500 px-4 rounded-md"
                                key={index}
                              >
                                {tag?.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <p data-test-id="date">
                    {new Date("jul 9 2022").toDateString()}
                  </p>
                  {filterByTag
                    ?.slice(4, filterByTag.length)
                    .map((item: any) => {
                      return (
                        <div className="flex lg:space-x-4 " key={item.id}>
                          <div
                            className="bg-cover bg-no-repeat w-[6rem] bg-center rounded-md place-items-center hidden lg:grid"
                            style={{
                              backgroundImage: `url(${item?.company?.logoUrl})`,
                              backgroundColor: "red",
                            }}
                          >
                            {!item.company.logoUrl && (
                              <p className="uppercase text-white font-bold">{`${
                                item.company?.name[0]
                              } ${
                                item.company.name[item.company.name.length - 1]
                              }`}</p>
                            )}
                          </div>
                          <div className="w-full shadow-lg rounded-md flex flex-col justify-center p-5 bg-blue-500 ">
                            <p className="text-white font-bold text-[1.3rem]">
                              {" "}
                              {item.company?.name}
                            </p>
                            <p className="text-white font-bold">
                              {" "}
                              {item.title}
                            </p>
                            <div className="flex space-x-2 overflow-auto w-full">
                              {item.tags?.map((tag: any, index: number) => (
                                <div
                                  className="bg-red-500 px-4 rounded-md"
                                  key={index}
                                >
                                  {tag?.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
