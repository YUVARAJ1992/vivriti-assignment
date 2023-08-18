import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import axios from "axios";
import "../css/style.css";

const LayoutPage = () => {
  const baseURL = "https://dummyjson.com/products";

  const [productList, updateProductList] = useState([]);
  const [productCategory, updateproductCategory] = useState([]);

  useEffect(() => {
    const requestProducts = axios.get(baseURL);
    const requestCategory = axios.get(baseURL + "/categories");

    axios
      .all([requestProducts, requestCategory])
      .then(
        axios.spread((responseProduct, responsecatgory) => {
          updateProductList(responseProduct.data.products);
          updateproductCategory(responsecatgory.data);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const changeCategory = (event) => {
    const url = baseURL + "/category/" + event.target.value;
    axios
      .get(url)
      .then((response) => {
        updateProductList(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const throttledSearch = debounce((searchCategory) => {
    const url = baseURL + "/search?q=" + searchCategory;
    axios
      .get(url)
      .then((response) => {
        updateProductList(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, 1000);

  const handleSearchInput = (event) => {
    throttledSearch(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="logo">
            <span>
              <span className="logo-color">M</span>oBoo
              <span className="logo-color">M</span>
            </span>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="What do you want to buy today?"
              onChange={handleSearchInput}
            />
            <i className="bi bi-search search-icon"></i>
          </div>
          <div className="menus">
            <span>Store</span>
            <span>Account</span>
            <span>Wishlist</span>
            <span>Basket</span>
          </div>
        </div>
        <div className="section">
          <h2>Welcome to MoBooM</h2>
          <span>Search thousands of products, easy and quick delivery</span>
        </div>
        <div className="category">
          <select className="category-section" onChange={changeCategory}>
            <option>Select any product</option>
            {productCategory.map((category, index) => {
              return <option key={index}>{category}</option>;
            })}
          </select>
        </div>
        <div className="products">
          {productList.map((product, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <img
                    src={product.thumbnail}
                    className="product-image"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-name">
                    <h4>{product.title}</h4>
                  </div>
                  <div className="product-desc">
                    <p>{product.description}</p>
                  </div>
                  <div className="product-price">
                    <p>$ {product.price}</p>
                  </div>
                  <div className="product-rating"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-menus">
            <div className="company-info">
              <h4>Company Info</h4>
              <p>About</p>
              <p>Social Responsiblity</p>
              <p>Affilite</p>
              <p>Fashon Blogger</p>
            </div>
            <div className="help-support">
              <h4>Help & Support</h4>
              <p>Shipping Info</p>
              <p>Returns</p>
              <p>How to Order</p>
              <p>How to Track</p>
              <p>Size Chart</p>
            </div>
            <div className="customer-care">
              <h4>Customer Care</h4>
              <p>Contact Us</p>
              <p>Payment</p>
              <p>Bouns Point</p>
              <p>Notices</p>
            </div>
          </div>
          <div className="copyrights">
            <p>2010 - 2022 All Rights Reserved</p>
            <a href="#">Privacy Center</a>
            <a href="#">Privacy & Cookie Policy </a>
            <a href="#">Manage Cookies </a>
            <a href="#">Terms & Conditions </a>
            <a href="#">Company Notice </a>
            <a href="#">Imprint </a>
          </div>
        </div>
        <div className="footer-info">
          <div className="social-platforms">
            <div className="social-links">
              <h4>Socials</h4>
              <div className="space">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-tiktok"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-snapchat"></i>
              </div>
            </div>
            <div className="platform">
              <h4>Platforms</h4>
              <div className="space">
                <i className="bi bi-android2"></i>
                <i className="bi bi-windows"></i>
              </div>
            </div>
          </div>
          <div className="signup">
            <h4 className="m-btm-10">Signup</h4>
            <input type="text" placeholder="Your email" />
            <p>
              By clicking the SUBSCRIBE button, you are agreeing to our Privacy
              & Cookies
            </p>
          </div>
          <div className="card-list">
            <p>We Accept all type of Credit Cards</p>
            <img src="https://cdn-icons-png.flaticon.com/128/147/147258.png" className="card-image" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" className="card-image" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/9334/9334540.png" className="card-image" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/9334/9334616.png" className="card-image" alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LayoutPage;
