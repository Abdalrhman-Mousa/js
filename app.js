//Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false
// let num =0;
// function lessThanOrEqualToZero(num) {
//     if (num <= 0) {
//         return true;
//     } else {
//         return false;
//     }
//     }

// console.log(lessThanOrEqualToZero(num));

//=============================================================================================

//Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)


// let num = 12;
// function nextInt(num) {
//     return num + 1;
// }
// console.log(nextInt(num));

//=============================================================================================

//Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers

// let arr = ["1a", "a", "2b", "b"];
// function numInStr(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes("1") || arr[i].includes("2") ) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(numInStr(arr));

//=============================================================================================

//Develop a JS Code to check if a number is even or odd 


// let num = 5;
// function isEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// console.log(isEvenOrOdd(num));

//=============================================================================================

//

//=============================================================================================


//Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]

// let arr = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
// function removeDuplicates(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(removeDuplicates(arr));

//=============================================================================================


////Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”] by forEach

// let arr = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
// function removeDuplicates(arr) {
//     let newArr = [];
//     arr.forEach((element) => {
//         if (!newArr.includes(element)) {
//             newArr.push(element);
//         }
//     });
//     return newArr;
// }
// console.log(removeDuplicates(arr));

//=============================================================================================

    
            
    //an array of series into an array of {id, title} pairs using forEach function.

    // let newArr = [ {
    //     "id": 70111470,
    //     "title": "Die Hard",
    //     "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    //     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    //     "rating": [4.0],
    //     "bookmark": []
    // },
    // {
    //     "id": 654356453,
    //     "title": "Bad Boys",
    //     "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    //     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    //     "rating": [5.0],
    //     "bookmark": [{ id: 432534, time: 65876586 }]
    // },
    // {
    //     "id": 65432445,
    //     "title": "The Chamber",
    //     "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    //     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    //     "rating": [4.0],
    //     "bookmark": []
    // },
    // {
    //     "id": 675465,
    //     "title": "Fracture",
    //     "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    //     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    //     "rating": [5.0],
    //     "bookmark": [{ id: 432534, time: 65876586 }]
    // }];

    // function getMovieIdAndTitle(newArr) {
    //     let movieIdAndTitle = [];
    //     newArr.forEach((element) => {
    //         movieIdAndTitle.push({ id: element.id, title: element.title });
    //     });
    //     return movieIdAndTitle;
    // }
    // console.log(getMovieIdAndTitle(newArr));

    //=============================================================================================


    //Use map() now to implement the same previous functionality

// let newArr = [ {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }];

//     function getMovieIdAndTitle(newArr) {
//         let movieIdAndTitle = newArr.map((element) => {
//             return { id: element.id, title: element.title };
//         });
//         return movieIdAndTitle;
//     }
//     console.log(getMovieIdAndTitle(newArr));

//=============================================================================================

//Use filter() to return the series with a rating under 5.0
// let newArr = [ {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }];

//     function getMovieIdAndTitle(newArr) {
//         let movieIdAndTitle = newArr.filter((element) => {
//             return element.rating < 5.0;
//         });
//         return movieIdAndTitle;
//     }
//     console.log(getMovieIdAndTitle(newArr));

//=============================================================================================


