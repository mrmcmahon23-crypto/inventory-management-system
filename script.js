class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }

  static applyDiscount(products, discount) {
    for (let i = 0; i < products.length; i++) {
      products[i].price = products[i].price * (1 - discount);
    }
  }
}

class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    let total = 0;

    for (let i = 0; i < this.inventory.length; i++) {
      total += this.inventory[i].getTotalValue();
    }

    return total;
  }

  findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name.toLowerCase() === name.toLowerCase()) {
        return this.inventory[i];
      }
    }

    return null;
  }
}

const product1 = new Product("Apple", 2.50, 50);
const product2 = new Product("Bread", 3.00, 20);
const product3 = new Product("Rice", 10.00, 15);
const product4 = new PerishableProduct("Milk", 4.50, 10, "2026-04-01");
const product5 = new PerishableProduct("Yogurt", 2.75, 25, "2026-03-30");

const store = new Store();

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);

console.log("Products in Inventory:");
for (let i = 0; i < store.inventory.length; i++) {
  console.log(store.inventory[i].toString());
}

console.log("Total Inventory Value Before Discount: $" + store.getInventoryValue().toFixed(2));

Product.applyDiscount(store.inventory, 0.15);

console.log("Total Inventory Value After 15% Discount: $" + store.getInventoryValue().toFixed(2));

const foundProduct = store.findProductByName("Milk");

if (foundProduct !== null) {
  console.log("Found Product:");
  console.log(foundProduct.toString());
} else {
  console.log("Product not found.");
}