let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(array);

// arr.splice(starting_index, count_of_elements_to_delete_after_starting_index)

array.splice(5, 2);

console.log(array); // [1,  2,  3,  4,  5, 8,  9, 10, 11, 12, 13, 14 ]
