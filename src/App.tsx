import React, { useState } from "react";
import { NameForm, NameList, Notification } from "./components";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [nameList, setNameList] = useState<string[]>(["John", "Mike", "Sara"]);
  const [notification, setNotification] = useState<string>("");

  return (
    <div className="App">
      <NameForm
        setNameList={setNameList}
        nameList={nameList}
        setNotification={setNotification}
      />
      <NameList
        setNameList={setNameList}
        nameList={nameList}
        setNotification={setNotification}
      />
      {notification && (
        <Notification
          setNotification={setNotification}
          notification={notification}
        />
      )}
    </div>
  );
}

export default App;
