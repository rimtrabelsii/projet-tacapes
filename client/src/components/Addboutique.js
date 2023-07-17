import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addboutique } from '../redux/boutiqueslice';
import { useDispatch } from 'react-redux';



function Addboutique({ping,setping}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [boutique, setboutique] = useState({ name:"",
category:"",
adresse:"",
image:"",
proprietaire:""})
const dispatch= useDispatch ();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add boutique</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique name</Form.Label>
        <Form.Control type="text" placeholder="Enter boutique name" onChange={(e)=>setboutique ({...boutique,name:e.target.value})} />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique category</Form.Label>
        <Form.Control type="text" placeholder="Enter boutique category" onChange={(e)=>setboutique ({...boutique,category:e.target.value})} />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique adress</Form.Label>
        <Form.Control type="text" placeholder="Enter boutique adress" onChange={(e)=>setboutique ({...boutique,adresse:e.target.value})} />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique image</Form.Label>
        <Form.Control type="text" placeholder="Enter boutique image" onChange={(e)=>setboutique ({...boutique,image:e.target.value})} />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique proprietaire</Form.Label>
        <Form.Control type="text" placeholder="Enter boutique proprietaire" onChange={(e)=>setboutique ({...boutique,proprietaire:e.target.value})} />  
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {dispatch(addboutique(boutique)); setping(!ping)  ;handleClose() } }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addboutique