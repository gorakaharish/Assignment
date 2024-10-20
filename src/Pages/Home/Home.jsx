import { useState } from "react";
import Slideer from "../../Components/Slider/Slideer";
import Products from "../../Components/Products/Products";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  
  const [filters, setFilters] = useState({
    typeOfPlants: false,
    price: false,
    nursery: false,
    location: false,
    indoorOutdoor: false,
    maintenance: false,
    plantSize: false,
    waterSchedule: false,
    color: false,
    seasonal: false,
    lightEfficient: false,
  });

  
  const toggleFilter = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName], 
    }));
  };

  return (
    <>
    <Header />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="top_section my-3">
            <div>
              <button className="btn-home mx-2">Plants</button>
              <button className="btn-home-2 mx-2">Post</button>
            </div>
            <p className="home-para mx-2 my-3">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
          </div>
          <Slideer />
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-3 col-lg-3 ms-lg-3 d-none d-lg-block">
            <div
              className="p-3"
              style={{ backgroundColor: "#F0FFE5", color: "#6E6E6E" }}
            >
              <div className="d-flex flex-row justify-content-between align-items-center border-bottom">
                <p className="my-2">Filter</p>
                <p className="my-2">CLEAR ALL</p>
              </div>

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("typeOfPlants")}
              >
                <p className="my-2">Type of Plants</p>
                <i
                  className={`bi ${
                    filters.typeOfPlants ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
              {filters.typeOfPlants && (
                <div className="filter-options">
                  {" "}
                  Options for Type of Plants
                </div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("price")}
              >
                <p className="my-2">Price</p>
                <i
                  className={`bi ${filters.price ? "bi-dash" : "bi-plus"}`}
                ></i>
              </div>
              {filters.price && (
                <div className="filter-options"> Options for Price </div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("nursery")}
              >
                <p className="my-2">Nursery</p>
                <i
                  className={`bi ${filters.nursery ? "bi-dash" : "bi-plus"}`}
                ></i>
              </div>
              {filters.nursery && (
                <div className="filter-options"> Options for Nursery</div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("location")}
              >
                <p className="my-2">Ideal Plants Location</p>
                <i
                  className={`bi ${filters.location ? "bi-dash" : "bi-plus"}`}
                ></i>
              </div>
              {filters.location && (
                <div className="filter-options"> Options for Location </div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("indoorOutdoor")}
              >
                <p className="my-2">Indoor/Outdoor</p>
                <i
                  className={`bi ${
                    filters.indoorOutdoor ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
              {filters.indoorOutdoor && (
                <div className="filter-options">
                  {" "}
                  Options for Indoor/Outdoor
                </div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("maintenance")}
              >
                <p className="my-2">Maintenance</p>
                <i
                  className={`bi ${
                    filters.maintenance ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
              {filters.maintenance && (
                <div className="filter-options"> Options for Maintenance </div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("plantSize")}
              >
                <p className="my-2">Plant Size</p>
                <i
                  className={`bi ${filters.plantSize ? "bi-dash" : "bi-plus"}`}
                ></i>
              </div>
              {filters.plantSize && (
                <div className="filter-options"> Options for Plant Size</div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("waterSchedule")}
              >
                <p className="my-2">Water Schedule</p>
                <i
                  className={`bi ${
                    filters.waterSchedule ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
              {filters.waterSchedule && (
                <div className="filter-options">
                  {" "}
                  Options for Water Schedule
                </div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("color")}
              >
                <p className="my-2">Color</p>
                <i
                  className={`bi ${filters.color ? "bi-dash" : "bi-plus"}`}
                ></i>
              </div>
              {filters.color && (
                <div className="filter-options"> Options for Color</div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("seasonal")}
              >
                <p className="my-2">Seasonal</p>
                <i
                  className={`bi ${filters.seasonal ? "bi-dash" : "bi-plus"}`}
                ></i>
              </div>
              {filters.seasonal && (
                <div className="filter-options"> Options for Seasonal</div>
              )}

              <div
                className="d-flex flex-row justify-content-between align-items-center border-bottom"
                onClick={() => toggleFilter("lightEfficient")}
              >
                <p className="my-2">Light Efficient</p>
                <i
                  className={`bi ${
                    filters.lightEfficient ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
              {filters.lightEfficient && (
                <div className="filter-options">
                  {" "}
                  Options for Light Efficient{" "}
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-12 d-flex flex-lg-wrap flex-md-wrap ms-lg-5">
            <Products />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
