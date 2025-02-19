import React from "react";


const EntityComponent = () => {
  // Dummy data for the entity
  const entity = {
    id: 1,
    name: "Tejas",
    PlayerId: "Tejas30",
    status: "Active",
  };

  return (
    <div className="entity-card">
      <h2>{entity.name}</h2>
      <p>{entity.PlayerId}</p>
      <span className={entity.status.toLowerCase()}>{entity.status}</span>
    </div>
  );
};

export default EntityComponent;
