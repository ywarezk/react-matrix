/**
Modules
we can split our project to multiple files

every file can decide what to expose (public)

every file can decide what to import from other file
 */
 
import MyPerson, { hello as myHello, sayHello } from './a';
import React, {useState, useEffect} from 'react';

// import { sayHello } from './a';

console.log(hello);