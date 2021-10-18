import { PostModels } from '../models/postModels.js'

export const getPosts = async (req, res) => {
    try{
        const posts = await PostModels.find();
        console.log('post: ',posts);
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({error: err});
    }
};
export const createPost = (req, res) => {
    res.send('Create success');
}