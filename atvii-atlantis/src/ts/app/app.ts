import Processo from "../abstracoes/processo";
import Principal from "../processos/principal";

console.clear()
console.log(`Bem-vindo ao Atlantis! Mergulhe em um mundo de diversão com toboáguas emocionantes e piscinas relaxantes, perfeito para todas as idades!`);

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}