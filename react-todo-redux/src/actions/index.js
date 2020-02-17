export const ADD_TODO ='ADD_TODO';
// 외부 서버에서 to-do-list를 불러온다.
export const LOAD_TODO_LIST ='LOAD_TODO_LIST';
// load된 to-do-list를 랜더링 한다.
export const RENDER_TODO_LIST ='RENDER_TODO_LIST';

export function addToDo(title){
    return {
        type: ADD_TODO,
        toDoItem:{
            _id: (new Date().getTime).toString(),
            title
        }
    };
}

export function loadToDoList(){
    return {
        type: LOAD_TODO_LIST
    }
}