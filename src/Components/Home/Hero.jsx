import Heroimage from "../../assets/movie-explorer-hero.jpg";
import Container from "../Shared/Container";
import MainButton from "../Shared/MainButton";

export default function Hero() {
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(${Heroimage})` }}
        className={` w-full h-[80vh] bg-cover bg-bottom bg-no-repeat my-7 rounded-4xl text-white p-5 sm:p-8  flex flex-col justify-center items-center gap-6 text-center`}
      >
        <h1 className="text-5xl font-black leading-15">DISCOVER MOVIES</h1>
        <h3 className="text-2xl">
          {" "}
          Explore and discover your favorite. movies from around the world.{" "}
        </h3>
        <MainButton className="w-40">Explore Now</MainButton>
      </div>
    </Container>
  );
}
