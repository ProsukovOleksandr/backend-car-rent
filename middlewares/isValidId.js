import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const isValidId = (req, res, next) => {
  const { carId } = req.params;
  if (!isValidObjectId(carId)) {
    return next(HttpError(404, `${carId} is not valid id`));
  }
  next();
};
export default isValidId;
