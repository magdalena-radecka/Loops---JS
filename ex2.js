// Author: Magdalena Radecka (magdalenaradecka0@gmail.com)

var n_to_check_1 = 1;
var n_to_check_2 = 5;
var n_to_check_3 = 8;

function Exercise_2(n) {

    var sum = 0;

    for (let i = 0; i <= n; i++) {

        sum = sum + i
    }


    console.log("Sum of", n, "first integers:", sum);
}

Exercise_2(n_to_check_1)
Exercise_2(n_to_check_2)
Exercise_2(n_to_check_3)