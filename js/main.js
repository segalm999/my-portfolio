import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title':"Work Example #1 - InvesTrack",
    'image': {
      'desc':"example screenshot of a project involving code",
      'src':"images/example1.png",
      'comment':""
    }
  },
  {
    'title':"Work Example #2 - Quantopian Investment Strategies",
    'image': {
      'desc':"serverless portfolio",
      'src':"images/Quantopian.JPG",
      'comment':""
    }
  },
  {
    'title':"Work Example #3 - Delivery Optimizaton Framework",
    'image': {
      'desc':"example screenshot of a project involving cats",
      'src':"images/example3.png",
      'comment':""
    }
  },

]
ReactDOM.render(<ExampleWork work={myWork} />,document.getElementById('example-work'));
