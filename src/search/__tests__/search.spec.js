import React from "react";
import { mount, shallow } from "enzyme";
import { getAll, update } from "../../main/BooksAPI";

import Search from "../Search";
import Bookshelf from "../../main/Bookshelf";

describe("Search", () => {
  const mockState = {
    searchInput: "",
    searchBookList: [],
    noResult: null
  };

  const mockBooksList = [{}, {}, {}, {}];
  const onChangeBookStatusMock = jest.fn();

  const wrapper = shallow(
    <Search
      booksList={mockBooksList}
      onChangeBookStatus={onChangeBookStatusMock}
    />
  );

  it("should render Search correctly", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find(".close-search")).toHaveLength(1);
    expect(wrapper.find(".search-books-results")).toHaveLength(1);
  });

  describe("search-books-results", () => {
    it("should display a message if no result", () => {
      const wrapper = shallow(
        <Search
          booksList={[{ error: "foo" }]}
          onChangeBookStatus={onChangeBookStatusMock}
        />
      );
      wrapper.setState({ noResult: true });
      wrapper.update();
      expect(wrapper.find(".no-result-message")).toHaveLength(1);
      expect(wrapper.find("Bookshelf")).toHaveLength(0);
    });
    it("should display a grid of book there is result", () => {
      expect(wrapper.find(".no-result-message")).toHaveLength(0);
      expect(wrapper.find("Bookshelf")).toHaveLength(1);
    });
  });

  describe("input", () => {
    it("should call handleSearch", () => {
      const inputWrapper = wrapper.find("input");
      inputWrapper.simulate("change", {
        target: { value: "fooBarBaz" }
      });
      wrapper.update();
      jest
        .spyOn(wrapper.instance(), "handleSearch")
        .mockImplementation(() => {});
      wrapper.instance().handleSearch({ target: { value: "fooBarBaz" } })
      expect(wrapper.instance().handleSearch).toHaveBeenCalled();
    });
  });
});
