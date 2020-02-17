import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Redux ToDoList</h1>
            <Navigation/>
            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;