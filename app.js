let departamentos = ["Recursos Humanos", "Financeiro", "Contabilidade", "Marketing", "Vendas", "Produção", "TI", "Jurídico", "P&D", "Logística"];
let primario = ["Logística de Entrada", "Produção/Operação", "Logísitca de Saída", "Marketing/Vendas", "Serviços"];
let suporte = ["Infraestrutura", "Recursos Humanos", "Tecnologia", "Aquisições"];

let sorteioInterval;

function handleSorteio() {
  document.querySelector('label.department').innerHTML = 'Departamento: ' + departamentos[Math.floor(Math.random() * departamentos.length)];
  document.querySelector('label.primary').innerHTML = 'Atv. Primária: ' + primario[Math.floor(Math.random() * primario.length)];
  document.querySelector('label.support').innerHTML = 'Atv. de Apoio: ' + suporte[Math.floor(Math.random() * suporte.length)];
}

function startSorteio() {
  handleSorteio();
  sorteioInterval = setInterval(handleSorteio, 1);
}

function stopSorteio() {
  clearInterval(sorteioInterval);
}