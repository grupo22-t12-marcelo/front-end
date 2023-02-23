import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import ShopBranco from "../../assets/Motors shop.png";
import { useProductContext } from "../../contexts/productContext";
import { IProps } from "../../interfaces";
import { UserContainer } from "../CardAuction/styles";
import SubHeader from "../SubHeader";
import { DivHeader } from "./styles";
import { CircleUser } from "../CircleUser";

const Header: React.FC<IProps> = ({ children }: IProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const { userLogged } = useProductContext();
  const [isLogged, setIsLogged] = useState(true);

  const navigate = useNavigate();

  return (
    <div id="container">
      <DivHeader>
        <div className="navbar-desktop">
          <img src={ShopBranco} onClick={() => navigate("/home")} />
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
            {isLogged === true && userLogged !== "" ? (
              <div className="logado-user">
                <UserContainer>
                  {/* <div className="abrevName">
                    <p>JP</p>
                  </div>
                  <h5>João Paulo</h5> */}
                  <CircleUser nameUser={userLogged} />
                  <h5>{userLogged}</h5>
                </UserContainer>
              </div>
            ) : (
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
              <img src={ShopBranco} onClick={() => navigate("/home")} />
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
                {isLogged === true ? (
                  <div className="logado-user">
                    <UserContainer>
                      <div className="abrevName">
                        <p>JP</p>
                      </div>
                      <h5>João Paulo</h5>
                    </UserContainer>
                  </div>
                ) : (
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

      {/* <SubHeader children={children}></SubHeader> */}
    </div>
  );
};

export default Header;
