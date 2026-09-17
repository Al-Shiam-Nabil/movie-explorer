import { Star, X } from "lucide-react";
import parse from "html-react-parser";

export default function DetailsModal({ onClose, selectedMovie }) {
  const posterImage =
    selectedMovie?.image?.original || selectedMovie?.image?.medium;
  const genres = selectedMovie?.genres?.length
    ? selectedMovie.genres.join(", ")
    : "N/A";

  return (
    <>
      <div
        onClick={onClose}
        className="bg-black/80 backdrop-blur-sm fixed w-screen h-screen inset-0 z-50 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="md:w-3xl lg:w-4xl xl:w-6xl  bg-white rounded-xl p-5  "
        >
          <div className="flex   justify-end mb-3  ">
            <X
              onClick={onClose}
              className=" text-black/60 hover:text-black cursor-pointer"
            />
          </div>
          <div className=" max-h-[70vh] min-h-50 overflow-y-scroll">
            <div className="flex w-full flex-col lg:flex-row gap-10 ">
              {posterImage ? (
                <img
                  src={posterImage}
                  alt={selectedMovie?.name}
                  className="lg:w-1/2 h-120  lg:h-150  rounded-xl"
                />
              ) : (
                <div className="lg:w-1/2 h-120 lg:h-150 rounded-xl bg-base-200 flex items-center justify-center text-sm opacity-60">
                  No poster available
                </div>
              )}

              <div className="space-y-5 lg:w-1/2">
                <h2 className="text-2xl font-bold">{selectedMovie?.name}</h2>
                <div>
                  {selectedMovie?.summary ? parse(selectedMovie.summary) : ""}
                </div>
                <div className="flex items-center gap-10">
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <span>
                      <Star fill="#F5C518" stroke="#F5C518" />
                    </span>{" "}
                    {selectedMovie?.rating?.average ?? "N/A"}
                  </h3>

                  <p className="text-xl font-bold">
                    Release Date: {selectedMovie?.premiered || "N/A"}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="text-lg font-bold">Genres:</span> {genres}
                  </p>
                  <p>
                    <span className="text-lg font-bold">Language: </span>{" "}
                    {selectedMovie?.language || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
