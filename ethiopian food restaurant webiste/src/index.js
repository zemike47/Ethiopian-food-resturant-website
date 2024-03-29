import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const foodMenu = [
  {
    name: "Asa",
    ingredients: "Bread with Ethiopian spices and herbs",
    price: 150,
    photoName: "Asa.jpg",
    soldOut: false,
  },
  {
    name: "beyaynetu",
    ingredients: "Injera with lentils, vegetables, and spices",
    price: 100,
    photoName: "Beyaynetu.jpg",
    soldOut: false,
  },
  {
    name: "Doro wot",
    ingredients: "Chicken stew with berbere sauce and boiled eggs",
    price: 170,
    photoName: "doro wot.jpg",
    soldOut: false,
  },
  {
    name: "Gored gored",
    ingredients: "Raw beef marinated in spices and butter",
    price: 200,
    photoName: "gored gored.jpg",
    soldOut: false,
  },
  {
    name: "Key wot",
    ingredients: "Spicy beef stew with berbere sauce",
    price: 150,
    photoName: "key wot.jpg",
    soldOut: true,
  },
  {
    name: "Kitfo",
    ingredients: "Minced raw beef seasoned with spices and herbs",
    price: 250,
    photoName: "kitfo.jpg",
    soldOut: false,
  },
  {
    name: "Kolo",
    ingredients: "Roasted barley kernels seasoned with spices",
    price: 70,
    photoName: "kolo.jpg",
    soldOut: false,
  },
  {
    name: "Pasta be atkilt",
    ingredients: "Pasta with mixed vegetables",
    price: 90,
    photoName: "pasta be atkilt.jpg",
    soldOut: false,
  },
  {
    name: "Sambusas",
    ingredients: "Pastries filled with lentils, vegetables, and spices",
    price: 25,
    photoName: "sambusas.jpg",
    soldOut: false,
  },
  {
    name: "Shiro",
    ingredients: "Chickpea flour stew with spices",
    price: 65,
    photoName: "shiro.jpg",
    soldOut: false,
  },
  {
    name: "Tej",
    ingredients: "Traditional Ethiopian honey wine",
    price: 40,
    photoName: "Tej.jpg",
    soldOut: false,
  },
  {
    name: "Ti'hlo",
    ingredients: "Barley dough balls served with sauce",
    price: 110,
    photoName: "Ti'hlo.jpg",
    soldOut: false,
  },
  {
    name: "Tibs",
    ingredients: "Sauteed meat with vegetables and spices",
    price: 170,
    photoName: "Tibs.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>Welcome to Ethio-Restaurant</h1>
    </header>
  );
}

function Menu() {
  const foods = foodMenu;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h1> our menu </h1>

      {numFoods > 0 ? (
        <React.Fragment>
          <p>
            Authentic Ethiopian cuisine.13 best dishes to choose from. All from
            our stone oven,all orgainc, all delicious.
          </p>
          <ul className="pizzas">
            {foodMenu.map((food) => (
              <Food foodObj={food} key={food.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>we're stil working on our menu. please come back later.</p>
      )}
    </main>
  );
}

function Food({ foodObj }) {
  return (
    <li className={`pizza ${foodObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={foodObj.photoName}
        alt={foodObj.name}
        style={{ width: "250px", height: "150px" }}
      />
      <div>
        <h3>{foodObj.name}</h3>
        <p>{foodObj.ingredients}</p>
        <span> {foodObj.soldOut ? "SOLD OUT" : foodObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>we're closed</p>}
    </footer>
  );
  //return React.createElement("footer", null, "we're currently open!");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        we're open until {props.closeHour} : 00 come vist us or order online
      </p>

      <button className="btn">order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
