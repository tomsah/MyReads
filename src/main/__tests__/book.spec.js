import React from "react";
import { mount } from "enzyme";
import Book from "../Book";
import BookChanger from "../BookChanger";

describe("Book", () => {
  const mockBookData = {
    title: "foo",
    authors: ["platon"],
    imageUrl: "http//sss"
  };

  const wrapper = mount(<Book book={mockBookData} />);
  it("should render Book", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(".book-title").text()).toBe(mockBookData.title);
    expect(wrapper.find(".book-authors").text()).toBe(mockBookData.authors[0]);
    expect(
      wrapper.find(".book-cover").instance().style._values["background-image"]
    ).toBe(`url(${mockBookData.imageUrl})`);
    expect(wrapper.find(BookChanger)).toHaveLength(1);
  });
});
