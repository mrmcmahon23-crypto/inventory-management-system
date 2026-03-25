class Product {
  // Creates a product with name, price, and quantity
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Returns the total value of this product in stock
  getTotalValue() {
    return this.price * this.quantity;
  }

  // Returns product details as a string
  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }

  // Applies a discount to all products in the array
  static applyDiscount(products, discount) {
    for (let i = 0; i < products.length; i++) {
      products[i].price = products[i].price * (1 - discount);
    }
  }
}

class PerishableProduct extends Product {
  // Creates a perishable product with expiration date
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  // Returns perishable product details as a string
  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

class Store {
  // Creates an empty inventory
  constructor() {
    this.inventory = [];
  }

  // Adds a product to the inventory
  addProduct(product) {
    this.inventory.push(product);
  }

  // Calculates the total value of all inventory items
  getInventoryValue() {
    let total = 0;

    for (let i = 0; i < this.inventory.length; i++) {
      total += this.inventory[i].getTotalValue();
    }

    return total;
  }

  // Finds a product by name
  findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name.toLowerCase() === name.toLowerCase()) {
        return this.inventory[i];
      }
    }

    return null;
  }
}

// Creates sample products
const product1 = new Product("Apple", 2.50, 50);
const product2 = new Product("Bread", 3.00, 20);
const product3 = new Product("Rice", 10.00, 15);
const product4 = new PerishableProduct("Milk", 4.50, 10, "2026-04-01");
const product5 = new PerishableProduct("Yogurt", 2.75, 25, "2026-03-30");

// Creates a store
const store = new Store();

// Adds products to the store
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);

// Prints all products
console.log("Products in Inventory:");
for (let i = 0; i < store.inventory.length; i++) {
  console.log(store.inventory[i].toString());
}

// Prints value before discount
console.log("Total Inventory Value Before Discount: $" + store.getInventoryValue().toFixed(2));

// Applies 15% discount
Product.applyDiscount(store.inventory, 0.15);

// Prints value after discount
console.log("Total Inventory Value After 15% Discount: $" + store.getInventoryValue().toFixed(2));

// Finds one product by name
const foundProduct = store.findProductByName("Milk");

// Prints the result of the search
if (foundProduct !== null) {
  console.log("Found Product:");
  console.log(foundProduct.toString());
} else {
  console.log("Product not found.");
}
