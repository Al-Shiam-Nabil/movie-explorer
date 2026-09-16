export default function Container({ children, className }) {
  return (
    <div className={`${className} max-w-360 mx-auto lg:px-8 sm:px-6 px-4  `}>
      {children}
    </div>
  );
}
