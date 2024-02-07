// require the express module
import { Router } from "express";
import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import User from "../models/User";


// create a new Router object
const usersRouter = Router();

usersRouter.get("/:id", async (req, res) => {
    try {
      const client = await getClient();
  
      const results = await client
        .db("shop_db")
        .collection<User>("users")
        .findOne({ _id: new ObjectId(req.params.id) });
  
      res.json(results);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  
export default usersRouter;
