import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <div id="landing">
    <Carousel fade>
      <Carousel.Item >
        <img src="https://png.pngtree.com/background/20230520/original/pngtree-sushi-pictures-on-your-phone-picture-image_2670262.jpg" style={{height: "100vh", width: "100vw"}} alt="" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://images.deliveryhero.io/image/fd-sg/LH/zn4e-hero.jpg" style={{height: "100vh", width: "100vw"}} alt="" />

      </Carousel.Item>
      <Carousel.Item>
      <img src="https://wallpaperaccess.com/full/412959.jpg" style={{height: "100vh", width: "100vw"}} alt="" />

      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i0.wp.com/www.mysweetescapediary.com/wp-content/uploads/2018/01/genki-sushi-2.jpg?fit=4608%2C3456&ssl=1" style={{height: "100vh", width: "100vw"}} alt="" />

      </Carousel.Item>
    </Carousel>
    </div>
  );  
}

export default CarouselFadeExample;