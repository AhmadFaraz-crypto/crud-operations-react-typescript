import { render, screen, fireEvent } from "@testing-library/react";
import NameList from "../NameList";

test("Name List Test", () => {
  render(
    <NameList
      setNameList={(data: string[]) => {
        data = [];
        return data;
      }}
      nameList={["John", "Mark"]}
      setNotification={(msg: Object) => {
        msg = { msg: "", color: "" };
        return msg;
      }}
    />
  );
});

test("Name Update Test", () => {
  render(
    <NameList
      setNameList={(data: string[]) => {
        data = [];
        return data;
      }}
      nameList={["John", "Mark"]}
      setNotification={(msg: Object) => {
        msg = { msg: "Edit successfully.", color: "info" };
        return msg;
      }}
    />
  );
  const editButton = screen.getByTestId("edit-name-0");
  fireEvent.click(editButton);
  const editInput = screen.getByTestId(`input-edit-0`) as HTMLInputElement;
  fireEvent.change(editInput, { target: { value: "Sara" } });
  expect(editInput.value).toBe("Sara");
});

test("Name Delete Test", () => {
  render(
    <NameList
      setNameList={(data: string[]) => {
        data = [];
        return data;
      }}
      nameList={["John", "Mark"]}
      setNotification={(msg: Object) => {
        msg = { msg: "Deleted successfully.", color: "danger" };
        return msg;
      }}
    />
  );
  const deleteName = screen.getByTestId("delete-name-0");
  fireEvent.click(deleteName);
});
