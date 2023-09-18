import React from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';

const EachPizza = ({ data, onDelete }) => {
  const id = data.id;

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/pizzas/${id}`);
      onDelete(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-7 gap-4 my-6">
      <div className="text-xl ms-3 underlin flex items-center">{data.name}</div>
      <div className="text-xl flex items-center">{data.description}</div>
      <div className="text-xl flex items-center"><img src={data.imageUrl} alt="" /></div>
      <div className="text-xl flex items-center">{data.priceS}</div>
      <div className="text-xl flex items-center">{data.priceM}</div>
      <div className="text-xl flex items-center">{data.priceL}</div>
      <div className="flex items-center">
        <Button icon="pi pi-delete-left" label="Delete" severity="danger" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default EachPizza;
