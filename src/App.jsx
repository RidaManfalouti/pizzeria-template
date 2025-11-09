import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div className="app-container">
      <h1>Welcome to RIDA MANFALOUTI Pizzeria</h1>
      <div className="pizzas-container">
        <Pizza
          name="Margherita"
          description="Classic pizza with tomatoes, mozzarella, and basil."
          image="/pizzas/image.png"
        />
        <Pizza
          name="Pepperoni"
          description="Topped with pepperoni slices and cheese."
          image="/pizzas/image.png"
        />
        <Pizza
          name="Veggie"
          description="Loaded with bell peppers, onions, mushrooms, and olives."
          image="/pizzas/image.png"
        />
        <Pizza
          name="Hawaiian"
          description="Delicious combination of ham and pineapple."
          image="/pizzas/image.png"
        />
      </div>
    </div>
  );
};

const container = document.getElementById(`root`);
const root = createRoot(container);
root.render(<App />);
