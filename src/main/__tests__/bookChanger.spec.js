import React from "react";
import { mount } from "enzyme";
import BookChanger from "../BookChanger";

describe("BookChanger", () => {
  const mockBookData = {
    title: "foo",
    shelf: "read"
  };
  const onChangeBookStatusMock = jest.fn();

  const wrapper = mount(
    <BookChanger
      book={mockBookData}
      onChangeBookStatus={jest.fn(onChangeBookStatusMock)}
    />
  );
  it("should render BookChanger", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("select").instance().value).toBe(mockBookData.shelf);
    expect(wrapper.find("select").instance().name).toBe(mockBookData.title);
    expect(wrapper.find("option")).toHaveLength(5);
  });
  fit("should call onChangeBookStatus on click", () => {
    expect(onChangeBookStatusMock).toHaveBeenCalledTimes(0);
    const selectWrapper = wrapper.find("select");
    selectWrapper.simulate("change", {
      target: { value: "wantToRead" }
    });
    expect(onChangeBookStatusMock).toHaveBeenCalledTimes(1);
  });
});
