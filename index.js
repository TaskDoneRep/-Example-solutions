// Задание 1
// Написать функцию isPowerOfTwo, которая указывает, является ли аргумент степенью двойки. Возвращает true или false. Реализовать с помощью рекурсии. Пример:
// isPowerOfTwo(1024); // true
// isPowerOfTwo(1023); // false



function isPowerOfTwo(n) {
    if (n === 1) {
        return true;
    }
    if (n < 1 || n > 1 && n < 2) {
        return false;
    }
    if (n > 1) {
        return isPowerOfTwo(n / 2);
    }
}


// Задание 2
//Написать функцию increment, которая возвращает аргумент увеличеный на еденицу и количество вызовов функции. Сделать с помощью замыкания, в глобальной области видимости должна быть только переменная increment. Пример:
// increment(10); // { value: 11, calls: 1}
// increment(14); // { value: 15, calls: 2}

var increment = (function makeCounter() {
  var currentCount = 1;
  return function(n){
    return {
      value: n+1,
      calls: currentCount++,
    };
  };
})();




// You notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.
// For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
// You read the first sentence:
// "r slkv mlylwb wvxlwvh gsrh nvhhztv"
// After a few minutes you manage to decode it:
// "i hope nobody decodes this message"
// Create a function that will instantly decode any of these messages

 function decode(message){
  var normAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  
  var backAlph =  normAlph.slice().reverse();
  var massive = message.split("");
   
  return massive.map(function(item){
    var ind = normAlph.indexOf(item);

     if (item != ' ')
          {return backAlph[ind]}
     else {return item}
       }).join("");
  } 


// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi

  function remove(s, n){
    var newArr = s.split('');
    var replacedSigns = 0;
    var filterArr = newArr.filter(function(sign) {
        if (replacedSigns >= n )  return true
        if (sign === '!') replacedSigns++;
        
        return  sign !="!";
    });
    var removed = filterArr.join("");
    return removed;
}

//Создать модель автомобиля. Он предназначен для водителя плюс ещё 3 пассажира (4 человека). Водитель всегда считается первым в машине. Машина это объект `car = {}`. 

var car = {
    color: "white",
    dours: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],
    put: function put() {
        if (this.passengers.length < 1) {
            this.passengers.push('Driver');
        } else if (this.passengers.length < car.seats) {
            this.passengers.push(true);
        }
    },

    land: function land() {
        this.passengers.pop();
    },

    drive: function drive(newSpeed) {
        if (newSpeed === undefined && this.passengers[0]) {
            this.speed = this.defaultSpeed;
        } else if (newSpeed > this.maxSpeed && this.passengers[0]) {
            this.speed = this.maxSpeed;
        } else if (!this.passengers[0]) {
            return;
        } else
            return this.speed = newSpeed;
    }
};


// Поиск вхождения одного прямоугольника в другой.
// Прямоугольники должны быть представлены в виде объектов с интерфейсом

// {
//   top: (Integer),
//   left: (Integer),
//   width: (Integer),
//   height: (Integer)
// }
// где
// top, left - координаты верхнего левого угла
// width, height - длина и ширина соответственно в единицах системы координат. Они всегда неотрицательные.


function defineIntersection(rectangle_R1, rectangle_R2) {
    if ((rectangle_R1.top + rectangle_R1.width > rectangle_R2.top) &&
        (rectangle_R1.top < rectangle_R2.top + rectangle_R2.width)) {
        result = true;
    }
    if ((rectangle_R1.left + rectangle_R1.height > rectangle_R2.left) &&
        (rectangle_R1.left < rectangle_R2.left + rectangle_R2.height)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};