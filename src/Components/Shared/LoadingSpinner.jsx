import Container from "./Container";

export default function LoadingSpinner() {
  return (
    <Container>
      <div className="w-full flex justify-center items-center my-20 ">
        <span className="loading loading-bars loading-xl text-primary"></span>
      </div>
    </Container>
  );
}
