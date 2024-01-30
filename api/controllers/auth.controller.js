import user from '../models/user.model.js';
import bcrypt from 'bcryptjs';


export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new user({ username, email, password: hashedPassword });
    try {
    await newUser.save();
     res.status(201).json({
         message: 'User created'
     })
    } catch (error) {
         res.status(500).json(error);
}
};