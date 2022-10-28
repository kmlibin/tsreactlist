import React from 'react';
import { InputField } from './components/InputField';

import './App.css';


let name:string; 
let age: number | string; //union type
let hobbies: string[];

let pesonName: unknown //recommended instead of any

//function
let printName: (name:string) => void //return type where void is...number, string, etc. 'never' returns NOTHING. void returns undefined.

//tuple
let role: [number, string];

//object, use type or interface. it is a type of an alias. interface is the othe
type Person = {
  name: string;
  age?: number;
}

interface Guy extends Person{
  profession: string
}

//use types to combine 
type X = {
  a: string;
  b: number;
}

//now contains all of 'y' PLUS props from type X. This also works between types and interfaces
type Y = X & {
  c: string;
  d: number;
}

let y: Y = {
  a: 'lls',
  b: 4,
  c: 'ddas',
  d: 42
}


let person: Person = {
  name: 'Kell',
  age: 30
}

let lotsOfPeople: Person[];


const App: React.FC = () => {
  return (
    <div className="App">
      <span className= "heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
