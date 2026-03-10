import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

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
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Pizza(props) {
  return (
    <li
      className={`pizza ${props.pizzaobj.soldOut === true ? "sold-out" : ""}`}
    >
      <img src={props.pizzaobj.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>
        {props.pizzaobj.soldOut ? `SOLD OUT` : props.pizzaobj.price}
      </div>
    </li>
  );
}

function Menu() {
  let pizzas = pizzaData;
  // pizzas = [];
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numpizzas > 0 ? (
        <React.Fragment key="test">
          <p>
            Authentic Italian Cuisine. 6 createive dishes to choose from. All
            from our stone oven , all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <div>
          <p>No Pizzas Today</p>
        </div>
      )}
    </main>
  );
}
function Footer() {
  const openHour = 12;
  const closeHour = 20;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>We're Closed </p>
        </div>
      )}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We're Open Until {props.closeHour}:00 Come & visit Us Or Order ONline
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
