export class Customer {
    
    constructor
        (public id: number | null,
        public name: string,
        public cpf: string,
        public genero?: string
    ) {

    }
}