# Replace String If

This is a transform stream. If the condition passed evaluates to true, a string replace is run on the stream.


## Installation

    npm install replace-string-if

## Usage


    var condition = function () { return true; };
    var match = 'expression';
    var replacement = 'newexpression';
    
    var replaceStringIf(condition(), match, replacement);
    

    
   