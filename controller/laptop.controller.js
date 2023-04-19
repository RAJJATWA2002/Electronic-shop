import { Laptop } from "../model/laptop.model.js";
export const laptopList = async (request, response, next) => {
    try {
        const result = await Laptop.find();
        return response.status(200).json({ laptops: result, status: true });
    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const createLaptop = async (request, response, next) => {
    try {
        const result = await Laptop.create({
            id: request.body.id, name: request.body.name, description: request.body.description, rent: request.body.rent, rentDuration: request.body.rentDuration, stock: request.body.stock, rating: request.body.rating, brandName: request.body.brandName, image: request.body.image
        });
        return response.status(200).json({ message: "One Laptop saved", status: true, brand: result });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal  Error", status: false });
    }
}

export const saveLaptopMultiple = async (request, response, next) => {
    try {
        let laptops = request.body.laptops;
        for (let laptop of laptops) {
            let { id, name, description, rent, rentDuration, stock, rating, brandName, image, } = laptop;
            await Laptop.create({
                id:id, name: name, description: description, rent: rent, rentDuration: rentDuration, stock: stock, rating: rating, brandName: brandName, image: image
            });
        }
        return response.status(200).json({ message: 'Laptop Save ', status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error', status: false });
    }
}



export const laptopdeletebyid = async (request, response, next) => {
    try {
        const result = await Laptop.deleteOne({ id: request.body.id });
        return response.status(200).json({ message: "Laptop deleted", status: true });
    } catch (err) {
        return response.status(500).json({ status: "internal server error", status: false });
    }
}
export const laptopdelete = async (request, response, next) => {
    try {
        const result = await Laptop.deleteMany({});
        return response.status(200).json({ message: "Laptop deleted all", status: true });
    } catch (err) {
        return response.status(500).json({ status: "internal server error", status: false });
    }
}

export const editLaptop = async (request, response, next) => {
    try {
        const laptop = await Laptop.updateOne({ id: request.body.id },
            { $set: { name: request.body.name } },
            { new: true }
        );
        return response.status(200).json({ message: "laptop Update", status: true, name: laptop });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ err: "Internal Server Error", status: false });
    }
};



export const searchLaptopByName = async (request, response, next) => {
    try {
        const result = await Laptop.find({ name: request.body.name });
        return response.status(200).json({ result: result, status: true });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ message: "Internal server error" });
    }
};

export const searchLaptopById = async (request, response, next) => {
    try {
        const result = await Laptop.find({ id: request.body.id });
        return response.status(200).json({ result: result, status: true });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ message: "Internal server error" });
    }
};






