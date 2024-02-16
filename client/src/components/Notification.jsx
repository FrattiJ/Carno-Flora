import { useEffect } from "react";
import { useCartContext } from "../utils/GlobalState";

const Notification = () => {
  const { state, dispatch } = useCartContext();
  const { notification } = state;

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 3000); // Clears notification after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  if (!notification) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-blue-500 text-white py-2 px-4 text-center">
      {notification}
    </div>
  );
};

export default Notification;
