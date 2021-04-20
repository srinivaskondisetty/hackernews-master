import React, { Component } from 'react'
import StoryService from '../services/storyservice';
import { Story as StoryModel } from "../models/Story";
import moment from 'moment';
import Comments from './Comments'

interface IStoryProps {
    storyId: number;
}

interface IStoryState {
    story: StoryModel | undefined;
    showComments: boolean;
}

export default class Story extends Component<IStoryProps, IStoryState> {

    private storyService: StoryService;
    constructor(props: IStoryProps) {
        super(props);
        this.storyService = new StoryService();
        this.state = {
            story: undefined,
            showComments: false
        }
    }

    async componentDidMount() {
        const story = await this.storyService.getStoryById(this.props.storyId);
        this.setState({ story });
    }

    toggleComments = () => {
        this.setState({ showComments: !this.state.showComments });
    }

    render() {
        const story = this.state.story;
        return (
            <div className="rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4 flex justify-between">
                    <div className="flex items-center pt-3">
                        <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">{story?.by.charAt(0)}</div>
                        <div className="ml-4">
                            <p className="font-bold">{story?.by}</p>
                        </div>
                    </div>
                    <div className="text-md mb-2 col-6">{moment(story?.time).toLocaleString()}</div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 col-6">{story?.title}</div>
                    <a href={story?.url}>
                        {story?.url}
                    </a>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a onClick={this.toggleComments}>{`${story?.kids?.length} comments`}</a>
                </div>
                {this.state.showComments && <Comments commentIds={story?.kids?.slice(0, 20)}></Comments>}
            </div>
        )
    }
}
