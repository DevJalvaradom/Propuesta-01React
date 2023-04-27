import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../custom.scss';
import * as MaterialIcons from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom';

export function Navbar({ miniMenu }) {
    const classNameNavegacion = "navbar-collapse pt-3 pb-2 py-lg-0 w-100 col collapse"
    const [boolSwitchMiniMenu, setMiniMenu] = useState(false);
    const mostrarMenu = function () {
        console.log("click en funcion" + boolSwitchMiniMenu);
        // setMiniMenu(!boolSwitchMiniMenu);
        // // setMiniMenu(!boolSwitchMiniMenu);
        const divElement = document.querySelector('#menuNavegacion');
        if (boolSwitchMiniMenu === true) {
            divElement.classNameList.remove('show');
            setMiniMenu(!boolSwitchMiniMenu);
        } else {
            // divElement.classNameList.remove('collapse');
            // divElement.classNameList.add('collapsing');
            divElement.classNameList.add('show');
            setMiniMenu(!boolSwitchMiniMenu);
        }
    }
    return (
        <>
            <div className="container position-sticky z-index-sticky top-0"><div className="row"><div className="col-12">
                <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div className="container-fluid px-0">
                        <a className="navbar-brand font-weight-bolder ms-sm-3" href="#" rel="tooltip" title="" data-placement="bottom">
                            suculentas.com
                        </a>
                        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded={boolSwitchMiniMenu} aria-label="Toggle navigation" onClick={mostrarMenu}>
                            <span className="navbar-toggler-icon mt-2">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>

                        <div className={classNameNavegacion + "collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100"} id="menuNavegacion">

                            <ul className="navbar-nav navbar-nav-hover ms-auto">
                                <li className="nav-item ms-lg-auto">
                                    <NavLink className="nav-link nav-link-icon me-2" to="/contacto">
                                        <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.Home /> Inicio</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-lg-auto">
                                    <NavLink className="nav-link nav-link-icon me-2" to="/contacto">
                                        <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.Info /> Sobre Nosotros</p>
                                    </NavLink>
                                    <a className="nav-link nav-link-icon me-2" href="#" >


                                    </a>
                                </li>
                                <li className="nav-item ms-lg-auto">
                                    <NavLink className="nav-link nav-link-icon me-2" to="/contacto">
                                        <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.StoreMallDirectory /> Catalogo</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-lg-auto">
                                    <NavLink className="nav-link nav-link-icon me-2" to="/contacto">
                                        <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.Mail /> Contactenos</p>
                                    </NavLink>
                                </li>

                                {/* <li className="nav-item dropdown dropdown-hover mx-2">
                                    <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                                        <MaterialIcons.Home />
                                        Pages
                                        <MaterialIcons.KeyboardArrowDown />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                                        <div className="d-none d-lg-block">
                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                                Landing Pages
                                            </h6>
                                            <a href="./pages/about-us.html" className="dropdown-item border-radius-md">
                                                <span>About Us</span>
                                            </a>
                                            <a href="./pages/contact-us.html" className="dropdown-item border-radius-md">
                                                <span>Contact Us</span>
                                            </a>
                                            <a href="./pages/author.html" className="dropdown-item border-radius-md">
                                                <span>Author</span>
                                            </a>
                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                                Account
                                            </h6>
                                            <a href="./pages/sign-in.html" className="dropdown-item border-radius-md">
                                                <span>Sign In</span>
                                            </a>
                                        </div>

                                        <div className="d-lg-none">
                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                                Landing Pages
                                            </h6>

                                            <a href="./pages/about-us.html" className="dropdown-item border-radius-md">
                                                <span>About Us</span>
                                            </a>
                                            <a href="./pages/contact-us.html" className="dropdown-item border-radius-md">
                                                <span>Contact Us</span>
                                            </a>
                                            <a href="./pages/author.html" className="dropdown-item border-radius-md">
                                                <span>Author</span>
                                            </a>

                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                                Account
                                            </h6>
                                            <a href="./pages/sign-in.html" className="dropdown-item border-radius-md">
                                                <span>Sign In</span>
                                            </a>

                                        </div>

                                    </div>
                                </li> */}


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            </div>
            </div>





        </>



    )
}

Navbar.propTypes = {
    miniMenu: PropTypes.bool.isRequired
}
Navbar.defaultProps = {
    miniMenu: false
}
