//describe nome da funcao ou classe que estamos testando
//test -> funcao que realiza nosos teste

//obrigatorio describe e test

//const modulo = require( String id: "../hora/valorHora")

const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcularValorPorHora', () => {
    test('Deve retornar o salario 1412 retorna 6.42 por hora', () => {
        const rendaMensal = 1412 //cenario

        const resultado = calcularValorPorHora(rendaMensal) //comportamento

        expect(resultado).toEqual(9) // esperado

    })
})