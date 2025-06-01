import User from '../models/user';

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Assuming you're using Sequelize
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body); // Assuming you're using Sequelize
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Additional controller methods can be added here as needed.