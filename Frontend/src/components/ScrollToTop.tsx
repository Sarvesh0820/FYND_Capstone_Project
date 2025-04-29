import  { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <div className="w-full flex justify-center my-8">
        <button
          onClick={handleClick}
          className="bg-pink-200 text-gray-600 px-4 py-2 rounded-full shadow-md hover:bg-pink-400 transition-all"
        >
          ↑ Scroll to Top
        </button>
      </div>
    )
  );
};

export default ScrollToTop;