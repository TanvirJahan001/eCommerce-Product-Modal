# eCommerce Product Modal

This is a simple React component that displays a product and shopping cart modal. the product page allows users to select a color and size for the product, manage product quantity, mark items as "loved" using a heart icon, display images based on the selected color, and view pricing details with a discount. The product description provides more information about the product and its specifications.

Additionally, Cart Page shows the list of items added to the cart, along with their details like color, size, quantity, and price. It provides options to close the modal, continue shopping, and proceed to checkout.

## Features

### Product Page Features:
- **Product Selection**: Users can select a color and size for the product.
- **Quantity Control**: Increase or decrease the quantity of the product.
- **Wishlist Feature**: Mark products as "loved" with a heart icon.
- **Image Carousel**: Display product images based on the selected color.
- **Pricing**: Display the original price and the discounted price.
- **Description**: Provide a description of the product and its specifications.
- **Add to Cart**: Allows users to add the selected product with chosen color, size, and quantity to the cart.
- **Cart Count**: Displays the total number of items in the cart.
- **Checkout Button**: Initiates the checkout process with the current contents of the cart.
- **Cart Modal**: Display the cart items in a modal with options to close, remove items, and proceed to checkout.

### Cart Page Features:
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

You can view a live demo of this project at [eCommerce Cart Modal](https://e-commerce-product-modal.vercel.app/).


## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/TanvirJahan001/eCommerce-Product-Modal.git

2. Navigate to the project directory:
   ```bash
   cd eCommerce-Product-Modal
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
