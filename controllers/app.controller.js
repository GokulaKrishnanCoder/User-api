import  User  from '../models/user.model.js';


export const createUser = async(req,res)=>{
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async(req,res)=>{
   try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      },
      {
        new: true,
      }
    );
    if(!updatedUser){
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};      
export const deleteUser = async(req,res)=>{
    const userId = req.params.id;
    try{
        await User.deleteOne({ _id: userId });
        res.status(200).json({ message: 'User deleted successfully' });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}   
export const getUser = async(req,res)=>{
    try{const users = await User.find();
    res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}  
export const searchUser = async(req,res)=>{
    const userId = req.params.id;
    try{
        const user = await User.find({ _id: userId });
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
