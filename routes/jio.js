const express = require("express");
const jioRouter = express.Router();

const { jio, jioPlans } = require("../models/jio");

jioRouter.post("/admin/jio",  async (req, res) => {
    try {
      const { name, description, images, quantity, price, category } = req.body;
      let jio4g = new jioPlans({
        name,
        description,
        images,
        quantity,
        price,
        category,
      });
      jio4g = await jio4g.save();
      res.json(jio4g);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

jioRouter.get("/api/jio/",  async (req, res) => {
  try {
    const jioplan = await jioPlans.find({ category: req.query.category });
    res.json(jioplan);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// create a get request to search products and get them
// /api/products/search/i
// productRouter.get("/api/products/search/:name",  async (req, res) => {
//   try {
//     const products = await Product.find({
//       name: { $regex: req.params.name, $options: "i" },
//     });

//     res.json(products);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// create a post request route to rate the product.
// productRouter.post("/api/rate-product",  async (req, res) => {
//   try {
//     const { id, rating } = req.body;
//     let product = await Product.findById(id);

//     for (let i = 0; i < product.ratings.length; i++) {
//       if (product.ratings[i].userId == req.user) {
//         product.ratings.splice(i, 1);
//         break;
//       }
//     }

//     const ratingSchema = {
//       userId: req.user,
//       rating,
//     };

//     product.ratings.push(ratingSchema);
//     product = await product.save();
//     res.json(product);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// productRouter.get("/api/deal-of-day",  async (req, res) => {
//   try {
//     let products = await Product.find({});

//     products = products.sort((a, b) => {
//       let aSum = 0;
//       let bSum = 0;

//       for (let i = 0; i < a.ratings.length; i++) {
//         aSum += a.ratings[i].rating;
//       }

//       for (let i = 0; i < b.ratings.length; i++) {
//         bSum += b.ratings[i].rating;
//       }
//       return aSum < bSum ? 1 : -1;
//     });

//     res.json(products[0]);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

module.exports = jioRouter;
