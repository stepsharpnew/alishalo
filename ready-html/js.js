const car = {
    model : 'Benz',
    color : 'red',
    engine : 3.5,
    showModel : function(color, engine){
        console.log(color);
        console.log(engine);
        // console.log(this.model);
    }
}


anoterCar = {
    model : 'Rols',
    color : 'Black',
    engine : 4.5,
}


// car.showModel.apply(anoterCar, [anoterCar.color, 'red']);


// car.showModel.call(anoterCar, [anoterCar.color, 'red']);


const bindFunc = car.showModel.bind(anoterCar)
bindFunc('red', '3.5555')
