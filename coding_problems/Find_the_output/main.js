for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// ------------------------------------------------------

let x = 10;

(function () {

    console.log(x);

    var x = 20;

})();

// ------------------------------------------------------

const obj = {

    name: "abc",

    address: {

        street: "j.k. street",

        pin: 700001,

        state: "WB"

    }

}

const obj2 = obj;

obj.address.pin = 700002;

console.log(obj2);

