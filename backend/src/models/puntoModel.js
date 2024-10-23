// Por enquanto, vamos usar um array para simular um banco de dados
let registros = [];

exports.getRegistros = () => {
  return Promise.resolve(registros);
};

exports.registrarPonto = (dados) => {
  const novoRegistro = {
    id: Date.now(),
    timestamp: new Date(),
    ...dados
  };
  registros.push(novoRegistro);
  return Promise.resolve(novoRegistro);
};
