import { ObjectId } from "mongodb";

interface Product {
  _id?: ObjectId;
  name: string;
  quantity: number;
  price: number;
  photoURL?: string;
}

export default Product;