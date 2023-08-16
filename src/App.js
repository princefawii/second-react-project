import Card from 'react-bootstrap/Card';
import './App.css';
import jsonObject from './product';
import Description from './Description';
import Name from './Name';
import Price from './Price';
import Image from './Image';
let normalObj = JSON.parse(jsonObject);
let myName = "Akeeb"

function App() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={normalObj.image} />
      <Card.Body>
        <Card.Title><Name name={normalObj.name}/></Card.Title>
        <Card.Text>
          <Description description={normalObj.description}/>.
        </Card.Text>
        <Card.Text>
        <Price price={normalObj.price}/>
        </Card.Text>
        <p>Hello {myName}!</p>
      </Card.Body>
    </Card>    
    </div>
  );
}

export default App;
