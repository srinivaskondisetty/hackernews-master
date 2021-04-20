import { Comment } from "../models/comment";

export default class commentService {
    getCommentById = async (commentId: number): Promise<Comment> => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);
        return await res.json() as Comment;
    };
}