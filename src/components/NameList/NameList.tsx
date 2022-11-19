import React, { useState } from "react";

type IProps = {
  setNameList: (data: string[]) => void;
  nameList: string[];
  setNotification: (msg: string) => void;
};

const NameList: React.FC<IProps> = (props) => {
  const { nameList, setNameList, setNotification } = props;

  const [value, setValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<any>(null);

  const deleteName = (index: number) => {
    const filter = nameList.filter((_, i) => i !== index);
    setNameList([...filter]);
    setNotification("Deleted successfully.");
  };

  const editName = (index: number) => {
    setValue(nameList[index]);
    setEditIndex(index);
  };

  const saveEditName = (index: number) => {
    nameList[index] = value;
    setNameList([...nameList]);
    setEditIndex(null);
    setNotification("Updated successfully.");
  };

  const cancel = () => {
    setEditIndex(null);
  };

  const renderData = () => (
    <>
    {nameList.map((item, index) => (
        <div key={index} className="input-group mb-3 mt-3">
          <input
            type="text"
            value={editIndex === index ? value : item}
            className={`form-control ${
              editIndex !== index && "pointer-event-none"
            }`}
            name="name"
            data-testid={`input-edit-${index}`}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your name"
          />
          {editIndex === index ? (
            <>
              <button
                type="submit"
                className="btn btn-outline-primary ms-1"
                onClick={() => saveEditName(index)}
                data-testid="saveEditName"
              >
                Update
              </button>
              <button
                type="submit"
                className="btn btn-outline-secondary ms-1"
                onClick={cancel}
                data-testid="cancel"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                className="btn btn-outline-info ms-1"
                onClick={() => editName(index)}
                data-testid={`edit-name-${index}`}
              >
                Edit
              </button>
              <button
                type="submit"
                className="btn btn-outline-danger ms-1"
                onClick={() => deleteName(index)}
                data-testid={`delete-name-${index}`}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </>
  )

  const noData = () => (
    <div className="mt-5 pt-5">
      <h5>No Data</h5>
    </div>
  )

  return (
    <div>
      <h3 className="line">All List</h3>
      {nameList.length ? renderData() : noData()}
    </div>
  );
};

export default NameList;
