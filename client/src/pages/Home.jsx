import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../utils/queries";
import Jumbotron from "../components/Jumbotron/index";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ITEMS);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.items && data.items.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (currentIndex) => (currentIndex + 1) % data.items.length
        );
      }, 10000); // 10000 - Changes item every 10 seconds

      return () => clearInterval(interval);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  if (!data || !data.items || data.items.length === 0)
    return <p>No items found.</p>;

  const currentItem = data.items[currentIndex];

  return (
    <div className="p-4">
      <Jumbotron {...currentItem} />
    </div>
  );
}
