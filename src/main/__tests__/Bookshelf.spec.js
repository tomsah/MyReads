import React from "react";
import { shallow } from "enzyme";
import Bookshelf from "../Bookshelf";
import Book from "../Book";

describe("Bookshelf", () => {
  const mockBookData = [{ book: 1 }, { book: 2 }, { book: 3 }];

  const wrapper = shallow(<Bookshelf shelfBooksList={mockBookData} />);
  it("should render Bookshelf", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render the correct amount of Book", () => {
    expect(wrapper.find(Book)).toHaveLength(3);
  });

  it("should render no Book if the shelf is empty", () => {
    const wrapper = shallow(<Bookshelf shelfBooksList={[]} />);
    expect(wrapper.find(Book)).toHaveLength(0);
  });
});
