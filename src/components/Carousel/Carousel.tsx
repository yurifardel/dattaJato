import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
  return (
    <Carousel style={{background: "black"}}>
      <Carousel.Item interval={2000} style={{height: "45rem"}}>
        <img
          className=" d-block  w-100"
          src="https://i.pinimg.com/originals/af/ab/46/afab4635c7491943d71528a650e95673.gif"
          alt="First slide"
          style={{display: "flex", position: 'relative', bottom: "7rem"}}


        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height: "45rem"}}>
        <img
          className="d-block w-100 "
          src="https://i.pinimg.com/originals/16/2c/df/162cdfa326e0640b3bebf604d36fc6b3.gif"
          alt="Second slide"
          style={{display: "flex", position: 'relative', bottom: "7rem"}}

        />
    
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height: "45rem"}}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/cf/d2/eb/cfd2ebac049f3bcc04016c877415503e.gif"
          alt="Third slide"
          style={{display: "flex", position: 'relative', bottom: "7rem"}}

        />
     
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
