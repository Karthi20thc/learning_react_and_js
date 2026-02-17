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