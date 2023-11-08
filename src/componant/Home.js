import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const [link,setLink]=useState("www.google.com")
  return (
    <div className='imagetemple'>
      <div className='container-fluid mx-2 '>
    <div className='row mt-5 mx-2'>
        <div className='buttonimage col-md-3'>
            <Button className='btn btn-worning w-100'>Men</Button>
            <Button className='btn btn-worning w-100'>Men</Button>
            <Button className='btn btn-worning w-100'>Men</Button>
            <Button className='btn btn-worning w-100 mb-4'>Men</Button>

   </div>
   
      <div className='col-md-9'>
      <div className='cartcontain'>
    
        <Card style={{ width: '18rem'}}>
        <Carousel>  
        <Carousel.Item><Card.Img variant="top" src='images/badrinath.jpeg' /></Carousel.Item>
        <Carousel.Item><Card.Img variant="top" src='images/badrinath1.jpeg'  /></Carousel.Item>
        <Carousel.Item><Card.Img variant="top" src='images/badrinath2.jpeg' /></Carousel.Item>
  </Carousel>
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Location:Medchal</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <a href='https://www.google.com/maps/dir//Plot+No.+33%2F34,+Dakshin+Ke+Badrinath,+Hyderabad,+Sai+Baba+Enclave,+GPR+Housing+Venture,+Banda+Mailaram,+Mulug,+Telangana+502336/@17.692447,78.4944918,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bcb87940acb230f:0xdfceb8acbf8a8b11!2m2!1d78.4970667!2d17.692447!3e0?entry=ttu' target='_blank' rel='noopener noreferrer'>
        <Button variant="primary">Maps</Button>
        </a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='images/thrillcity.jpeg' />
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Address: railway station, 1233, PV Narasimha Rao Marg, opp. to Sanjeeviah Park, Hussain Sagar, Begumpet, Hyderabad, Telangana 500003</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <a href='https://www.google.com/maps/dir/17.4589832,78.4183459/thrill+city+hyderabad/@17.4471356,78.4105937,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb911a5cd4f98f:0x38ee636dfb68f15d!2m2!1d78.4744059!2d17.4354067?entry=ttu'>
        <Button variant="primary">Maps</Button>
        </a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='images/jagannath.jpg' />
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Location:Medchal</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <Button variant="primary">Maps</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='images/surendrapuri.jpg' />
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Location:Medchal</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <Button variant="primary">Maps</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/badrinath.jpeg' />
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Location:Medchal</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <Button variant="primary">Maps</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/badrinath.jpeg' />
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Location:Medchal</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <Button variant="primary">Maps</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/badrinath.jpeg' />
      
      <Card.Body>
        <Card.Title>Dakshina Badrinath</Card.Title>
        <Card.Text>
          <ul>
            <li>Location:Medchal</li>
            <li>Distance: 25 km from Hyderabad</li>
            <li>Location:Medchal</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Click Here More Details...</Button>
        <Button variant="primary">Maps</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
   </div>
    </div>
    </div>
  )
}

export default Home