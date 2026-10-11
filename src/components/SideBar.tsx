import { useState, useEffect } from "react";
import { fetchData } from "../API";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  endpoint: string;
}

function SideBar({ title, endpoint }: Props) {
  const [selectedItem, setSelectedItem] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(endpoint)
      .then((data) => {
        setItems(data.results || []);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-secondary p-3">Loading...</div>;

  return (
    <div className="container my-3">
      <h2 className="text-center align-bottom rounded bg-black text-danger">
        {title}
      </h2>

      <div className="list-group overflow-y-auto" style={{ maxHeight: "75vh" }}>
        {items.map((item: any) => (
          <Link
            key={item.index}
            className={
              selectedItem === item.index
                ? "list-group-item active text-white border-secondary"
                : "list-group-item list-group-item-action bg-dark text-white border-secondary"
            }
            to={item.index}
            onClick={() => {
              setSelectedItem(item.index);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
