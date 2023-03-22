import Hotel from "../models/Hotel.js";

//CREATE
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

//UPDATE
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Has Been Deleted!");
  } catch (error) {
    next(error);
  }
};

//GET
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//GET COUNT BY CITY
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    //Awaiting Promise.all Because Async Function Will Return Multiple Cities As Promises
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

//GET COUNT BY TYPE
export const countByType = async (req, res, next) => {
  const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
  const resortCount = await Hotel.countDocuments({ type: "Resort" });
  const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
  const villaCount = await Hotel.countDocuments({ type: "Villa" });
  try {
    res.status(200).json([
      { type: "Hotel", count: hotelCount },
      { type: "Resort", count: resortCount },
      { type: "Apartment", count: apartmentCount },
      { type: "Villa", count: villaCount },
    ]);
  } catch (error) {
    next(error);
  }
};

//GET ALL
export const getAllHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 9999 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
