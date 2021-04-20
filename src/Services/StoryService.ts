import { Story } from "../models/Story";

export default class StoryService {

    getStories = async (): Promise<number[]> => {
        const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
        return await res.json() as number[];
    };

    getStoryById = async (sotryId: number): Promise<Story> => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${sotryId}.json?print=pretty`);
        return await res.json() as Story;
    };
}