import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = ({ addToCart }) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [selectedItem, setSelectedItem] = useState("Category");

  const categoryData = [
    {
      title: "Category",
      icon: "🌟",
    },
    {
      title: "Electronics",
      icon: "📺",
    },
    {
      title: "Fashion",
      icon: "👗",
    },
    {
      title: "Home Appliance",
      icon: "🥤",
    },
    {
      title: "Furniture",
      icon: "🪑",
    },
    {
      title: "Mobile",
      icon: "📱",
    },
  ];

  const allProductItems = [
    {
        "category": "Electronics",
        "image": "/electro_1.jpeg",
        "name": "Laptop",
        "price": 56500,
        "description": "Description of Laptop"
    },
    {
        "category": "Electronics",
        "image": "/electro_2.jpeg",
        "name": "DSLR Camera",
        "price": 85393,
        "description": "Description of DSLR Camera"
    },
    {
        "category": "Electronics",
        "image": "/electro_3.jpeg",
        "name": "Soundbar",
        "price": 4599,
        "description": "Description of Soundbar"
    },
    {
        "category": "Electronics",
        "image": "/electro_4.jpeg",
        "name": "Drone Cam",
        "price": 154999,
        "description": "Description of Drone Cam"
    },
    {
        "category": "Electronics",
        "image": "/electro_5.jpeg",
        "name": "Headphone",
        "price": 2999,
        "description": "Description of Headphone"
    },
    {
        "category": "Fashion",
        "image": "/fashion_1.jpeg",
        "name": "Shoes",
        "price": 5365,
        "description": "Description of Shoes"
    },
    {
        "category": "Fashion",
        "image": "/fashion_2.jpeg",
        "name": "Jeans",
        "price": 2163,
        "description": "Description of Jeans"
    },
    {
        "category": "Fashion",
        "image": "/fashion_3.jpeg",
        "name": "Watch",
        "price": 2199,
        "description": "Description of Watch"
    },
    {
        "category": "Fashion",
        "image": "/fashion_4.jpeg",
        "name": "Tshirt",
        "price": 1500,
        "description": "Description of Tshirt"
    },
    {
        "category": "Fashion",
        "image": "/fashion_5.jpeg",
        "name": "Goggle",
        "price": 999,
        "description": "Description of Goggle"
    },
    {
        "category": "Furniture",
        "image": "/furnaniture_1.jpeg",
        "name": "Bed",
        "price": 25600,
        "description": "Description of Bed"
    },
    {
        "category": "Furniture",
        "image": "/furnaniture_2.jpeg",
        "name": "Table",
        "price": 4500,
        "description": "Description of Table"
    },
    {
        "category": "Furniture",
        "image": "/furnaniture_3.jpeg",
        "name": "Chair",
        "price": 11475,
        "description": "Description of Chair"
    },
    {
        "category": "Furniture",
        "image": "/furnaniture_4.jpeg",
        "name": "Almira",
        "price": 15400,
        "description": "Description of Almira"
    },
    {
        "category": "Furniture",
        "image": "/furnaniture_5.jpeg",
        "name": "Mirror",
        "price": 5000,
        "description": "Description of Mirror"
    },
    {
        "category": "Home Appliances",
        "image": "/home_1.jpeg",
        "name": "Oven",
        "price": 6500,
        "description": "Description of Oven"
    },
    {
        "category": "Home Appliances",
        "image": "/home_2.jpeg",
        "name": "Juicer",
        "price": 3500,
        "description": "Description of Juicer"
    },
    {
        "category": "Home Appliances",
        "image": "/home_3.jpeg",
        "name": "Washing Machine",
        "price": 3,
        "description": "Description of Washing Machine"
    },
    {
        "category": "Home Appliances",
        "image": "/home_4.jpeg",
        "name": "TV",
        "price": 3,
        "description": "Description of TV"
    },
    {
        "category": "Home Appliances",
        "image": "/home_5.jpeg",
        "name": "Refrigerator",
        "price": 3,
        "description": "Description of Refrigerator"
    },
    {
        "category": "Mobile",
        "image": "/mobile_1.jpeg",
        "name": "Mobile",
        "price": 4,
        "description": "Description of Mobile"
    },
    {
        "category": "Mobile",
        "image": "/mobile_2.jpeg",
        "name": "Mobile",
        "price": 3,
        "description": "Description of Mobile"
    },
    {
        "category": "Mobile",
        "image": "/mobile_3.jpeg",
        "name": "Mobile",
        "price": 3,
        "description": "Description of Mobile"
    },
    {
        "category": "Mobile",
        "image": "/mobile_4.jpeg",
        "name": "Mobile",
        "price": 3,
        "description": "Description of Mobile"
    },
    {
        "category": "Mobile",
        "image": "/mobile_5.jpeg",
        "name": "Mobile",
        "price": 3,
        "description": "Description of Mobile"
    }
]


  const productItems = allProductItems?.filter((product) => {
    if (selectedItem === "Category") {
      return true;
    } else {
      return (
        product.category.replace(/[^a-zA-Z ]/g, "").trim() ===
        selectedItem.trim()
      );
    }
  });

  const handleAddToCart = (productName) => {
    console.log("Selected Product: ", productName);
    setSelectedItem(productName);
  };

  const addToCartHandler = (product)=> {
    
    addToCart(product);
  }

  return (
    <>
      <div className="container">
        <div className="category-container">
          <div className="user-dropdown">
            <div className="dropdown">
              <a
                className="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {categoryData?.map(
                  (val, index) =>
                    val.title === selectedItem && val.icon + " " + selectedItem
                )}
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {categoryData?.map((val, index) => (
                  <li key={index} onClick={() => handleAddToCart(val?.title)}>
                    <a className="dropdown-item" href="#">
                      {val?.icon + " " + val?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="user-name">
              {isAuthenticated && (
                <label className="welcome-profile text-warning">
                  Welcome 🙌 <font color="skyblue"> {user.name}</font>
                </label>
              )}
            </div>
          </div>
        </div>

        {isAuthenticated ? (
          <section className="products">
            {productItems?.map((val, index) => (
              <div className="product-item" key={index}>
                <img src={val.image} alt={val.name} />
                <h3>{val.name}</h3>
                <p>Price {val.price}</p>
                <button className="add-to-cart" onClick={() => addToCartHandler(val)}>Add to Cart</button>
              </div>
            ))}
          </section>
        ) : (
          <section className="products">
            {productItems?.map((val, index) => (
              <div className="product-item" key={index}>
                <img src={val.image} alt={val.name} />
                <h3>{val.name}</h3>
                <p>{val.description}</p>
                <p>Price {val.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => loginWithRedirect()}>
                  Add to Cart
                </button>
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
