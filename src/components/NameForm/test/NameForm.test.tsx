import { render, screen, fireEvent } from '@testing-library/react';
import NameForm from '../NameForm';

test('Name Form Test', () => {
  render(<NameForm setNameList={(data: string[]) => {
    data = ["John"]
    return data;
  }} nameList={[]} setNotification={(msg: Object) => {
    msg = {msg: "Name", color: "primary"}
    return msg;
  }} />)
  const addButton = screen.getByTestId("add-button");
  fireEvent.click(addButton);
  const name = screen.getByTestId("add-name") as HTMLInputElement;
  fireEvent.change(name, {target: {value: "Ahmad"}});
  expect(name.value).toBe('Ahmad');
});