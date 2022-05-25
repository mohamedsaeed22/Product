const mongoose = require("mongoose");

/**                  example of Product Schema
 *  
    "name": "Mens Casual Premium Slim Fit T-Shirts",
    "amount": 20,
    "price": 150,
    "color":["red" , "green" , "blue" ],
    "size":["M" ,"L" , "XL" , "XXL"],
    "season":["Summer" ,"spring"],
    "imageSrc": ["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"],
    "style":"Calssic",
    "type":["Mens"]
    "rank": "#2",
    "brand":"Addidas"
    "rate": 3.5 
    
    */

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Too short product title"],
      maxlength: [100, "Too long product title"],
    },
    amount: {
      type: Number,
      required: [true, "Product amount is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      trim: true,
      min: [1, "Too Short product price"],
      max: [200000, "Too long product price"],
    },
    colors: [String],
    size: {
      type: [String],
      required: [true, "Product Sizes is required"],
    },
    season: [String],
    imageSrc: {
      type: [String],
      required: [true, "Product ImageSrc is required"],
    },
    style: String,
    type: {
      type: [String],
      required: [true, "Product type is required"],
    },
    rank: String, // depending on how many the product is sold
    brand: {       // depending on Brand Model --- this is for example
      type: String,
      required: [true, "Product Brand is required"],
    },
    rate: {
      type: Number,
      min: [1, "Rating must be above or equal 1.0"],
      max: [5, "Rating must be below or equal 5.0"],
    },
  },
  { timestamps: true }
);

// Mongoose query middleware
// productSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "category",
//     select: "name -_id",
//   });
//   next();
// });

module.exports = mongoose.model("Product", productSchema);
