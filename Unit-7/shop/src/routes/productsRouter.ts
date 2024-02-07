// require the express module
import { Router } from "express";
import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import Product from "../models/Product";

// create a new Router object
const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
    try {
      const client = await getClient();
  
      let args: any = {};
  
      if (req.query.maxPrice) {
        args.price = { $lte: parseFloat(req.query.maxPrice as string) };
      }
  
      if (req.query.includes) {
        args.name = {
          $regex: req.query.includes as string,
          $options: "i",
        };
      }
  
      let limit = 0;
      if (req.query.limit) {
        limit = parseInt(req.query.limit as string);
      }
      console.log(args);
  
      const results = await client
        .db("shop_db")
        .collection<Product>("products")
        .find(args)
        .limit(limit)
        .toArray();
  
      res.json(results);
    } catch (err) {
      res.status(500).json(err);
    }
  });
      

  productsRouter.post("/", async (req, res) => {
    const product = req.body as Product;
  
    try {
      const client = await getClient();
      const results = await client
        .db("shop_db")
        .collection<Product>("products")
        .insertOne(product);
  
      res.status(201).json(results);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  productsRouter.put("/:id", async (req, res) => {
    const product = req.body as Product;
    try {
      const client = await getClient();
  
      const found = await client
        .db("shop_db")
        .collection<Product>("products")
        .findOne({ _id: new ObjectId(req.params.id) });
  
      if (!found) {
        res.status(404).json({ message: "Not found" });
      } else {
        const results = await client
          .db("shop_db")
          .collection<Product>("products")
          .replaceOne({ _id: new ObjectId(req.params.id) }, product);
  
        res.status(200).json(results);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

export default productsRouter;
