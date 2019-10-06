import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestArr, checkProps } from "./../../../Utilities";

const setUp = props => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Checking prop types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test desc"
      };

      const propsErr = checkProps(Headline, expectedProps);
      //Access the propTypes pf the Headline component, then we pass in the expected props obj, we then tell it we are testing props and then the name of the component which can be found at headline.name.
      expect(propsErr).toBeUndefined();
    });
  });
});

describe("Have props", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      header: "Test Header",
      desc: "Test Desc"
    };
    wrapper = setUp(props);
  });

  it("Should render without errors", () => {
    const component = findByTestArr(wrapper, "HeadlineComponent");
    expect(component.length).toBe(1);
  });

  it("Should render a h1", () => {
    const h1 = findByTestArr(wrapper, "Header");
    expect(h1.length).toBe(1);
  });

  it("Should have a description", () => {
    const description = findByTestArr(wrapper, "desc");
    expect(description.length).toBe(1);
  });
});

describe("Have NO props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should not render", () => {
    const component = findByTestArr(wrapper, "HeadlineComponent");
    expect(component.length).toBe(0);
  });
});
