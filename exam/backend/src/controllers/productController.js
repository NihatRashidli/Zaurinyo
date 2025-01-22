import product from "../models/productModels.js";

export const getProducts = async (req, res) => {
    try {
        const users = await product.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
};

export const addProduct = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = new product(userData);
        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add user', error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await product.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
}