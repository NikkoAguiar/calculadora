$(document).ready(function(){

    function calcular(){
        let numeroGravado = [];
        $('#1').click(function(e){
            let numero1 = 1;
            $('<b>1</b>').appendTo('#texto');
            numeroGravado += parseInt(numero1);
            console.log(numeroGravado);
        })
    
        $('#2').click(function(e){
            let numero2 = 2;
            $('<b>2</b>').appendTo('#texto');
            numeroGravado = parseInt(numero2);
            console.log(numeroGravado);
        })

        $('#3').click(function(e){
            let numero3 = $('<b>3</b>');
            $(numero3).appendTo('#texto');
            numeroGravado += $(parseInt(numero3)).val();
            console.log(numeroGravado);
        })

        $('#4').click(function(e){
            let numero4 = $('<b>4</b>');
            $(numero4).appendTo('#texto');
            numeroGravado += $(parseInt(numero4)).val();
            console.log(numeroGravado);
        })

        $('#5').click(function(e){
            let numero5 = $('<b>5</b>');
            $(numero5).appendTo('#texto');
            numeroGravado += $(parseInt(numero5)).val();
            console.log(numeroGravado);
        })

        $('#6').click(function(e){
            let numero6 = $('<b>6</b>');
            $(numero6).appendTo('#texto');
            numeroGravado = $(parseInt(numero6)).val();
            console.log(numeroGravado);
        })

        $('#7').click(function(e){
            let numero7 = $('<b>7</b>');
            $(numero7).appendTo('#texto');
            numeroGravado += $(parseInt(numero7)).val();
            console.log(numeroGravado);
        })

        $('#8').click(function(e){
            let numero8 = $('<b>8</b>');
            $(numero8).appendTo('#texto');
            numeroGravado += $(parseInt(numero8)).val();
            console.log(numeroGravado);
        })

        $('#9').click(function(e){
            let numero9 = $('<b>9</b>');
            $(numero9).appendTo('#texto');
            numeroGravado += $(parseInt(numero9)).val();
            console.log(numeroGravado);
        })

        $('#0').click(function(e){
            let numero0 = $('<b>0</b>');
            $(numero0).appendTo('#texto');
            numeroGravado += $(parseInt(numero0)).val();
            console.log(numeroGravado);
        })

        $('#virgula').click(function(e){
            let virgula = $('<b>.</b>');
            $(virgula).appendTo('#texto');
            numeroGravado += $(virgula).val();
            console.log(numeroGravado);
        })

        $('#somar').click(function(e){
            let somar = $('<b>+</b>');
            $(somar).appendTo('#texto');
            numeroGravado += $(somar).val();
            console.log(numeroGravado);
        })

        $('#subtrair').click(function(e){
            let subtrair = $('<b>-</b>');
            $(subtrair).appendTo('#texto');
            numeroGravado += $(subtrair).val();
            console.log(numeroGravado);
        })

        $('#multiplicar').click(function(e){
            let multiplicar = $('<b>*</b>');
            $(multiplicar).appendTo('#texto');
            numeroGravado += $(multiplicar).val();
            console.log(numeroGravado);
        })

        $('#dividir').click(function(e){
            let dividir = $('<b>/</b>');
            $(dividir).appendTo('#texto');
            numeroGravado += $(dividir).val();
            console.log(numeroGravado);
        })

        $('#limpar').click(function(e){
            $('#texto').empty('p');
            numeroGravado = 0;
        })
    }

    calcular();
})