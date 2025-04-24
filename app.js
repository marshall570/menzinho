let departamentos = ["Recursos Humanos", "Financeiro", "Contabilidade", "Marketing", "Vendas", "Produção", "TI", "Jurídico", "P&D", "Logística"];
let primario = ["Logística de Entrada", "Produção/Operação", "Logísitca de Saída", "Marketing/Vendas", "Serviços"];
let suporte = ["Infraestrutura", "Recursos Humanos", "Tecnologia", "Aquisições"];

function handleSorteio() {
  for (let index = 0; index < 3; index++) {
    console.log()

    switch (index) {
      case 0:
        document.querySelector('label.department').innerHTML = 'Departamento: ' + departamentos[Math.floor(Math.random() * departamentos.length)]
        break;
      case 1:
        document.querySelector('label.primary').innerHTML =  'Atv. Primária: ' + primario[Math.floor(Math.random() * primario.length)]
        break;
      case 2:
        document.querySelector('label.support').innerHTML =  'Atv. de Apoio: ' + suporte[Math.floor(Math.random() * suporte.length)]
        break;
    }
  }
}
