import { z } from "zod";
import { addProductSchema } from "./addProduct.schema";
export type addProduct = z.infer<typeof addProductSchema>;
