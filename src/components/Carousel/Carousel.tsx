import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
  return (
    <Carousel style={{background: "black"}}>
      <Carousel.Item interval={3000} style={{height: "40rem"}}>
        <img
          className=" d-block  w-100"
          src="https://cdn.acritica.net/upload/dn_noticia/2019/09/1567783836.jpg"
          alt="First slide"
          style={{display: "flex", position: 'relative', bottom: "5rem"}}


        />
        
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{height: "40rem"}}>
        <img
          className="d-block w-100 "
          src="http://blog.dubstore.com.br/wp-content/uploads/2018/08/image_1347_0.jpg"
          alt="Second slide"
          style={{display: "flex", position: 'relative', bottom: "5rem"}}

        />
    
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{height: "40rem"}}>
        <img
          className="d-block w-100"
          src="https://pordentrodeminas.com.br/wp-content/uploads/2019/07/como-lavar-o-carro-maneira-certa-economica.jpg"
          alt="Third slide"
          style={{display: "flex", position: 'relative', bottom: "5rem"}}

        />
     
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
