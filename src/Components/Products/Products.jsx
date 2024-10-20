import { useContext, useEffect, useState } from "react";
import "./Products.css";
import Product from "../../assets/product";
import { useNavigate } from "react-router-dom";
import Usercontext from "../../context/Usercontext";

const Products = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const { setdata, data, addtocart, Setaddtocart } = useContext(Usercontext);

  const handleLikeToggle = (index) => {
    if (likedProducts.includes(index)) {
      setLikedProducts(likedProducts.filter((item) => item !== index));
    } else {
      setLikedProducts([...likedProducts, index]);
    }
  };

  const handleViewMore = () => {
    setVisibleProducts(Product.length);
  };

  const senddata = (item) => {
    setdata(item);
    // console.log(data, "context value");
    navigate("/modal");
  };

  const sendcard = (item) => {
    Setaddtocart([...addtocart, item]);
    // console.log(addtocart, "item");
  };

  useEffect(() => {
    const initialQuantities = Product.reduce((acc, product, index) => {
      acc[index] = 0;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, []);
  const handleQuantityChange = (index, action) => {
    setQuantities((prevQuantities) => {
      const newQuantity =
        action === "increase"
          ? prevQuantities[index] + 1
          : Math.max(prevQuantities[index] - 1, 0);

      return {
        ...prevQuantities,
        [index]: newQuantity,
      };
    });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <h6 className="mx-2 hom_300">300 Products</h6>
          <button className="text-uppercase btn-vi2 mx-2">
            sort by <i className="bi bi-chevron-down"></i>
          </button>
        </div>
        <div className="row d-flex flex-wrap">
          {Product.slice(0, visibleProducts).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4  col-6">
              <div className="mx-2 my-3">
                <div className="border border-1 image_border position-relative">
                  <img
                    src={item.images}
                    alt=""
                    className="w-100 p-4 img_home"
                  />

                  <i
                    className={`fa-regular fa-heart heart-icon ${
                      likedProducts.includes(index)
                        ? "fa-solid fa-heart heart-liked"
                        : ""
                    }`}
                    onClick={() => handleLikeToggle(index)}
                  ></i>

                  <button className="btn-vi" onClick={() => senddata(item)}>
                    View Product
                  </button>
                </div>
                <div className="my-3">
                  <h6 className="title">{item.title}</h6>
                  <p className="para_home mb-1">{item.descreption}</p>
                  <p className="mb-1">
                    &#11088;&#11088;&#11088;&#11088;
                    <span className="ms-2 rating">4.9</span>
                  </p>
                  <p className="mt-0">
                    <span className="text-decoration-line-through me-2 price-1">
                      &#8377; 359
                    </span>
                    <span className="price-2">&#8377; {item.price}</span>
                  </p>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <button
                      className="add-to-cart rounded-3"
                      onClick={() => sendcard(item)}
                    >
                    
                      <i
                        className="fa-solid fa-minus"
                        onClick={() => handleQuantityChange(index, "decrease")}
                      ></i>
                      {quantities[index] > 0 ? quantities[index] : "Add to cart"}
                      <i
                        className="fa-solid fa-plus"
                        onClick={() => handleQuantityChange(index, "increase")}
                      ></i>
                    </button>
                    <button className="btn btn-outline-success by-ren">
                      Buy on Rent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProducts < Product.length && (
          <div className="text-center my-3">
            <button
              className="btn-vimore rounded-pill"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
