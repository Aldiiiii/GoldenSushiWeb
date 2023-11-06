import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <div id="landing">
    <Carousel fade>
      <Carousel.Item >
        <img src="./src/assets/images/carousel-sushi1.jpg" style={{height: "100vh", width: "100vw"}} alt="" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src="./src/assets/images/carousel-sushi2.jpg" style={{height: "100vh", width: "100vw"}} alt="" />

      </Carousel.Item>
      <Carousel.Item>
      <img src="./src/assets/images/carousel-sushi3.jpg" style={{height: "100vh", width: "100vw"}} alt="" />

      </Carousel.Item>
      <Carousel.Item>
        <img src="./src/assets/images/carousel-sushi4.jpg" style={{height: "100vh", width: "100vw"}} alt="" />

      </Carousel.Item>
    </Carousel>
    </div>
  );  
}

export default CarouselFadeExample;