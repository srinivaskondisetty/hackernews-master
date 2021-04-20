import React, { Component } from 'react'
import CommentService from '../Services/CommentService';
import { Comment } from '../models/Comment'
import moment from 'moment';

interface ICommentsProps {
    commentIds: number[];
}

interface ICommentsState {
    comments: Comment[];
}

export default class Comments extends Component<ICommentsProps, ICommentsState> {
    private commentService: CommentService;

    constructor(props: ICommentsProps) {
        super(props);
        this.commentService = new CommentService();
        this.state = {
            comments: []
        }
    }

    async componentDidMount() {
        const promises = this.props.commentIds.map((commentId) => this.commentService.getCommentById(commentId));
        const comments: Comment[] = await Promise.all(promises)
        this.setState({ comments });
    }

    render() {
        const comments = this.state.comments;
        return (
            <div className="p-10 grid grid-cols-3 gap-5">
                {comments &&
                    comments.map((comment) => {
                        return <div className="rounded overflow-hidden shadow-lg bg-white">
                            <div className="px-6 py-4 flex">
                                <div className="pt-3">
                                    <div className="ml-4">
                                        <p className="font-bold">Commented By: {comment?.by}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4 text-md mb-2 col-6">Created {moment(comment?.time).fromNow()}</div>
                            <div className="px-6 py-4">
                                <div className="mb-2 col-6" dangerouslySetInnerHTML={{ __html: comment?.text }}></div>
                            </div>
                        </div>
                    })
                }
                {comments.length === 0 && <b>Loading..</b>}
            </div>
        )
    }
}
