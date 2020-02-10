import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { getAll, update } from "./main/BooksAPI";

jest.mock("./main/BooksAPI", () => ({
  getAll: jest.fn(() => Promise.resolve([1, 2, 3, 4])),
  update: jest.fn()
}));

import BooksApp from "./App";
import Main from "./main/Main";
import Search from "./search/Search";

describe("BooksApp", () => {
  describe("routing", () => {
    it("Should render Main on / path", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <BooksApp />
        </MemoryRouter>
      );

      expect(wrapper.find(Main)).toHaveLength(1);
      expect(wrapper.find(Search)).toHaveLength(0);
    });
    it("Should render Search on /search path", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/search"]}>
          <BooksApp />
        </MemoryRouter>
      );
      expect(wrapper.find(Main)).toHaveLength(0);
      expect(wrapper.find(Search)).toHaveLength(1);
    });
  });
  describe("componentDidMount", () => {
    it("should fetch data", async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <BooksApp />
        </MemoryRouter>
      );
      const instance = wrapper.find(BooksApp).instance();
      expect(instance.state.booksList).toEqual([]);
      await instance.componentDidMount();
      expect(getAll).toHaveBeenCalled();
    });
  });
  describe("changBookStatus", () => {
    it("should call BooksAPI.update ", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <BooksApp />
        </MemoryRouter>
      );
      const instance = wrapper.find(BooksApp).instance();
      const mockEvent = { target: { value: "foo" }, stopPropagation: () => {} };
      instance.changeBookStatus([], mockEvent);
      expect(update).toHaveBeenCalled();
    });
  });
});
