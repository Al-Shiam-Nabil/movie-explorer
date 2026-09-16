export default function MainButton({ children, className }) {
  return (
    <div
      className={`${className} btn bg-primary hover:bg-secondary  border-none rounded-full px-6 py-4 cursor-pointer hover:text-white`}
    >
      {children}
    </div>
  );
}
