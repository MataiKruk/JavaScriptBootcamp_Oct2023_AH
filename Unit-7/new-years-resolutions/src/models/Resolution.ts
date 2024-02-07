import { ObjectId } from "mongodb";

export interface Resolution {
    goal: string,
    priority?: number,
    completed: boolean,
    deadline?: Date,
    _id?: ObjectId
}