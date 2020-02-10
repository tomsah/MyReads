import React from "react";
import { shallow } from "enzyme";
import Main from "../Main";
import Header from "../Header";
import SearchNav from "../../search/SearchNav";

describe("Main", () => {
  const mockBookData = [{ book: 1 }, { book: 2 }, { book: 3 }];

  const wrapper = shallow(<Main booksList={mockBookData} />);
  it("should render Main", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(SearchNav)).toHaveLength(1);
  });

  it("should render the correct amount of shelf", () => {
    expect(wrapper.find(".bookshelf")).toHaveLength(3);
  });
});
