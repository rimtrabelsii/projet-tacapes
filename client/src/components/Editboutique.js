import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editboutique } from '../redux/boutiqueslice';



function Editboutique({boutique, ping, setping}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
      name : boutique?.name,
      category : boutique?.category,
      adress: boutique?.adress, 
     proprietaire : boutique?.proprietaire,
     image:boutique?.image,

  })
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit this store
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit now</Modal.Title>
        </Modal.Header>
        <input type="text"  placeholder={ boutique?.name} onChange={(e)=> setedited({...edited,name : e.target.value})}/>
        <input type="text" placeholder={ boutique?.category} onChange={(e)=> setedited({...edited,category : e.target.value})}/>
        <input type="text" placeholder={boutique?.adress} onChange={(e)=> setedited({...edited,adress : e.target.value})}/>
       
     <input type="text" placeholder={boutique?.proprietaire} onChange={(e)=> setedited({...edited,proprietaire: e.target.value})}/>
     <input type="text" placeholder={boutique?.image} onChange={(e)=> setedited({...edited,image: e.target.value})}/>
       <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            dispatch(editboutique({id:boutique?._id, edited}));
            setping(!ping) ;
           handleClose();}}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Editboutique