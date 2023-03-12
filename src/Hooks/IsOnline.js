import { useState,useEffect } from "react";
function useIsOnline() {
    const [online,setOnLine]=useState(navigator.onLine);
    useEffect(() => {
      console.log(navigator.onLine)
      const offlineHandler = () => {
          setOnLine(false);
    }

      const onlineHandler = () => {
          setOnLine(true);
      }
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);
      return () => {
        window.removeEventListener("online",onlineHandler);
        window.removeEventListener("offline", offlineHandler);
      }
    }, [])
    return online;
}

export default useIsOnline;