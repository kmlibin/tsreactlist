import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import {Droppable} from 'react-beautiful-dnd'
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver? 'dragactive' : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todosHeading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
          className={`todos remove ${snapshot.isDraggingOver? 'dragcomplete' : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todosHeading">Completed Tasks</span>
            {completedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
