$(document).ready(function(){

    let n1 = [], /*n2, */op, res = 0;

    $('button[name=btn]').click(function(){
        $('#texto').val($('#texto').val() + $(this).val());
        console.log($('#texto').val());
    })

    $('button[name=C]').click(function(){
        $('#texto').val('');
    })

    $('button[name=soma]').click(function(){
        if($('#texto').val() != ''){
            n1.push(parseFloat($('#texto').val()));
            console.log(n1)
            $('#texto').val($('#texto').val() + '+');
            op = "soma";
            for(let i = 1; i < n1.length; i++){
                res += parseFloat(n1[i]);
            }
        }else{
            alert('Insira um número primeiro!');
        }
    })
/*
    $('button[name=subtracao]').click(function(){
        if($('#texto').val() != ''){
            n1 = parseFloat($('#texto').val());
            $('#texto').val('');
            op = "subtração";
        }else{
            alert('Insira um número primeiro!');
        }
    })

    $('button[name=multiplicacao]').click(function(){
        if($('#texto').val() != ''){
            n1 = parseFloat($('#texto').val());
            $('#texto').val('');
            op = "multiplicação";
        }else{
            alert('Insira um número primeiro!');
        }
    })

    $('button[name=divisao]').click(function(){
        if($('#texto').val() != ''){
            n1 = parseFloat($('#texto').val());
            $('#texto').val('');
            op = "divisão";
        }else{
            alert('Insira um número primeiro!');
        }
    })
*/
    $('button[name=resultado]').click(function(){
        n2 = parseFloat($('#texto').val());
        $('#texto').val('');

        if(op == "soma"){
            $('#texto').val(res);
            console.log('resultado: ',res)
        }else if(op == "subtração"){
            $('#texto').val(n1 - n2);
        }else if(op == 'multiplicação'){
            $('#texto').val(n1 * n2);
        }else if(op == 'divisão'){
            $('#texto').val(n1 / n2);
        }
    })
})