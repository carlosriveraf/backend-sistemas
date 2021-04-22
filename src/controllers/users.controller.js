import bcrypt from 'bcryptjs';
import { User } from '../models';

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const createUser = async (req, res) => {
    try {
        const { id, firstName, lastName, password, email, districtId } = req.body;
        const encryptedPassword = await encryptPassword(password);
        const userSaved = await User.create({ id, firstName, lastName, password: encryptedPassword, email, districtId });
        res.status(201).json(userSaved);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while creating the User'
        });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while retrieving users'
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error retrieving User with id=${id}`
        });
    }
};

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({
            where: { email }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error retrieving User with email=${email}`
        });
    }
};

export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (req.body.password) {
            const encryptedPassword = await encryptPassword(req.body.password);
            req.body.password = encryptedPassword;
        }
        const userUpdated = await User.update(req.body, {
            where: { id }
        });
        if (userUpdated == 1) {
            const user = await User.findByPk(id);
            res.status(200).json(user);
        } else {
            res.status(500).json({
                message: `Cannot update User with id=${id}. Maybe User was not found, req.body is empty or may be the same!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error updating User with id=${id}`
        });
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const userDeleted = await User.destroy({
            where: { id }
        });
        if (userDeleted == 1) {
            res.status(204).json();
        } else {
            res.status(500).json({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Could not delete User with id=${id}`
        });
    }
};