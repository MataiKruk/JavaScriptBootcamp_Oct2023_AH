import express from "express";
import { Item } from "../models/Cart";

const routes = express.Router();

const cart: Item[] = [
    {
        id: 12,
        product: "Banana",
        price: 6,
        quantity: 5
    },

    {
        id: 13,
        product: "Grape",
        price: 2.50,
        quantity: 1
    }
]

routes.get("/", (req, res) => {
    let newCart = cart;
    if (req.query.maxPrice) {
      newCart = newCart.filter((item) => {
        return item.price < parseInt(req.query.maxPrice as string);
      });
    }
  
    if (req.query.prefix) {
      newCart = newCart.filter((item) =>
        item.product.startsWith(req.query.prefix as string)
      );
    }
  
    if (req.query.pageSize) {
      newCart = cart.slice(0, parseInt(req.query.pageSize as string));
    }
  
    res.json(newCart);
  });

routes.get("/:id", (req, res) => {
    const itemID = parseInt(req.params.id);

    const foundItem = cart.find(item => item.id === itemID);

    if (foundItem) {
        res.status(200).json(foundItem);
    } else {
        res.status(404).send("ID Not Found");
    }
    
});

routes.post("/", (req, res) => {
    const item = req.body as Item;

    cart.push(item);

    res.status(201).json(item);
});

routes.put("/:id", (req, res) => {
    const item = req.body as Item;
    item.id = parseInt(req.params.id);
  
    let foundIndex: number = cart.findIndex((item) => {
      return item.id === parseInt(req.params.id);
    });
  
    if (foundIndex !== -1) {
      cart.splice(foundIndex, 1, item);
    } else {
      cart.push(item);
    }
  
    res.json(item);
  });

  routes.delete("/:id", (req, res) => {
    let foundIndex: number = cart.findIndex((item) => {
      return item.id === parseInt(req.params.id);
    });
  
    if (foundIndex !== -1) {
      cart.splice(foundIndex, 1);
      res.status(204); // 204 Deleted
      res.json("Deleted");
    } else {
      res.status(404).json("Not Found");
    }
  });

export default routes;