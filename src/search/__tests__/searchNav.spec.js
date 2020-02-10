import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import SearchNav from "../SearchNav";

describe('SearchNav', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/Search"]}>
      <SearchNav />
  </MemoryRouter>)
  it("should render SearchNav correctly", () => {
    expect(wrapper.find('.open-search')).toHaveLength(1)
  })
})
