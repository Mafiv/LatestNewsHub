import "../../spinner.css"; // For keyframes (or add directly to a global CSS file)

const Spinner = () => {
  return (
    <div className="relative inline-block h-12 w-12 animate-spin rounded-full border-2 border-blue-600 mx-auto">
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 translate-x-6 translate-y-6 transform rounded-full bg-red-600"></div>
      <div className="absolute bottom-1/2 right-1/2 h-1.5 w-1.5 -translate-x-6 -translate-y-6 transform rounded-full bg-red-600"></div>
    </div>
  );
};

export default Spinner;
