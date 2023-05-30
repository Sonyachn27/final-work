// import { Link, NavLink } from "react-router-dom"
// import LanguageSelector from "./select"
// import { useTranslation } from "react-i18next"
// import { useState } from "react"

// const Header = () => {
//     const {t} = useTranslation()
//     const [isNavExpanded, setIsNavExpanded] = useState(true)
   

//     return (
//         <div className="container">  
//        <header className="Header header_mobil"> 
//        <div id="menu-bar"  onClick={()=> {setIsNavExpanded(!isNavExpanded)}} className={
//        isNavExpanded ? "" : "active active-btn "
//      } >
//             <div id="bar1" class="bar"></div>
//             <div id="bar2" class="bar"></div>
//             <div id="bar3" class="bar"></div>
//           </div>
//             <nav >
//                 <ul className={
//        isNavExpanded ? "nav-list" : "header__list active"
//      }>
//                     <NavLink className="nav-list_item" to="/">
//                   <Link to="/">{t('Project')}</Link>
//                 </NavLink>
//                 <NavLink className="nav-list_item" to="contacts">
//                   <Link to="contacts">{t('Contact')}</Link>
//                 </NavLink>
//                 <NavLink className="nav-list_item" to="about">
//                   <Link to="about">{t('About')}</Link>
//                 </NavLink>
//                 <NavLink className="nav-list_item" to="job">
//                   <Link to="job">{t('Work')}</Link>
//                 </NavLink>
//                 </ul>
//             </nav>
//            <LanguageSelector />
          
//         </header>
//         </div>
//     )
// }

// export default Header



// import { Link, NavLink } from "react-router-dom"
// import LanguageSelector from "./select"
// import { useTranslation } from "react-i18next"
// import { useState } from "react"

// const Header = () => {
//     const {t} = useTranslation()
//     const [isNavExpanded, setIsNavExpanded] = useState(true)

//     const handleNavClick = () => {
//       setIsNavExpanded(!isNavExpanded);
//     };

//     return (
//         <div className="container">  
//           <header className="Header header_mobil"> 
//             <div id="menu-bar" onClick={handleNavClick} className={isNavExpanded ? "" : "active active-btn"}>
//               <div id="bar1" className="bar"></div>
//               <div id="bar2" className="bar"></div>
//               <div id="bar3" className="bar"></div>
//             </div>
//             <nav>
//               <ul className={isNavExpanded ? "nav-list" : "header__list active"}>
//                 <NavLink className="nav-list_item" onClick={handleNavClick}>
//                   <Link to="/final-work/">{t('Project')}</Link>
//                 </NavLink>
//                 <NavLink className="nav-list_item" onClick={handleNavClick}>
//                   <Link to="/final-work/contacts">{t('Contact')}</Link>
//                 </NavLink>
//                 <NavLink className="nav-list_item" onClick={handleNavClick}>
//                   <Link to="/final-work/about">{t('About')}</Link>
//                 </NavLink> 
//                 <NavLink className="nav-list_item" onClick={handleNavClick}>
//                   <Link to="/final-work/job">{t('Work')}</Link>
//                 </NavLink> 
//               </ul>
//             </nav>
//             <LanguageSelector />
//           </header>
//         </div>
//     )
// }

// export default Header


import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./select";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNavClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
      setIsNavExpanded(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <header className={`Header ${isMobile ? "header_mobil" : "active"}`}>
        {isMobile ? (
          <div
            id="menu-bar"
            onClick={handleNavClick}
            className={isNavExpanded ? "active-btn" : "active"}
          >
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
        ) : null}
        <nav>
          {isMobile ? (
            <ul className={isNavExpanded ? "nav-list" : "header__list active"}>
              <NavLink className="nav-list_item" onClick={handleNavClick}>
                <Link to="/final-work/">{t("Project")}</Link>
              </NavLink>
              <NavLink className="nav-list_item" onClick={handleNavClick}>
                <Link to="/final-work/contacts">{t("Contact")}</Link>
              </NavLink>
              <NavLink className="nav-list_item" onClick={handleNavClick}>
                <Link to="/final-work/about">{t("About")}</Link>
              </NavLink>
              <NavLink className="nav-list_item" onClick={handleNavClick}>
                <Link to="/final-work/job">{t("Work")}</Link>
              </NavLink>
            </ul>
          ) : (<ul className="nav-list" >
              <NavLink className="nav-list_item" >
                <Link to="/final-work/">{t("Project")}</Link>
              </NavLink>
              <NavLink className="nav-list_item" >
                <Link to="/final-work/contacts">{t("Contact")}</Link>
              </NavLink>
              <NavLink className="nav-list_item" >
                <Link to="/final-work/about">{t("About")}</Link>
              </NavLink>
              <NavLink className="nav-list_item" >
                <Link to="/final-work/job">{t("Work")}</Link>
              </NavLink>
            </ul>
          )}
        </nav>
        <LanguageSelector />
      </header>
    </div>
  );
};

export default Header;