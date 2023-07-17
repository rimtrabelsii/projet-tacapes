// import React, { useEffect } from 'react'
import '../Boutiquecard.css';
// import { deleteboutique } from '../redux/boutiqueslice';
import { useDispatch } from 'react-redux';

// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';

function Boutiquecard({boutique,ping,setping}) {
  const dispatch=useDispatch();
  // useEffect(() => {
  //   const buttonsWrapper = document.querySelector(".map");
  //   const slides = document.querySelector(".inner");
    
  //   buttonsWrapper.addEventListener("click", e => {
  //     if (e.target.nodeName === "BUTTON") {
  //       Array.from(buttonsWrapper.children).forEach(item =>
  //         item.classList.remove("active")
  //       );
  //       if (e.target.classList.contains("first")) {
  //         slides.style.transform = "translateX(-0%)";
  //         e.target.classList.add("active");
  //       } else if (e.target.classList.contains("second")) {
  //         slides.style.transform = "translateX(-33.33333333333333%)";
  //         e.target.classList.add("active");
  //       } else if (e.target.classList.contains('third')){
  //         slides.style.transform = 'translatex(-66.6666666667%)';
  //         e.target.classList.add('active');
  //       }
  //     }
  //   });
    
  // }, [])
  
  return (
 
//     <div className="center">
//     <div className="wrapper">
//       <div className="inner">
       
        
        
        
//         <div className="card">
//           <img src={boutique?.image}  />
//          <div className="content">
           
// <h1> {boutique?.name } </h1>
           
//            <bouton className="butt">consulter le boutique </bouton>
//          </div>
//         </div>
       
//     <div className="map">
//       <button className="active first" />
//       <button className="second" />
//       <button className="third" />
//       {/* <button onClick={()=>{dispatch(deleteboutique(boutique?._id) , setping(!ping))}} > x  </button> 
//        <editboutique boutique={boutique} ping={ping} setping={setping} /> */}
//     </div>
//     </div>
//   </div> 
//   </div> 
// {/* <div>
// {/* <Card style={{ width: '18rem' }}> */}
//       <Card.Img variant="top" src={boutique?.image}  />
//       <Card.Body>
//         <Card.Title>{boutique?.name}</Card.Title>
//         <Link to={`/boutique/${boutique?._id}`}><Button>consulter le boutique</Button></Link>
        
    
//       </Card.Body>
// </Card>



<div>
<article className="card">
  <img
    className="card__background"
    src={boutique?.image} alt="error "
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title"> {boutique?.name} </h2>
      
           
      <p className="card__description">
      {boutique?.category} </p>
      <p className="card__description">
      {boutique?.adresse} </p>
       
       
   
      
  
    <button class="card__button"> consulter le boutique</button>
  </div>
  </div>
</article>
</div>
)
}


export default Boutiquecard