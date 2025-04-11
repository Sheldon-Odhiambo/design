import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"; // Updated icons
import "../styles/ScrollButtons.css";

const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowUp(true);
      } else {
        setShowUp(false);
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setShowDown(false);
      } else {
        setShowDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      {showUp && (
        <button className="scroll-btn up" onClick={scrollToTop}>
          <MdKeyboardArrowUp />
        </button>
      )}
      {showDown && (
        <button className="scroll-btn down" onClick={scrollToBottom}>
          <MdKeyboardArrowDown />
        </button>
      )}
    </div>
  );
};

export default ScrollButtons;
