import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../CategoryTabs/CategoryTabs.css";
import "../CategoryTabs/responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /////calling FontAwesomeIcon for cart icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import veg from "../images/veg.PNG"; ////////imported image for veg
import nonVeg from "../images/nonVeg.png"; ////////imported image for non veg
import axios from "axios"; ////////axios for fetching api data

const CategoryTabs = () => {
  /////setting states
  const [tableList, setTableList] = useState([]);
  const [resNameArray, setResNameArray] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  ///////////////// calling API ////////////////////
  useEffect(() => {
    const TableMenuApi = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89"
        );
        // console.log("...!",response.data.data[0].table_menu_list);
        const resNameArray = response.data.data[0].restaurant_name;
        setResNameArray(resNameArray);
        const tableList = response.data.data[0].table_menu_list;
        setTableList(tableList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    TableMenuApi();
  }, []);

  ///////// adding function for cart count ///////////
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="container bg-black">
      <div className="header-container">
        <div className="container header-wrapper">
          <div className="header-left">
            <h4>{resNameArray}</h4>
          </div>
          <div className="header-right">
            <button className="my-orders-button">My Orders</button>
            <div className="cart-container">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              <span className="cart-count">{cartCount}</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs className="react-tabs__tab--selected">
        <TabList>
          {/* mapping menu category list data */}
          {tableList.map((menu, index) => (
            <Tab key={index}>{menu.menu_category}</Tab>
          ))}
        </TabList>
        {/* mapping table category list data */}
        {tableList.map((menu, index) => (
          <TabPanel key={index}>
            <div className="categoryList-wrper">
              {menu.category_dishes.map((dish, index) => (
                <div className="category-list" key={index}>
                  <div className="category-details">
                    <div className="main-head">
                      <img
                        src={dish.dish_Type === 1 ? nonVeg : veg}
                        alt="Veg"
                        className="vegorNon"
                      />{" "}
                      {dish.dish_name}
                    </div>
                    <div className="subtext">{dish.dish_price}</div>
                    <div className="paraText">{dish.dish_description}</div>
                    <button className="add-btn">
                      <span className="add-btn" onClick={handleRemoveFromCart}>
                        -
                      </span>
                      {cartCount}
                      <span className="px-3" onClick={handleAddToCart}>
                        +
                      </span>
                    </button>
                    <div className="para-subtext">
                      {dish.dish_Availability === true
                        ? "Customization available"
                        : "Not available"}
                    </div>
                  </div>
                  <div className="categoryImg">
                    <span className="">{dish.dish_calories} calories</span>
                    <span>
                      <img
                        src={dish.dish_image}
                        alt="dishImg"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTabs;