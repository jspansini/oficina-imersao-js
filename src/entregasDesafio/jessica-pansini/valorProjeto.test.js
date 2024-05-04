const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const moduloPacote = require("../../dominio/calculadora/Projeto/pacote");
const moduloHorasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const {
    DIAS_UTEIS_NO_MES,
    HORAS_POR_DIA,
    HORAS_POR_FUNCIONALIDADE,
    MAX_HORAS_POR_PACOTE,
    TAXAS_CONTRATUAIS_POR_PACOTE
} = require("../../dominio/calculadora/constantes/constantes")

jest.mock("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("valorProjeto", () => {
    beforeAll(() => {
        moduloPacote.calcularPacote.mockReturnValue("pacote_basico");
    });

    test("Calcula o valor total do projeto corretamente para um pacote básico e valor de hora especificados", () => {
        const funcionalidades = ["setup", "formulario", "responsividade"];
        const valorHora = 100;
        const totalDeHorasPorProjeto = 80;

        moduloHorasPorProjeto.calcularHorasDeProjeto.mockReturnValue(totalDeHorasPorProjeto);

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        const valorEsperado = Math.round(
            totalDeHorasPorProjeto * valorHora * TAXAS_CONTRATUAIS_POR_PACOTE["pacote_basico"]
        );

        expect(resultado).toEqual(valorEsperado);
    });
});
