import { Schema, model } from "mongoose";
import { handleSaveError, runValidatorsAtUpdate } from "./hooks.js";
//import Joi from "joi";
const carSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for car"],
    },
    favorite: {
      type: Boolean,
    },
    year: {
      type: Number,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    fuelConsumption: {
      type: String,
      required: true,
    },
    engineSize: {
      type: String,
      required: true,
    },
    accessories: {
      type: Array,
      required: true,
    },
    functionalities: {
      type: Array,
      required: true,
    },
    rentalPrice: {
      type: String,
      required: true,
    },
    rentalCompany: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rentalConditions: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

carSchema.post("save", handleSaveError);

carSchema.pre("findOneAndUpdate", runValidatorsAtUpdate);
carSchema.post("findOneAndUpdate", handleSaveError);

/*export const carsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
export const carsPutSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});*/

/*export const carsUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});*/

const Car = model("car", carSchema);
export default Car;
