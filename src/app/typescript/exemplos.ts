import { helloWorld } from "./hello";
import { RandomNumbers, phi, pi } from "./math";


function calcularArea() {
    const obj = {width: 10, heigth: 30};

    const area = obj.width * obj.heigth;

    return area;
}

function usuario () {
    const usuario = {
        nome: 'Matheus' ,
        idade: 27
    }

}

function calculo () {
    return Math.random () < 5;
}

function validacao () {
    const valor = Math.random () < 0.5 ? 'a' : 'b';

    if (valor === 'a') {
        //..
    }
    else if (valor !== 'b') {
        //..
    }

    function exibirMensagem(pessoa: String, data:string) {
        console.log (`Olá ${pessoa}, hoje é ${data}`);

        return 'teste';
    }
    exibirMensagem('Matheus', '08/10/2024');
}

let mensagem: string = 'hello world';

let mensagem2 = 'hello world';

// Declara explicitamente o tipo da variável
let number1: number = 3.3;

let number2 = 4;

// "Desliga o validador de tipos"
let obj:any = {x: 0};

// Declara o tipo de parametro e declara o tipo de retorno (Não é necessário declarar o tipo de retorno)
function olaMundo(mensagem:string): string {
    return `Olá mundo ${mensagem}`;
}
// Objeto
function exibirCoordenadas(pt:{x: number, y: number}): string {
    return `${pt.x} ${pt.y}`;
}

exibirCoordenadas({x: 4, y: 6});


//? Significa que é um campo não obrigatório
function exbirNome(obj: {nome: string, sobrenome?:string}): string {
    
    let mensagem = '';

    if (obj.sobrenome === undefined) {
        
        mensagem = `Seu nome é ${obj.nome}`;
    }
    else {
        
        mensagem = `Seu nome é ${obj.nome} e o sobrenome é ${obj.sobrenome}`;
    }
    
    return mensagem;
}

exbirNome({nome: 'Matheus'});

exbirNome({nome: 'Matheus', sobrenome: 'Camilo'});


//Tipos de União
function exibirIds(id: number | string) {
    // Verifica se é number ou string
    let mensagem = '';
    
    if (typeof id === 'number') {
        mensagem = 'O seu id numérico é ' + id.toString;
    }
    else {
        //toUpperCase converte as letras para maiúsculo
        mensagem = id.toUpperCase();
    }


    return 'Seu id é' + id;

}

exibirIds(3);
//ou
exibirIds("Três");

// type Atribui um nome a um objeto tipo comum de dados
type Ponto = {
x: number,
y: number;
 
}

//
function imprimirPonto (p: Ponto) {

    return `O seu ponto é ${p.x} ${p.y}`;
}

imprimirPonto({x:3, y: 5});
//


// Interfaces são uma outra forma de dar nomes a object types

 function imprimirTexto(texto: string, alinhamento: 'left' |'rigth' | 'center') {

 }
 imprimirTexto('meu texto', 'left');

 //Diferenças entre Alias e Interface: Eles são praticamente iguais, porém Interfaces utilizam conceitos de POO, podem ser herdadas e extendidas, e alias não.


 //Null e undefined

 //Null significa um valor vazio ou não existente. 
 //Null é atribuído e expliticamente significa “nada”. 
 //Undefined significa que uma variávelfoi declarada, mas o valor dessa variável ainda não foi definido.

 
 //Operador não nulo
function vivendoPerigosamente(x?: number | null) {

    console.log(x?.toFixed());

vivendoPerigosamente();
}

function fazerAlgo(lista: string[]) {

}

fazerAlgo(["Tirar o lixo", "Fazer comida"]);

//////////////////////////

class Point {
    x: number = 0;
    y: number = 0;
}

let p = new Point();
p.x = 4;
p.y = 4;

console.log(`${p.x} ${p.y}`);

class BoasVindas {
    mensagem: string;

    constructor() {
        this.mensagem = 'Bem-vindo!';
    }
}

let m = new BoasVindas();

console.log(m.mensagem);


//Readonly só permite ser preenchido no construtor.
//Use this. para acessar campos dentro das classes
class Saudacoes {
    readonly mensagem: string;

    constructor() {
        this.mensagem = 'Bem vindo !';
    }
    dizerOla() {
        console.log (this.mensagem);
    }
}

// Ultilizar getters e setters no objeto
class C {
     private _length = 0;

     get length(): number {
        return this._length;
     }

     set length(value: number) {
        this._length = value;
     }
}

const c = new C();

c.length = 10;

console.log(c.length);

//Interface serve para implementar um type. Determinar a estrutura da classe.
//void atribui nenhum retorno
interface Pingavel {

    ping(): void;
    value: number;
}
//Implementa a inteface Pingavel
class Sonar implements Pingavel {
    
    ping(): void {
        
        console.log('ping');
    }
    value: number = 3;
}

class Ball implements Pingavel {

    ping(): void {

    }
    value: number = 4;
}

let sonar = new Sonar ();
sonar.ping();


// Membros protected são visíveis apenas nas SUBCLASSES e onde eles são declarados.
class Animal 
{
    
    protected andar() {

        console.log('animal andando');
    }
}

//A visibilidade padrão de um membro de uma classe é public. Um membo public pode ser acessado de qualquer lugar:

//Extends Classes podem extender de outra classe. Uma classe derivada tem todas as propriedades da classe base, e também pode definir membros adicionais.
 class Cachorro extends Animal {
    public latir() {

        console.log('au au');

        this.andar();
    }
 }
 
//Private é como o protected, mas não permite acesso ao membro mesmo de uma subclasse.
 class Gato extends Animal {
    private miar() {

        console.log('miau miau');

        this.andar();
    }   
 }

helloWorld();

let r = new RandomNumbers();
r.generateNumber();

var calculoPi:number = pi * phi;
console.log(calculoPi);  