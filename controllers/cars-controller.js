import Car from "../models/cars.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAll = async (req, res) => {
  //const {_id: owner} = req.user;
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 12;

  const startIndex = (page - 1) * pageSize;

  const result = await Car.find().skip(startIndex).limit(pageSize);
  res.json(result);
};

const getById = async (req, res) => {
  //const {_id: owner} = req.user;
  const { carId } = req.params;

  const result = await Car.findOne({_id: carId});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

/*const addContact = async (req, res) => {
  console.log(req.user);
  const {_id: owner} = req.user;
  const result = await Contact.create({...req.body, owner});
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const {_id: owner} = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndUpdate({_id:contactId, owner}, req.body, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};
const deleteById = async (req, res) => {
  const {_id: owner} = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndDelete({_id:contactId, owner});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    message: "Delete success",
  });
};*/

/*const updateFavorite = async (req, res, next) => {
  const {_id: owner} = req.user;
  const { contactId } = req.params;
  const result = await Car.findOneAndUpdate({_id:contactId, owner}, req.body, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};*/

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  /*addContact: ctrlWrapper(addContact),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),*/
  //updateFavorite: ctrlWrapper(updateFavorite),
};
