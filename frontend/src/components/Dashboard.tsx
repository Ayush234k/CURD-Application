import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Card } from "./Card";
import { handleAdd, handleDelete, handleUpdate, getCards } from "./connection/api";

interface CardData {
  _id: string;
  name: string;
  email: string;
  phone: number;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const { data } = await getCards();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const addCard = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("All fields are required!");
      return;
    }
    
    try {
      const { data } = await handleAdd({ name, email, phone });
      setCards([...cards, data]);
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const deleteCard = async (id: string) => {
    await handleDelete(id);
    setCards(cards.filter((card) => card._id !== id));
  };

  const updateCard = async (updatedCard: CardData) => {
    await handleUpdate(updatedCard._id, updatedCard);
    setCards(cards.map((card) => (card._id === updatedCard._id ? updatedCard : card)));
  };

  return (
    <div id="d-container">
      <div id="d-add-panel">
        <h1>Dashboard</h1>
        <input id="d-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input id="d-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input id="d-input" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button id="d-add-btn" onClick={addCard}>Add</button>
      </div>

      <div id="d-card-panel">
        {cards.map((card) => (
          <Card key={card._id} cardData={card} onDelete={deleteCard} onUpdate={updateCard} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
