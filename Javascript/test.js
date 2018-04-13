var car1 ={
    brand: 'Toyota',
    model:'Vios'
    
}

var car2 ={
    brand: 'Toyota',
    model:'Camry'
}

var bmx ={
    brand: 'BMX',
    model:'X'

}

var bmxa ={
    brand: 'BMX',
    model:'X',
    noOfWheels: 1
}


var PersonA ={
    firstName: 'Kenneth',
    lastName: 'Phang',
    gender: 'Male',
    age: 40,
    bloodtype: '0',
    transport: [car1, car2, bmx]

}

var PersonB ={
    firstName: 'Nola',
    lastName: 'Ting',
    gender: 'Female',
    age: 40,
    bloodtype: '0',
    transport: [bmx]
    hello: function(){
        console.log('Hi there');
    }

}

PersonB.hello();

console.log(PersonA.firstName);
console.log();
var pcar1 = PersonA.transport[0];
var car1Model = pcar1.model;
console.log(pcar1);
console.log(car1Model);