import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import EachPizza from '../eachpizza';

const Tab2 = () => {
  const [listPizzas, setListPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/pizzas');
        setListPizzas(res.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (deletedId) => {
    // Update the pizza list after successful deletion
    const updatedPizzas = listPizzas.filter((pizza) => pizza.id !== deletedId);
    setListPizzas(updatedPizzas);
  };

  if (!listPizzas) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-7 gap-4">
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Name</div>
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Description</div>
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Image URL</div>
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Price (Small)</div>
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Price (Medium)</div>
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Price (Large)</div>
        <div className="py-2 px-4 font-bold text-orange-500 text-lg">Action</div>
      </div>
      {listPizzas.map((each, index) => (
        <EachPizza data={each} key={index} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Tab2;

