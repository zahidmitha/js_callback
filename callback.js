// Callbacks are NOT users of the "this" keyword.
// See http://www.quirksmode.org/js/this.html for use of "this"

// http://stackoverflow.com/questions/3127429/javascript-this-keyword

//http://recurial.com/programming/understanding-callback-functions-in-javascript/

//  http://www.impressivewebs.com/callback-functions-javascript/

// Simple JQuery example:

$('#element').fadeIn('slow', function() {
  // callback function

});

// i.e. a callback is when another function is passed as the argument of one function
// When teh fadeIn method is complete, THEN the callback function is executed.

// Custom JS callback

function mySandwich(param1, param2, callback) {
  alert("Started eating my sandwich.\n\nIt has" + param1 " , " + param2)
  callback();

}

mySandwich("lemon", "mustard", function() {
  alert("Finished with my sandwich.");
});

// callbacks can be optional-we just have to do this:

function mySandwich(param1, param2, callback) {
  alert("Started eating my sandwich. It has" + param1 + " , " + param2)
  if (callback) {
    callback();
  }
}

mySandwich('ham', 'salmon');

// otherwise it'll throw an error when we don't pass the callback as a third argument


// validate it's a function

function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', 'vegetables');

// Notice that the function now includes a test using the typeof operator, to ensure that whatever is passed is actually a function. The function call has a third argument passed, but it’s not a function, it’s a string. So the test using typeof ensures no error occurs.


// Timing-whiel the callback always starts executing last IF it's placed last in the function,it may finish BEFORE other functions are complete (i.e. for stuff that takes a little longer like ajax)

unction mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);

    $('#sandwich').animate({
        opacity: 0
    }, 5000, function() {
        // Animation complete.
    });

    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});

// Here, the callback will finish BEFORE animate finishes, even though animate started first. We solve this by nesting it IN the animate method



