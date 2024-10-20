import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"#F0FFE5"}}>
        <footer className="py-5">
          <div className="row">
            <div className="col-md-5 col-lg-3  mb-2 ms-xl-2">
              <form>
                <h5 className="fw-bold">SUBSCRIBE TO OUR </h5>
                <p className="fw-bold">NEWSLETTER</p>
                <p className="footer_para">
                  Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                  aut necesbus enim
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="mt-3">
                  <button className="btn btn-footer rounded-pill" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-2 ms-xl-5">
              <h5 className="fw-bolder">About us</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Our Story
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Blogs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Help & Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-2">
              <h5 className="fw-bolder">our services</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Book Maali
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Plant Day Care
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Rent Plants
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Plants & Pots
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Gardening Tools
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-5 col-lg-2 mb-2 mt-3  mt-lg-0 ms-lg-3 ms-md-3">
              <h5 className="fw-bolder">useful links</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    My Account
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Orders & Returns
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Track Order
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Return, Refund & Replacement Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-5 col-lg-2 mb-2 mt-3  mt-lg-0">
              <h5 className="fw-bolder">GET IN TOUCH</h5>
              <ul className="nav flex-column mt-lg-3">
               <li className="nav-item mb-xl-2 mb-lg-0 mb-md-4">
               <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Address: F-262, First Floor, Sushant Lok Phase-III,
                    Sector-57, Gurgaon, Haryana, India 122003
                  </a>
               </li>
                <li className="nav-item mb-xl-2 mb-lg-0 mb-md-2">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Call: +919958287272
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link-2  p-0 text-body-secondary">
                    Email: care@chaperoneplants.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-between ms-2 mb-4">
            <h1 className="footer_heading">CHAPERONE</h1>
            <p className="footer_para">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
            <div>
              <h5 className="footer-seconf-heading">Follow us on</h5>
              <ul className="list-unstyled d-flex i">
              <i className="bi bi-instagram  i"></i>
              <i className="bi bi-facebook ms-4  i"></i>
              <i className="bi bi-threads-fill ms-4 i"></i>
              <i className="bi bi-youtube ms-4 i"></i>
              <i className="bi bi-linkedin ms-4 i"></i>
              </ul>
            </div>
          </div>

          <div className=" border-top">
          <p className="footer_para mt-3 ms-2">© 2023, chaperone.com All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
