# eCommerce Cart Modal

This is a simple React component that displays a shopping cart modal. It shows the list of items added to the cart, along with their details like color, size, quantity, and price. It provides options to close the modal, continue shopping, and proceed to checkout.

## Features

- **Displays cart items with details**: Show item name, color, size, quantity, and price.
- **Calculates total quantity and price**: Automatically sums up the quantity and total price of items in the cart.
- **Cart Management**: Options to remove items, close the modal, continue shopping, and checkout.
- **Responsive Design**: Adjusts layout for different screen sizes.

## Technologies Used

- **Frontend**:
  - **React**: For building the user interface and managing the state.
  - **Tailwind CSS**: For styling and responsive design.
  - **JavaScript**: Core language for the application logic.
  - **SVG Icons**: For UI elements like close button.

- **Deployment**:
  - **Vercel**: Hosting the live demo of the project.

## Live Demo

You can view a live demo of this project at [eCommerce Cart Modal](https://ecommerce-card-project.vercel.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-cart-modal.git

2. Navigate to the project directory:
   ```bash
   cd ecommerce-cart-modal
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

To use the `CartModal` component, simply import it into your React project and pass the `cart` state and `onClose` function as props. You can also pass a `removeItem` function to handle item removal from the cart.

## Example

```javascript
import React, { useState } from "react";
import CartModal from "./CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClose = () => setIsCartOpen(false);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <button onClick={() => setIsCartOpen(true)}>View Cart</button>
      {isCartOpen && <CartModal cart={cart} onClose={handleClose} removeItem={removeItem} />}
    </div>
  );
}

export default App;
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
