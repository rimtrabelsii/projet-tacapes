import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Boutiquedetails() {
  const params=useParams()
  const boutiques= useSelector((state)=>state.boutique?.boutiquelist);
  const boutique=boutiques?.filter((el)=>el._id==params.id)[0];
  console.log(boutique)
  return (
    <div>
      <h1>{boutique?.name}</h1>
    </div>
  )
}

export default Boutiquedetails