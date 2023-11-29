import express from "express";
/*import {
  contactsAddSchema,
  contactsPutSchema,
  contactsUpdateFavoriteSchema,
} from "../../models/cars.js";*/
import carsController from "../../controllers/cars-controller.js";
//import isEmptyBody from "../../middlewares/isEmptyBody.js";
import isValidId from "../../middlewares/isValidId.js";
//import ValidateBody from "../../decorators/validateBody.js";
const router = express.Router();

//const contactAddValidate = ValidateBody(contactsAddSchema);
//const contactPutValidate = ValidateBody(contactsPutSchema);
//const updateFavoriteValidate = ValidateBody(contactsUpdateFavoriteSchema);

router.get("/", carsController.getAll);

router.get("/:carId", isValidId, carsController.getById);

//router.post( "/", isEmptyBody, contactAddValidate, contactsController.addContact);

//router.delete("/:contactId", isValidId, contactsController.deleteById);

//router.put("/:contactId", isValidId,isEmptyBody,contactPutValidate,contactsController.updateById);

//router.patch("/:contactId/favorite",isValidId,isEmptyBody,updateFavoriteValidate,contactsController.updateFavorite);
export default router;
