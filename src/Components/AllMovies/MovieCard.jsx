import { Star } from "lucide-react";
import { useState } from "react";
import DetailsModal from "../Modals/DetailsModal";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const { name, image, rating, premiered } = movie;

  const posterImage = image?.medium || image?.original;
  const movieRating = rating?.average ?? "N/A";
  const releaseYear = premiered?.split("-")[0] || "N/A";

  const handleDetails = (targetMovie) => {
    setShowModal(true);
    setSelectedMovie(targetMovie);
  };

  return (
    <>
      <div className="w-full space-y-3  duration-300 ease-out hover:scale-103">
        {posterImage ? (
          <img src={posterImage} alt={name} className="w-full max-h-80" />
        ) : (
          <div className="w-full h-80 flex items-center justify-center bg-base-200 text-sm opacity-60">
            No poster available
          </div>
        )}
        <h2 className="font-bold">{name}</h2>
        <div className="flex items-center justify-between gap-6">
          <h3 className="flex items-center gap-2">
            <span>
              <Star fill="#F5C518" stroke="#F5C518" />
            </span>{" "}
            {movieRating}
          </h3>

          <h3>
            <div className="badge badge-soft badge-secondary">
              {" "}
              {releaseYear}
            </div>
          </h3>
        </div>

        <button
          type="button"
          onClick={() => handleDetails(movie)}
          className="btn btn-sm btn-primary rounded-full px-5 w-full text-black border-none font-semibold mt-3"
        >
          See Details
        </button>
      </div>
      {showModal && (
        <DetailsModal
          onClose={() => setShowModal(false)}
          selectedMovie={selectedMovie}
        />
      )}
    </>
  );
}
