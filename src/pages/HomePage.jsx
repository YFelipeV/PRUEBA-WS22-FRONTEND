import main from "../assets/img/main-logo.png";
import pereira from "../assets/img/pereira.jpg";
import catedral from "../assets/img/catedral-manizales.jpg";
import balboa from "../assets/img/balboa.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLugares } from "../data/Lugares";
import ItemHome from "../components/HomePage/ItemHome";

function HomePage() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getLugares();
      setdata(response);
    })();
  }, []);

  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={main} />
            </a>
          </div>
        </div>
      </header>

      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h2 className="jumbotron-heading">
              Lugares mágicos de un paraiso llamado Colombia
            </h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid quae, numquam, beatae aspernatur exercitationem
            </p>
            <Link to={"/login"} className="btn btn-info my-2">
              Inicie sesión
            </Link>
            <Link to={"/registro"} className="btn btn-success my-2">
              Regístrese
            </Link>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {data.map((datos, index) => (
                <ItemHome key={index} datos={datos} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="text-muted ">
        <div className="container ">
          <p>&copy; COLOMBIA.CO</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
