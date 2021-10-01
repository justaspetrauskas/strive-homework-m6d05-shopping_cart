import Customer from "./customer.js";
import Product from "./products.js";
import Review from "./reviews.js";
import Category from "./categories.js";
import ShoppingCart from "./shoppingCart.js";
import ProductCategory from "./productCategories.js";

// customer relations
// customer with shopping cart, product
Customer.belongsToMany(Product, {
  through: { model: ShoppingCart, unique: false },
});
Product.belongsToMany(Customer, {
  through: { model: ShoppingCart, unique: false },
});

Customer.hasMany(ShoppingCart);
ShoppingCart.belongsTo(Customer);

// product relations
// product with shopping cart, category,review
Product.hasMany(ShoppingCart);
ShoppingCart.belongsTo(Product);

Product.belongsToMany(Category, {
  through: { model: ProductCategory, unique: false },
});
Category.belongsToMany(Product, {
  through: { model: ProductCategory, unique: false },
});

Product.hasMany(Review); // Product.findAll({include:Review})
Review.belongsTo(Product); // Reviews.findAll({include:Product})

export default {
  Customer,
  ShoppingCart,
  Product,
  Category,
  Review,
  ProductCategory,
};
