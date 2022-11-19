import React, { FormEvent, useState } from "react";

type IProps = {
  setNameList: (data: string[]) => void;
  nameList: string[];
  setNotification: (msg: string) => void;
};

const NameForm: React.FC<IProps> = (props) => {
  const { setNameList, nameList, setNotification } = props;

  const [value, setValue] = useState<string>("");

  const onSubmit = (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    setNameList([...nameList, value]);
    setNotification("Added Successfully");
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          name="name"
          value={value}
          data-testid="add-name"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your name"
        />
        <button
          type="submit"
          data-testid="add-button"
          disabled={!value}
          className="btn btn-outline-primary ms-1"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default NameForm;
