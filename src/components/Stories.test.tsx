import * as React from "react";
import { shallow } from "enzyme";
import Stories from "./stories";

describe("Stories Test Cases", () => {
  test("Checking atleast one element is loaded", () => {
    const warpper = shallow(<Stories />);
    const element = warpper.find("h1");
    expect(element).toBeDefined();
    expect(element.text()).toBe("Story Board");
  });

  test("Check if stories container is displayed", () => {
    const warpper = shallow(<Stories />);
    const element = warpper.find("#storiesContainer");
    expect(element.length).toBe(1);
  });
});
