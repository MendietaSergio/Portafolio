import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL } from "../../Constants/apiUrl";
import { Skeleton } from "../Skeleton/Skeleton";
import { CardsProyects } from "./CardsProyects";

export const ContainerProyects = () => {
  const [proyects, setProyects] = useState();
  const [loading, setLoading] = useState(true);
  const [selectBtn, setSelectBtn] = useState("Todos");
  const getProyects = async () => {
    await axios
      .get(URL.main + "api/proyects")
      .then((res) => {
        const { listProyects } = res.data;
        if (selectBtn !== "Todos") {
          setProyects(listProyects.filter((e) => e.type === selectBtn));
        } else {
          setProyects(listProyects);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };
  useEffect(() => {
    setLoading(true);
    getProyects();
  }, [selectBtn]);

  return (
    <div className="row row-proyects-cards">
      <div className="col-12 d-flex justify-content-start my-4 container-btn">
        <div>
          <button
            className={`btn mx-3 ${
              selectBtn === "Todos" ? "btn-info" : "btn-light"
            }`}
            onClick={() => setSelectBtn("Todos")}
          >
            Todos
          </button>
        </div>
        <div>
          <button
            className={`btn mx-3 ${
              selectBtn === "Freelance" ? "btn-info" : "btn-light"
            }`}
            onClick={() => setSelectBtn("Freelance")}
          >
            Freelance
          </button>
        </div>
        <div>
          <button
            className={`btn mx-3 ${
              selectBtn === "Challenge" ? "btn-info" : "btn-light"
            }`}
            onClick={() => setSelectBtn("Challenge")}
          >
            Challenge
          </button>
        </div>
        <div>
          <button
            className={`btn mx-3 ${
              selectBtn === "Practicas" ? "btn-info" : "btn-light"
            }`}
            onClick={() => setSelectBtn("Practicas")}
          >
            Practicas
          </button>
        </div>
      </div>
      {loading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          {proyects.map((proyect) => (
            <div
              key={proyect._id}
              className="col-12 col-md-4 col-lg-3 container-proyects"
            >
              <CardsProyects proyect={proyect} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
