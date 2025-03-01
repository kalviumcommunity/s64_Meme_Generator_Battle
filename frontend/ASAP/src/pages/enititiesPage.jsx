import { useState, useEffect } from "react";
import AddEntity from "./AddEntity";

const EntitiesPage = () => {
  const [entities, setEntities] = useState([]);

  const fetchEntities = async () => {
    const response = await fetch("http://localhost:8000/api/entities");
    if (response.ok) {
      const data = await response.json();
      setEntities(data);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <div>
      <h1>Entities List</h1>
      <AddEntity onEntityAdded={fetchEntities} />
      <ul>
        {entities.map((entity) => (
          <li key={entity._id}>
            <strong>{entity.name}</strong>: {entity.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntitiesPage;
