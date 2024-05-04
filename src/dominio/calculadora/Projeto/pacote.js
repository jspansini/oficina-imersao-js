const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  const pacoteEncontrado = Object.entries(MAX_HORAS_POR_PACOTE)
    .find(([key, value]) => value > totalDeHorasPorProjeto);

  if (pacoteEncontrado) {
    return pacoteEncontrado[0];
  } else {
    return "pacote_premium";
  }
};

exports.calcularPacote = calcularPacote;