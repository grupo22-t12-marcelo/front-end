import { useState } from "react";
import { toast } from "react-toastify";
import {
  Collapse, DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import ShopBranco from "../../assets/Motors shop.png";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { IProps } from "../../interfaces";
import { UserContainer } from "../CardAuction/styles";
import { CircleUser } from "../CircleUser";
import { DivHeader } from "./styles";

const Header: React.FC<IProps> = ({ children }: IProps) => {
  const { isLogged, setIsLogged } = useSessionContext();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { navigate } = useProductContext();
  const { setIsModalEditPerfil, setIsModalEditAddress } = useSessionContext();

  const { userData } = useSessionContext();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let name = "Undefined Undefined";

  if (userData?.name!) {
    name = userData.name;
  }

  return (
    <div id="container">
      <DivHeader>
        <div className="navbar-desktop">
          <img src={ShopBranco} onClick={() => navigate("/")} />

          <div className="navbar-list">
            <NavItem>
              <NavLink href="#Carro">Carros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Moto">Motos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Leilão">Leilão</NavLink>
            </NavItem>
            {isLogged === true && userData.name ? (
              <div className="logado-user">
                <UncontrolledDropdown
                  isOpen={dropdownOpen}
                  onMouseOver={toggle}
                  onMouseOut={toggle}
                >
                  <DropdownToggle caret>
                    <UserContainer>
                      {/* <div className="abrevName">
                    <p>JP</p>
                  </div>
                  <h5>João Paulo</h5> */}
                      <CircleUser />
                      <h5>{name}</h5>
                    </UserContainer>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setIsModalEditPerfil(true)}>
                      Editar Perfil
                    </DropdownItem>
                    <DropdownItem onClick={() => setIsModalEditAddress(true)}>
                      Editar Endereço
                    </DropdownItem>
                    {userData.type_account === "Anunciante" && (
                      <DropdownItem onClick={() => navigate(`/my_vehicles/`)}>
                        Meus Anúncios
                      </DropdownItem>
                    )}
                    <DropdownItem
                      onClick={() => {
                        localStorage.clear();
                        setIsLogged(false);
                        toast.success("Saindo...", {
                          position: "top-right",
                          autoClose: 1500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                        setTimeout(() => {
                          navigate("/");
                        }, 2500);
                      }}
                    >
                      Sair
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            ) : (
              <>
                <div className="cadastro-login">
                  <NavItem>
                    <NavLink onClick={() => navigate("/login")}>
                      Fazer login
                    </NavLink>
                  </NavItem>
                  <button
                    className="btn-cadastrar"
                    onClick={() => navigate("/register")}
                  >
                    Cadastrar
                  </button>
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
                  <NavLink href="#Carro">Carros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#Moto">Motos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#Leilão">Leilão</NavLink>
                </NavItem>
                {isLogged === true ? (
                  <div className="logado-user">
                    <UncontrolledDropdown
                      isOpen={dropdownOpen}
                      onClick={toggle}
                    >
                      <DropdownToggle caret>
                        <UserContainer>
                          {/* <div className="abrevName">
                    <p>JP</p>
                  </div>
                  <h5>João Paulo</h5> */}
                          <CircleUser />
                          <h5>{name}</h5>
                        </UserContainer>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => setIsModalEditPerfil(true)}
                        >
                          Editar Perfil
                        </DropdownItem>

                        <DropdownItem
                          onClick={() => setIsModalEditAddress(true)}
                        >
                          Editar Endereço
                        </DropdownItem>
                        {userData.type_account === "Anunciante" && (
                          <DropdownItem
                            onClick={() => navigate(`/my_vehicles/`)}
                          >
                            Meus Anúncios
                          </DropdownItem>
                        )}
                        <DropdownItem
                          onClick={() => {
                            localStorage.clear();
                            setIsLogged(false);
                            toast.success("Saindo...", {
                              position: "top-right",
                              autoClose: 1500,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            });
                            setTimeout(() => {
                              navigate("/");
                            }, 2500);
                          }}
                        >
                          Sair
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
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
