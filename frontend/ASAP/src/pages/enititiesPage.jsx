import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddEntity from "./AddEntity";

const EntitiesPage = () => {
  const [entities, setEntities] = useState([]);

  // Fetch entities from API
  const fetchEntities = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/entities");
      if (response.ok) {
        const data = await response.json();
        setEntities(data);
      }
    } catch (error) {
      console.error("Error fetching entities:", error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  // Delete entity function
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/entities/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setEntities(entities.filter(entity => entity._id !== id)); // Remove from UI
      } else {
        console.error("Failed to delete entity");
      }
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  return (
    <div>
      <h1>Entities List</h1>
      <AddEntity onEntityAdded={fetchEntities} />
      <ul>
        {entities.map((entity) => (
          <li key={entity._id}>
            <strong>{entity.name}</strong>: {entity.description}  
            <Link to={`/update-entity/${entity._id}`}>
              <button style={{ marginLeft: "10px" }}>Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(entity._id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntitiesPage;
