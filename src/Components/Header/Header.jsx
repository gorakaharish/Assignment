import "./header.css";
import logo from "../../assets/logo.png";
import img1 from "../../assets/img3.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img1.png";
import img4 from "../../assets/img4.png";
import { useContext } from "react";
import Usercontext from "../../context/Usercontext";

const Header = () => {
  const { addtocart } = useContext(Usercontext);
  return (
    <>
      <div
        className="container-fluid  header_part"
        // style={{ backgroundColor: "#006400", width:"100%" }}
      >
        <div className="row">
          <div className="header">
            <div className=" para top_names">
              <p>Free Shipping on orders above 999/-</p>
            </div>
            <div className=" para">
              <p>Call us on: +91 98768 05120</p>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar  navbar-light bg-white navbar-expand-lg mx-xl-4 mx-lg-3 mx-md-5"
        aria-label="Seventh navbar example"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex flex-row justify-content-center align-items-center"
            href="#"
          >
            <img src={logo} alt="" height={80} />
            <span className="ms-1 nav_header text-capitalize">Chaperone</span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExampleXxl"
            aria-controls="navbarsExampleXxl"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse ms-xl-5 ms-lg-2"
            id="navbarsExampleXxl"
          >
            <ul className="navbar-nav me-auto d-flex flex-lg-row flex-column  justify-content-lg-center align-items-lg-center mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Plants & POts
                </a>
              </li>
              <li className="nav-item custom-dropdown">
                <a className="nav-link" href="#">
                  <select
                    className="select_nav"
                    // aria-label="  example"
                  >
                    <option selected>Tools</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </a>
              </li>
              <li className="nav-item custom-dropdown">
                <a className="nav-link" href="#">
                  <select
                    className="select_nav"
                    // aria-label=" select example"
                  >
                    <option selected>Our Services</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQS
                </a>
              </li>
              <div className="d-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center ms-xl-5">
                <li className="nav-item  ms-xl-5 ps-xl-4">
                  <a className="nav_span d-lg-flex flex-lg-column" href="#">
                    <div className="ms-2 ms-lg-0 ms-md-1">
                      <img
                        src={img1}
                        alt=""
                        height={30}
                        className="m-lg-auto ms-xl-3"
                      />
                      <p className="">My Profile</p>
                    </div>
                  </a>
                </li>
                <li
                  className="nav-item ms-lg-2 "
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <a className="nav_span d-lg-flex flex-lg-column" href="#">
                    <div className="ms-2 ms-lg-0 ms-md-1">
                      <img
                        src={img2}
                        alt=""
                        height={30}
                        className="m-lg-auto"
                      />
                      <p className="ms-lg-2 mt-0">Cart</p>
                    </div>
                  </a>
                  <span className="nav-0">{addtocart.length}</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mb-4 d-flex flex-row justify-content-lg-center justify-content-md-center justify-content-center  align-items-center">
        <div className="row">
          <div className="col-12">
            <div className="form_nav d-flex flex-row justify-content-between align-items-center">
              <form role="search">
                <img src={img4} alt="" height={18} className="" />
                <input
                  className=""
                  type="search"
                  placeholder="Search Plant"
                  aria-label="Search"
                />
              </form>
              <div>
                <img src={img3} alt="" height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
  className="offcanvas offcanvas-end px-3"
  tabIndex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div className="text-end me-3 mt-3">
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  
  
  <div className="offcanvas-header border-bottom border-dark-subtle w-100 d-flex flex-column justify-content-center align-items-center mt-0 pt-0">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">
      Your Cart
    </h5><div className="d-flex flex-row justify-content-center align-items-center">
      <div className=""></div>
      <div>
    </div>
    </div>
  </div>

 
  <div className="offcanvas-body">
    {addtocart.map((item, index) => (
      <div key={index}>
        <div className="d-flex flex-row justify-content-start align-items-center mb-1">
          <div className="image_cart mb-4">
            <img src={item.images} alt="" className="w-50" />
          </div>
          <div className="ms-3">
            <h4 className="mb-0">{item.title}</h4>
            <span className="">Size: Small</span>
            <p className="mb-0">&#11088;&#11088;&#11088;&#11088; (31)</p>
            <p className="text-warning mb-0" style={{ fontSize: "0.7rem" }}>
              <strong className="text-dark" style={{ fontSize: "1rem" }}>
                Rs. 199
              </strong>{" "}
              <span
                className="text-secondary-emphasis text-decoration-line-through mx-2"
                style={{ fontSize: "0.8rem" }}
              >
                Rs.{item.price}
              </span>{" "}
              (20% OFF)
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Delivery by{" "}
              <strong style={{ fontSize: "0.8rem" }}>Tue, Oct 05</strong> | FREE
              Delivery
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <div className="qty p-1 ms-2">
            <p>
              Qty: 1 <i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-2">
            <div className="d-flex flex-row justify-content-center align-items-center remove p-1 mx-1">
              <i className="fa-solid fa-trash-can"></i>
              <span className="mx-1">Remove</span>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center Save p-1 mx-1">
              <i className="fa-regular fa-heart"></i>
              <span className="ms-2">Save For Later</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Header;
