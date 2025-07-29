const BreadCrump = ({ title }: { title: string }) => {
  return (
    <div className="text-white flex gap-4 w-full items-center font-bold">
      <span>Home</span>
      <svg
        className="rtl:rotate-180 w-3 h-3 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="text-sm  text-amber-600">{title}</span>
    </div>
  );
};
export default BreadCrump;