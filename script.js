const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2500,
    stock: 10,
  },
  {
    id: 2,
    name: "Classic Backpack",
    category: "Accessories",
    price: 1500,
    stock: 5,
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 650,
    stock: 20,
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 3200,
    stock: 0,
  },
  { id: 5, name: "Running Shoes", category: "Clothing", price: 2200, stock: 8 },
  {
    id: 6,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 850,
    stock: 0,
  },
];

function displayAllProducts(productss) {
  for (const product of productss) {
    console.log(`${product.name} => ${product.price}`);
  }
}
// displayAllProducts(products);

function displayAllProductsStockAbility(productss) {
  for (const product of productss) {
    console.log(`${product.name} => ${product.stock}`);
  }
}
// displayAllProductsStockAbility(products);

function findElectronicsProducts(productss) {
  for (const product of productss) {
    if (product.category === "Electronics") {
      console.log(`${product.name}`);
    }
  }
}
// findElectronicsProducts(products);

function totalInventoryValue(productss) {
  let totalValue = 0;
  for (const product of productss) {
    totalValue += product.price * product.stock;
  }
  console.log(totalValue);
}

// totalInventoryValue(products);

function expensive(productss) {
  let expensivePrdct = null;
  for (const product of productss) {
    if (expensivePrdct === null) {
      expensivePrdct = product;
    } else if (product.price > expensivePrdct.price) {
      expensivePrdct = product;
    }
  }
  console.log(expensivePrdct);
}
// expensive(products);

function discount(productss) {
  for (const product of productss) {
    let discountRate = 0.05;

    if (product.price >= 2000) {
      discountRate = 0.15;
    } else if (product.price >= 1000) {
      discountRate = 0.1;
    }

    const discountedPrice = product.price * (1 - discountRate);
    console.log(`${product.name}: ${discountedPrice} BDT`);
  }
}
// discount(products)