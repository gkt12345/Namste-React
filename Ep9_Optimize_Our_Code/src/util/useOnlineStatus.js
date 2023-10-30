import { useEffect, useState } from "react";

// this hook for showing online or offline status
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStauts] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStauts(false);
    });

    window.addEventListener("online", () => {
      setOnlineStauts(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
