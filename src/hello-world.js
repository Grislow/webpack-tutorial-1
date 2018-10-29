import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from lodash;
import './hello-world.scss';

console.log('Hello World');

const heading = new Heading();
heading.render('Hello world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

