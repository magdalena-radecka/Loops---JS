// Author: Magdalena Radecka (magdalenaradecka0@gmail.com)

var str_to_check_1 = "taco cat";
var str_to_check_2 = "niebieski";

function Exercise_4(char) {

    char = char.replace(/\s+/g, '');
    result = "True"

    for (let i = 0; i < char.length; i++) {

        if (char[i].toLowerCase() != char[char.length - 1 - i].toLowerCase()) {
            result = "False"
            break
        }
    }

    console.log("Is the same for word", char, ":", result)
}

Exercise_4(str_to_check_1)
Exercise_4(str_to_check_2)