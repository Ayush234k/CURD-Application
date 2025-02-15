import React, { useState } from "react";
import "./Card.css"

interface CardData {
  _id: string;
  name: string;
  email: string;
  phone: number;
}

interface CardProps {
  cardData: CardData;
  onDelete: (id: string) => void;
  onUpdate: (updatedCard: CardData) => void;
}

export const Card: React.FC<CardProps> = ({ cardData, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState<CardData>({ ...cardData });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    onUpdate(editedCard);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="card-editing-component">
          <input
            type="text"
            value={editedCard.name}
            placeholder="Name"
            onChange={(e) => setEditedCard({ ...editedCard, name: e.target.value })}
          />
          <input
            type="email"
            value={editedCard.email}
            placeholder="Email"
            onChange={(e) => setEditedCard({ ...editedCard, email: e.target.value })}
          />
          <input
            type="tel"
            value={editedCard.phone.toString()} // Ensure number is treated as string for input
            placeholder="Number"
            onChange={(e) => setEditedCard({ ...editedCard, phone: Number(e.target.value) || 0 })}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="card-component">
          <h3 id="card-detail">Name : {cardData.name}</h3>
          <p id="card-detail">Email : {cardData.email}</p>
          <p id="card-detail">Number : {cardData.phone}</p>
          <button style={{ backgroundColor: "#d8572a" }} id="card-btn" onClick={handleEdit}>Edit</button>
          <button id="card-btn" onClick={() => onDelete(cardData._id)}>Delete</button>
        </div>
      )}
    </>
  );
};
