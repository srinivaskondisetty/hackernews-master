import React, { Component } from 'react'
import StoryService from '../services/storyService'
import Story from './story';

interface IStoryListProps {
}

interface IStoryListState {
    storyList: number[];
}

export default class Stories extends Component<IStoryListProps, IStoryListState> {
    private storyService: StoryService;

    constructor(props: IStoryListProps) {
        super(props);
        this.storyService = new StoryService();
        this.state = {
            storyList: []
        }
    }

    async componentDidMount() {
        const storyList = (await this.storyService.getStories()).slice(0, 10);
        this.setState({ storyList });
    }

    render() {
        const stories = this.state.storyList;
        return (
            <div id="storiesContainer" className="p-10 grid grid-cols gap-5 bg-blue-100">
                <h1 className="text-center font-black text-green-700">Story Board</h1>
                {stories &&
                    stories.map((storyId) => {
                        return <Story key={storyId} storyId={storyId}></Story>
                    })
                }
                {stories.length === 0 && <b>Loading..</b>}
            </div>
        )
    }
}
