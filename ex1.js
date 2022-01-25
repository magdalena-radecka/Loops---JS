// Author: Magdalena Radecka (magdalenaradecka0@gmail.com)

var arr_to_check = [10, -40, 0, 666, 5050, -41, 653, 123, 5932, -43, -1010];

function Exercise_1(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var mean = 0;
    var even = 0;
    var odd = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

        sum = sum + arr[i]
        mean = sum / arr.length

        if (arr[i] % 2 == 0) {
            even = even + 1;
        }

        if (arr[i] % 2 != 0) {
            odd = odd + 1;
        }
    }

    console.log("Maximum value:", max);
    console.log("Minimum value:", min);
    console.log("Sum:", sum);
    console.log("Average value:", mean);
    console.log("Number of even numbers:", even);
    console.log("Number of odd numbers:", odd);
}

Exercise_1(arr_to_check)