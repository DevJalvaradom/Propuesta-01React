import { useState } from 'react';
import PropTypes from 'prop-types';
import './custom.scss'
import * as MaterialIcons from '@mui/icons-material'

export function Index({ miniMenu }) {
    const classNavegacion = "navbar-collapse pt-3 pb-2 py-lg-0 w-100 col collapse"
    const [boolSwitchMiniMenu, setMiniMenu] = useState(false);
    const mostrarMenu = function () {
        console.log("click en funcion" + boolSwitchMiniMenu);
        // setMiniMenu(!boolSwitchMiniMenu);
        // // setMiniMenu(!boolSwitchMiniMenu);
        const divElement = document.querySelector('#menuNavegacion');
        if (boolSwitchMiniMenu === true) {
            divElement.classList.remove('show');
            setMiniMenu(!boolSwitchMiniMenu);
        } else {
            // divElement.classList.remove('collapse');
            // divElement.classList.add('collapsing');
            divElement.classList.add('show');
            setMiniMenu(!boolSwitchMiniMenu);
        }
    }
    return (
        <>
            <div class="container position-sticky z-index-sticky top-0"><div class="row"><div class="col-12">
                <nav class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div class="container-fluid px-0">
                        <a class="navbar-brand font-weight-bolder ms-sm-3" href="#" rel="tooltip" title="" data-placement="bottom">
                            suculentas.com
                        </a>
                        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded={boolSwitchMiniMenu} aria-label="Toggle navigation" onClick={mostrarMenu}>
                            <span class="navbar-toggler-icon mt-2">
                                <span class="navbar-toggler-bar bar1"></span>
                                <span class="navbar-toggler-bar bar2"></span>
                                <span class="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>

                        <div className={classNavegacion} class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="menuNavegacion">

                            <ul class="navbar-nav navbar-nav-hover ms-auto">
                                <li class="nav-item ms-lg-auto">
                                    <a class="nav-link nav-link-icon me-2" href="#" >
                                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.Home /> Inicio</p>
                                    </a>
                                </li>
                                <li class="nav-item ms-lg-auto">
                                    <a class="nav-link nav-link-icon me-2" href="#" >
                                        <i class="fa fa-github me-1"></i>
                                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.Info /> Sobre Nosotros</p>
                                    </a>
                                </li>
                                <li class="nav-item ms-lg-auto">
                                    <a class="nav-link nav-link-icon me-2" href="#" >
                                        <i class="fa fa-github me-1"></i>
                                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.StoreMallDirectory /> Catalogo</p>
                                    </a>
                                </li>
                                <li class="nav-item ms-lg-auto">
                                    <a class="nav-link nav-link-icon me-2" href="#" >
                                        <i class="fa fa-github me-1"></i>
                                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title=""><MaterialIcons.Mail /> Contactenos</p>
                                    </a>
                                </li>

                                {/* <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                                        <MaterialIcons.Home />
                                        Pages
                                        <MaterialIcons.KeyboardArrowDown />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                                        <div class="d-none d-lg-block">
                                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                                Landing Pages
                                            </h6>
                                            <a href="./pages/about-us.html" class="dropdown-item border-radius-md">
                                                <span>About Us</span>
                                            </a>
                                            <a href="./pages/contact-us.html" class="dropdown-item border-radius-md">
                                                <span>Contact Us</span>
                                            </a>
                                            <a href="./pages/author.html" class="dropdown-item border-radius-md">
                                                <span>Author</span>
                                            </a>
                                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                                Account
                                            </h6>
                                            <a href="./pages/sign-in.html" class="dropdown-item border-radius-md">
                                                <span>Sign In</span>
                                            </a>
                                        </div>

                                        <div class="d-lg-none">
                                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                                Landing Pages
                                            </h6>

                                            <a href="./pages/about-us.html" class="dropdown-item border-radius-md">
                                                <span>About Us</span>
                                            </a>
                                            <a href="./pages/contact-us.html" class="dropdown-item border-radius-md">
                                                <span>Contact Us</span>
                                            </a>
                                            <a href="./pages/author.html" class="dropdown-item border-radius-md">
                                                <span>Author</span>
                                            </a>

                                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                                Account
                                            </h6>
                                            <a href="./pages/sign-in.html" class="dropdown-item border-radius-md">
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

Index.propTypes = {
    miniMenu: PropTypes.bool.isRequired
}
Index.defaultProps = {
    miniMenu: false
}
