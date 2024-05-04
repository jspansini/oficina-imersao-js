const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe('horasPorProjeto', () => {
    test("----", () => {
        const listaDeFuncionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr',
        ];

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(resultado).toEqual(72)
    })
})