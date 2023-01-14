import User from "../models/User.js";



export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(({
            _id, firstName, lastName, occupation, location, picturePath
        }) => {
            _id, firstName, lastName, occupation, location, picturePath
        });


        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


export const addRemoveFriend = async (req, res) => {
    try {
        const { idu, friendId } = req.params;
        const user = await User.findById(idu);
        const friend = await User.findById(friendId);
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = user.friends.filter((id) => id !== idu);
        }else{
            user.friends.push(friendId);
            friend.friends.push(idu);
        }
        await user.save();
        await friend.save();
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

