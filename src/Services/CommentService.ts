import { Comment } from "../models/Comment";

export default class CommentService {
    getCommentById = async (commentId: number): Promise<Comment> => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);
        return await res.json() as Comment;
    };
}