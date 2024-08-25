class Funcionario {
    constructor(nome, salarioInicial) {
        this.nome = nome;
        this.salarioInicial = salarioInicial;
        this.salarioFinal = this.calcularSalarioFinal();
    }

    calcularSalarioFinal() {
        const salarioAumentado = this.salarioInicial * 1.15;
        const salarioFinal = salarioAumentado * 0.92;
        return salarioFinal;
    }
}

function adicionarFuncionarios() {
    const funcionarios = [];

    for (let i = 0; i < 3; i++) {
        const nome = prompt(`Digite o nome do funcionário ${i + 1}:`);
        const salarioInicial = parseFloat(prompt(`Digite o salário inicial do funcionário ${i + 1}:`));
        const funcionario = new Funcionario(nome, salarioInicial);
        funcionarios.push(funcionario);
    }

    return funcionarios;
}

function exibirInformacoes(funcionarios) {
    console.log("\nInformações dos Funcionários:");
    funcionarios.forEach(funcionario => {
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário Inicial: R$${funcionario.salarioInicial.toFixed(2)}`);
        console.log(`Salário Final: R$${funcionario.salarioFinal.toFixed(2)}`);
        console.log();
    });
}

const funcionarios = adicionarFuncionarios();
exibirInformacoes(funcionarios);
