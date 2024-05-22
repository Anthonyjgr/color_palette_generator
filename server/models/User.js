import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  githubId: {
    type: String,
  },
  displayName: {
    type: String,
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
  },
  colorPalettes: [
    {
      name: {
        type: String,
        required: true,
      },
      scale: {
        type: Array,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
