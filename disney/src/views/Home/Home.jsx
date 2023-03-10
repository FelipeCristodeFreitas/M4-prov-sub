import PaletaLista from "components/PaletaLista/PaletaLista";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
