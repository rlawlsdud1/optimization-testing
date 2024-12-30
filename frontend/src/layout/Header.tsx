import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-2xl font-bold">
        OPTI-TEST
      </Link>

      <div className="flex items-center space-x-4">
        {isMobile ? (
          <button ref={buttonRef} onClick={toggleMenu} className="text-xl">
            &#9776;
          </button>
        ) : (
          <>
            <Link to="/test1" className="hover:text-gray-400">
              TEST1
            </Link>
            <Link to="/test2" className="hover:text-gray-400">
              TEST2
            </Link>
            <Link to="/test3" className="hover:text-gray-400">
              TEST3
            </Link>
          </>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-gray-700 p-4 space-y-4 rounded-lg shadow-lg"
        >
          <Link
            to="/test1"
            className="block text-white hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            TEST1
          </Link>
          <Link
            to="/test2"
            className="block text-white hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            TEST2
          </Link>
          <Link
            to="/test3"
            className="block text-white hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            TEST3
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
