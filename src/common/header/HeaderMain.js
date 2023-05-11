import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import useStickyHeader from "./useStickyHeader";

const HeaderMain = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky  ? "sticky" : ""}`;
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div style={{backgroundColor:"#f5f8fa"}}>
      <header
        ref={ref}
        style={{backgroundColor:"#f5f8fa"}}
        className={`rn-header header-default  ${HeaderSTyle} ${headerClasses}`}
      >
        <div style={{backgroundColor:"#f5f8fa"}} className="container position-relative">
          <div style={{backgroundColor:"#f5f8fa"}} className="row align-items-center row--0">
            <div style={{backgroundColor:"#f5f8fa"}} className="col-lg-3 col-md-6 col-4">
              <Logo
               image={"https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Logo%2Flogo1.png?alt=media&token=900c69b4-2000-4a51-8db7-76a40886772a"}
                image2={"https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Logo%2Flogo1.png?alt=media&token=900c69b4-2000-4a51-8db7-76a40886772a"}
              />
            </div>
            <div style={{backgroundColor:"#f5f8fa"}} className="col-lg-9 col-md-6 col-8 position-static">
              <div style={{backgroundColor:"#f5f8fa"}} className="header-right">
                <nav style={{backgroundColor:"#f5f8fa"}} className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>

                <div style={{backgroundColor:"#f5f8fa"}} className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span
                      className="hamberger-button"
                      onClick={onCanvasHandler}
                    >
                      <FiMenu color="#d8d8d8"/>
                    </span>
                  </div>
                </div>
                {/* <Darkmode2 /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </div>
  );
};
export default HeaderMain;
