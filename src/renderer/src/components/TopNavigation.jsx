import { useContext } from 'react'
import logoBlack from '../assets/images/logos/logo-black.png'
import logoWhite from '../assets/images/logos/logo-white.png'
import { IoIosMenu } from 'react-icons/io'
import ThemeContext from '../contexts/ThemeContext'
import id from '../assets/images/photos/id.jpg'
import ThemeSwitch from './ThemeSwitch'

function TopNavigation() {
    const { darkMode, toggleDarkTheme } = useContext(ThemeContext)
    return (
        <>
            <div className="nav navbar fixed-top bg-light-subtle shadow">
                <button
                    className="btn border-0 p-0 d-block d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling"
                >
                    <IoIosMenu className="border border-primary-subtle fs-1 rounded-3 ms-3 p-1" />
                </button>
                <a
                    href="/"
                    className="d-flex align-items-center link-body-emphasis text-decoration-none col ms-4"
                >
                    <img src={!darkMode ? logoBlack : logoWhite} width={30} height={30} />
                    <span className="ms-2 fs-5">Michaela</span>
                </a>
                <form className="d-flex col" role="search">
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control rounded-start-5" />
                        <button className="btn btn-primary rounded-end-5" type="button">
                            Search
                        </button>
                    </div>
                </form>
                <div className="d-flex col me-4">
                    <div className="dropdown d-flex ms-auto">
                        <a
                            href="#"
                            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle me-4"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src={id}
                                alt=""
                                width="32"
                                height="32"
                                className="rounded-circle me-2"
                            />
                            <strong>Dan</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}
export default TopNavigation
