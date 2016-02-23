var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');

// some test data objects
var topStats =  [{theme:'panel-warning',total:{style:'panel-default',text:'20'},caption:{captionStyle:'',text:'This is the caption'}}
                ,{theme:'panel-danger',total:{style:'panel-default',text:'50'},caption:{captionStyle:'',text:'This is the caption'}}
                ];
                if (typeof window !== 'undefined') {
                    window.React = React;
                }

ReactDOM.render(Routes, document.getElementById("page-content"));
