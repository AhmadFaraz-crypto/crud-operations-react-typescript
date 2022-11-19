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
      setNotification={(msg: string) => {
        msg = "";
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
      setNotification={(msg: string) => {
        msg = "Edit successfully.";
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
      setNotification={(msg: string) => {
        msg = "Deleted successfully.";
        return msg;
      }}
    />
  );
  const deleteName = screen.getByTestId("delete-name-0");
  fireEvent.click(deleteName);
});
