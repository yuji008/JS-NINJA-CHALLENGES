
(function(){
    function myFunction() {
        var number2 = 20;
        var number1 = 10;
        console.log( 'Na função `myFunction`, o primeiro número é', number1 );
        console.log( 'Na função `myFunction`, o segundo número é', number2 );
        return number1 + number2;
    }

    })();


(function (){
    function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
        return number1 + number2;
        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
    };
    return sum();
}

})();


(function(){
    function myFunction3() {
        var number1 = 40;
        var number2 = 50;
        console.log( 'A soma de 40 e 50 é igual a', sum() );
        console.log( 'Na função myFunction3, number1 é igual a', number1 );
        return sum();
        function sum() {
            return number1 + number2;
        };
}
})();

function calculator( x, y ) {
    return function( callback ){
        return callback( x, y );
    }
}


var sum = calculator(10, 4)




console.log( 'O resultado da soma é:',  sum(function( x, y ){
    return x + y;
}));


var subtraction = calculator(10, 4)
var multi = calculator(10, 2)
var div = calculator(10, 5)
var mod = calculator(10, 3)


console.log( 'O resultado da subtração é:', subtraction(function( x, y ){
    return x - y;
}) );

console.log( 'O resultado da multiplicação é:', multi(function( x, y ){
    return x * y;
}) );

console.log( 'O resultado da divisão é:', div(function( x, y ){
    return x / y;
}) ); 

console.log( 'O resto da divisão é:', mod(function( x, y ){
    return x % y;
}) );
