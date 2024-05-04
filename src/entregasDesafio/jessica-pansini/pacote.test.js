const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe('pacote', () => {
    test("Deve retornar pacote básico quando o totalHorasPorProjeto for menor que 50", () => {
        const totalDeHorasPorProjeto = 49;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual("pacote_basico");
        //console.log(result)
    });

    test("Deve retornar pacote intermediário quando o totalHorasPorProjeto for menor ou igual a 100", () => {
        const totalDeHorasPorProjeto = 99;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual("pacote_intermediario");
        //console.log(result)
    });

    test("Deve retornar pacote premium quando o totalHorasPorProjeto for maior que 100", () => {
        const totalDeHorasPorProjeto = 200;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual("pacote_premium");

        //console.log(result)
    });

    test("Lidando com valores aleatórios entre 0 e 200", () => {
        for (let i = 0; i < 10; i++) { 
            const totalDeHorasPorProjeto = Math.floor(Math.random() * 201); 
            let result;

            switch (true) {
                case totalDeHorasPorProjeto < 50:
                    result = "pacote_basico";
                    break;
                case totalDeHorasPorProjeto <= 100:
                    result = "pacote_intermediario";
                    break;
                default:
                    result = "pacote_premium";
            }

            expect(calcularPacote(totalDeHorasPorProjeto)).toEqual(result);
        }
    });
});