import React, { useEffect, useState } from "react";

type IProps = {
  notification: string;
  setNotification: (msg: string) => void;
};

const Notification: React.FC<IProps> = (props) => {
  const { notification, setNotification } = props;

  const [toastShow, setToastShow] = useState<string>('');

  useEffect(() => {
    if (notification) {
      setToastShow("show");
      setTimeout(() => {
        setToastShow('hide');
        setNotification('');
      }, 1500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification])

  const hideToast = () => {
    setToastShow("hide");
    setNotification('');
  }

  return (
    <div
      className={`toast ${toastShow} text-white bg-success align-items-center position-absolute top-0 end-0 m-4`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{notification}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={hideToast}
        ></button>
      </div>
    </div>
  );
};

export default Notification;
