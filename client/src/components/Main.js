import React from "react";

import "../scss/custom.scss";
function Main() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row m-3 p-3">
          <div className="col">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={require("./assets/primary_series.jpg")}
                    class="d-block mx-auto w-50"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={require("./assets/ashtanga-yoga.jpg")}
                    class="d-block mx-auto w-75"
                    alt="logo"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={require("./assets/ashtanga-yoga.jpg")}
                    class="d-block mx-auto w-75"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row m-3 p-3">
          <div className="col-lg-6">
            <div class="card w-75 d-block mx-auto">
              <img
                src={require("./assets/ashtanga-yoga.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card w-75 d-block mx-auto">
              <img
                src={require("./assets/ashtanga-yoga.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
