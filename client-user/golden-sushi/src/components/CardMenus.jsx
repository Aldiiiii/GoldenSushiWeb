import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardMenus({item}) {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgUrl} className='mt-2' />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>        
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMenus;