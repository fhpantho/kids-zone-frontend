'use server'
import { dbConnect, collection } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"



// getting all the product
export const getProducts = async () => {
    const products = await dbConnect(collection.PRODUCTS).find().toArray();
    return products;
}

// getting single product

export const getSingleProduct = async (id) => {

    if(id.length != 24){
        return {}
    }

    const query = {_id : new ObjectId(id)}


    const product = await dbConnect(collection.PRODUCTS).findOne(query);
    return product || {}
}