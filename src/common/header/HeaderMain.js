import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import Darkmode2 from "./DarkmodeBackup";
import useStickyHeader from "./useStickyHeader";

const HeaderMain = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky && check ? "sticky" : ""}`;
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
    <>
      <header
        ref={ref}
        style={{background:"#f5f8fa"}}
        className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}
      >
        <div style={{background:"#f5f8fa"}} className="container position-relative">
          <div style={{background:"#f5f8fa"}} className="row align-items-center row--0">
            <div style={{background:"#f5f8fa"}} className="col-lg-3 col-md-6 col-4">
              <Logo
               image={`${process.env.PUBLIC_URL}/images/logo/LOGO_SCL.jpg`}
                image2={`${process.env.PUBLIC_URL}/images/logo/LOGO_SCL.jpg`}
              />
            </div>
            <div style={{background:"#f5f8fa"}} className="col-lg-9 col-md-6 col-8 position-static">
              <div style={{background:"#f5f8fa"}} className="header-right">
                <nav style={{background:"#f5f8fa"}} className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>

                <div style={{background:"#f5f8fa"}} className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div  className="hamberger">
                    <span
                      className="hamberger-button"
                      onClick={onCanvasHandler}
                    >
                      <FiMenu />
                    </span>
                  </div>
                </div>
                <Darkmode2 />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderMain;
