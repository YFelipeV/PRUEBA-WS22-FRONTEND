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
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <img src={main} />
            </a>
          </div>
        </div>
      </header>

      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h2 class="jumbotron-heading">
              Lugares mágicos de un paraiso llamado Colombia
            </h2>
            <p class="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid quae, numquam, beatae aspernatur exercitationem
            </p>
            <Link to={"/login"} class="btn btn-info my-2">
              Inicie sesión
            </Link>
            <Link to={"/registro"} class="btn btn-success my-2">
              Regístrese
            </Link>
          </div>
        </section>

        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              {data.map((datos, index) => (
                <ItemHome key={index} datos={datos} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer class="text-muted ">
        <div class="container ">
          <p>&copy; COLOMBIA.CO</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
