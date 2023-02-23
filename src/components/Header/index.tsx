import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import ShopBranco from "../../assets/Motors shop.png";
import { IProps } from "../../interfaces";
import { UserContainer } from "../CardAuction/styles";
import SubHeader from "../SubHeader";
import { DivHeader } from "./styles";

const Header: React.FC<IProps> = ({children}:IProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const [isLogged, setIsLogged] = useState(true)

  return (
    <div id="container">
      <DivHeader>
        <div className="navbar-desktop">
          <img src={ShopBranco} />
          <div className="navbar-list">
            <NavItem>
              <NavLink href="#">Carros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Motos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Leilão</NavLink>
            </NavItem>
            {isLogged===true? 
            (
            <div className="logado-user">
              <UserContainer>
                <div className="abrevName">
                  <p>JP</p>
                </div>
                <h5>João Paulo</h5>
              </UserContainer>
            </div>
            ):(
            <>
              <div className="cadastro-login">
                <NavItem>
                  <NavLink href="#">Fazer login</NavLink>
                </NavItem>
                <button className="btn-cadastrar">Cadastrar</button>
              </div>
            </>
            )}
          </div>
        </div>
        <div className="navbar-mobile">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="me-auto">
              <img src={ShopBranco} />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">Carros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Motos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Leilão</NavLink>
                </NavItem>
                {isLogged===true? 
                (
                <div className="logado-user">
                  <UserContainer>
                    <div className="abrevName">
                      <p>JP</p>
                    </div>
                    <h5>João Paulo</h5>
                  </UserContainer>
                </div>
                ):(
                <>
                  <div className="cadastro-login">
                    <NavItem>
                      <NavLink href="#">Fazer login</NavLink>
                    </NavItem>
                    <button className="btn-cadastrar">Cadastrar</button>
                  </div>
                </>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </DivHeader>
      <SubHeader children={children}></SubHeader>
    </div>
  );
};

export default Header;
