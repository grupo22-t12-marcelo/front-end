import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./home.css";

const Home = () => {
    return( 
      <div className="home-div">
        <Header></Header>
        <h1>Home</h1>
        <Footer/>
      </div>
    );
}

export default Home;