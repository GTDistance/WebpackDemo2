const hello = require('./hello');
const test = require('./exportsTest')
import './index.css'
import { a, b } from './exportTest'

document.querySelector('#root').appendChild(hello());
console.info(test, a, b)
