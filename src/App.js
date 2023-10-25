import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Alert, Breadcrumb, Card, Form, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com"/>
                  <Form.Text className='text-primary'>
                    We'll never share you email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Login</Button>
          </Form>
          <Card className='mb-3'>
            <Card.Img src="https://picsum.photos/200/50"/>
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
        </container>
      </header>
    </div>
  );
}

export default App;
