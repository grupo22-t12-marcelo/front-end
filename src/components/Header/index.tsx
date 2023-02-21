import { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import ShopBranco from "../../assets/Motors shop.png";
import SubHeader from "../SubHeader";
import { DivHeader } from "./styles";

const Header = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>

        <DivHeader>
            <div className="navbar-desktop">
                <img src={ShopBranco}/>            
                <div className="navbar-list">
                    <NavItem>
                        <NavLink href="#">
                            Carros
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Motos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Leilão
                        </NavLink>
                    </NavItem>
                    <div className="cadastro-login">
                        <NavItem>
                            <NavLink href="#">
                                Fazer login
                            </NavLink>
                        </NavItem>
                        <button className="btn-cadastrar">Cadastrar</button>
                    </div>
                </div>   
            </div>
            <div className="navbar-mobile">
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="me-auto">
                        <img src={ShopBranco}/>            
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">
                                Carros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Motos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Leilão
                            </NavLink>
                        </NavItem>
                        <div className="cadastro-login">
                            <NavItem>
                                <NavLink href="#">
                                    Fazer login
                                </NavLink>
                            </NavItem>
                            <button className="btn-cadastrar">Cadastrar</button>
                        </div>
                    </Nav>
                    </Collapse>
                </Navbar>
                {/* <button className="btn-navbar btn-open">
                    <img src={Bars} alt="" />
                </button>
                <button className="btn-navbar btn-close">
                    <img src={Xmark} alt="" />
                </button>*/}
            </div> 
        </DivHeader>
        <SubHeader></SubHeader>
        </div>
    );
}

export default Header