import User from '../models/User.js';

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error'); 
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).send(user._id + "was deleted succesfully");
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const createUser = async (req, res) => {
  try {
    // Extrae los datos del cuerpo de la solicitud
    const { googleId, githubId, displayName, email, colorPalettes } = req.body;

    // Crea un nuevo usuario utilizando el modelo User
    const newUser = await User.create({
      googleId,
      githubId,
      displayName,
      email,
      colorPalettes,
    });
    res.status(201).send(newUser);
    console.log(newUser)
  } catch (error) {
    // Maneja cualquier error y envía una respuesta de error
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!User) {
      return res.status(404).send({ message: "User Not Found" });
    }
    if (Object.keys(req.body).length === 0) {
      return res
        .status(404)
        .send({ message: "At least one property should be modified" });
    }
    const updatedUser = await User.findById(id);
    res.status(200).send(updatedUser);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ message: "Validation error: " + error.message });
    } else {
      return res.status(500).send({ message: "Internal server error: " + error.message });
    }
  }
};