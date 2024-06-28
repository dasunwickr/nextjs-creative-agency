import { Post, User } from "./model";
import { connectToDatabase } from "./utils";

export const getPosts = async () => {
  try {
    connectToDatabase();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDatabase();
    const post = await Post.find(slug);
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    connectToDatabase();
    const user = await User.find(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getAllUsers = async () => {
  try {
    connectToDatabase();
    const user = await User.find();
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
