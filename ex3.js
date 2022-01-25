// Author: Magdalena Radecka (magdalenaradecka0@gmail.com)

var arr_to_check_1 = ["ala", "ma", "kota"]
var arr_to_check_2 = ["a", "b", "c"]
var arr_to_check_3 = ["jan", "kowalski"]

function Exercise_3(arr) {

    var longest_word = arr[0];
    var longest_word_length = arr[0].length;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length >= longest_word_length) {
            longest_word = arr[i];
            longest_word_length = arr[i].length;
        }

    }

    console.log("Longest word for array", arr, ":", longest_word);
}

Exercise_3(arr_to_check_1)
Exercise_3(arr_to_check_2)
Exercise_3(arr_to_check_3)