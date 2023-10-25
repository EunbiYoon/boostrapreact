import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className='mb-3'>
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This an example of react boostrap cards</Card.Text>
            <Button>This is button</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active style={{color:"white"}}>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='primary'>This is a button</Alert>
        <Button>This is button</Button>
      </header>
    </div>
  );
}

export default App;
