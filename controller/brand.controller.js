import { Brand } from "../model/brand.modal.js";
export const brandList = async (request, response, next) => {
  try {
    const result = await Brand.find();
    return response.status(200).json({ brands: result, status: true });
  } catch (err) {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
}

export const createBrand = async (request, response, next) => {
  try {
    const result = await Brand.create({
      brandId:request.body.brandId,brandName: request.body.brandName});
    return response.status(200).json({ message: "One Category saved", status: true, brand: result });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal  Error", status: false });
  }
}

export const saveBrand = async (request,response,next)=>{
  try{ 
    let brands = request.body.brands;
    for(let brand of brands){
     let {brandId, brandName} = brand;
     await Brand.create({
       brandId:brandId,brandName:brandName});
   }
   return response.status(200).json({message: 'brands Save ', status: true});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: 'Internal Server Error', status: false});
  }
}



export const branddeletebyid = async (request, response, next) => {
  try {
    const result = await Brand.deleteOne({ _id: request.body._id });
    return response.status(200).json({ message: "Brand deleted", status: true });
  } catch (err) {
    return response.status(500).json({ status: "internal server error", status: false });
  }
}
export const branddelete = async (request, response, next) => {
  try {
    const result = await Brand.deleteMany({});
    return response.status(200).json({ message: "Brands deleted all", status: true });
  } catch (err) {
    return response.status(500).json({ status: "internal server error", status: false });
  }
}

export const editBrand = async (request, response, next) => {
  try {
    const brand = await Brand.updateOne({ _id: request.body._id },
      { $set: { brandName: request.body.brandName } },
      { new: true }
    );
    return response.status(200).json({ message: "Brand Update", status: true,brandName:brand });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ err: "Internal Server Error", status: false });
  }
};



export const searchBrandByName = async (request, response, next) => {
  try {
    const result = await Brand.find({ brandName: request.body.brandName });
    return response.status(200).json({ result: result,status: true });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const searchBrandById = async (request, response, next) => {
  try {
    const result = await Brand.find({ _id:request.body._id });
    return response.status(200).json({ result: result,status: true });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ message: "Internal server error" });
  }
};