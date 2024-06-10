import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"
import ImpressorDependetes from "./impressorDependentes"


export default class ImpressorID implements Impressor {
    private dependentes: Cliente[]
    private impressor!: Impressor

    constructor(dependentes:  Cliente[]) {
        this.dependentes = dependentes
    }

    imprimir(): string {
        let impressao = ''
        for (let id = 0; id < this.dependentes.length; id++) {
            
            this.impressor = new ImpressorDependetes(this.dependentes[id])
            
            impressao = impressao + `${this.impressor.imprimir(id)}`
            
            impressao = impressao 
        }
        return impressao
    }
}