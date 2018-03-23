# RB88App

To resolve PropTypes error
Step 1) Navigate to {project dir}/node_modules/react/index.js
Step 2) Append this to the file
                module.exports.PropTypes = require('prop-types');
                let createClass;
                Object.defineProperty(module.exports, 'createClass', {
                get: function() {
                if (!createClass) {
                createClass = require('create-react-class').bind(module.exports);
                }
                return createClass;
                }
                });

