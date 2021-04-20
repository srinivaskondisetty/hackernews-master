import * as React from "react";
import { shallow } from "enzyme";
import Story from "./Story";
import { Story as StoryModel } from "../models/Story";

const storyModel: StoryModel = {
  by: "st3fan",
  descendants: 26,
  id: 26874726,
  kids: [
    26876239,
    26876981,
    26875997,
    26876960,
    26875826,
    26876853,
    26877025,
    26877104,
    26876969,
    26876760,
    26875947,
  ],
  score: 111,
  time: 1618926998,
  title: "Remote Code Execution Found in CococaPods",
  type: "story",
  url: "https://blog.cocoapods.org/CocoaPods-Trunk-RCE/",
} as StoryModel;

describe("Story Test Cases", () => {
  test("check if the story component is loaded", () => {
    const warpper = shallow(<Story storyId={storyModel.id} />);
    const element = warpper.find(
      "div.rounded.overflow-hidden.shadow-lg.bg-white"
    );
    expect(element.length).toBe(1);
  });

  test("Check if the story model is binded", () => {
    const warpper = shallow(<Story storyId={storyModel.id} />);
    warpper.setState({ story: storyModel });
    const element = warpper.find(
      "div.rounded.overflow-hidden.shadow-lg.bg-white"
    );
    expect(warpper.find(".ml-4").find("p").text()).toBe("st3fan");
    expect(element.find("div.px-6").length).toBe(3);
  });
});
