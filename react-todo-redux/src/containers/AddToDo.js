import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


// 유저가 submit 하면 이 컴포넌트가 액션함수인 addToDo를 생성하는 작업을 리듀서인 toDoApp에 전송
let AddToDo = ({ dispatch }) => {
  let input;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

// 컴포넌트에 redux store를 연동해줄 때는 connect 함수 사용
AddToDo = connect()(AddToDo);

export default AddToDo;