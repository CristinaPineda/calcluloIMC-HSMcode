
/*Instruções do projeto
Um professor de Educação Física precisa obter alguns dados sobre os 45 alunos da sua turma. Ele perguntará a cada um o nome, a idade, 
a altura (em metros) e o peso (em quilogramas).

Crie um programa que solicite os dados a cada um dos alunos e mostre:
a) o IMC (Índice de Massa Corporal) de cada estudante;
b) o estudante com maior IMC;
c) o estudante com menor IMC;
d) a altura média dos estudantes.

Além disso, o programa deve emitir um alerta para aqueles que fazem parte das classificações magreza e obesidade grau I, II ou III.

O IMC é calculado pela fórmula peso/altura² e as classificações são:

CLASSIFICAÇÃO 1
IMC: menor que 18,5
Classificação: Magreza
Obesidade: Grau 0

CLASSIFICAÇÃO 2
IMC: entre 18,5 e 24,9
Classificação: Normal
Obesidade: Grau 0

CLASSIFICAÇÃO 3
IMC: entre 25,0 e 29,9
Classificação: Sobrepeso
Obesidade: Grau I

CLASSIFICAÇÃO 4
IMC: entre 30,0 e 39,9
Classificação: Obesidade
Obesidade: Grau II

CLASSIFICAÇÃO 1
IMC: maior que 40,0
Classificação: Obesidade grave
Obesidade: Grau III

Suba o código para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

var alunos = 0;
var nome = [];
var idade = [];
var altura = [];
var peso = [];
var valorimc = [];

do{
	
	var name = prompt('Qual o seu nome?');
	nome.push(name);
	var age = prompt('Qual sua idade?');
	idade.push(age);
	var height = prompt('Qual a sua altura?');
	altura.push(height);
	var weight = prompt('Qual o seu peso?');
	peso.push(weight);	
	var imc = weight / (height**2);
	var imc1 = imc.toFixed(2);
	valorimc.push(imc1);
	alert('Seu IMC é: '+ imc1)

	alerta();
	alunos += 1;

}while(alunos <= 2);

maiorMenor();

mediaAltura();

function alerta(){    //função de emissão de alerta sobre a classificação do imc 
    if(imc < 18.5){
        alert('Você está na classificação 1, MAGREZA! Obesidade: grau 0');
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert('Você está na classificação 2, NORMAL! Obesidade: grau 0');
    }
    else if(imc >= 25 && imc <= 29.9){
        alert('Você está na classificação 3, SOBREPESO! Obesidade: grau I');
    }
    else if(imc >= 30 && imc <= 39.9){
        alert('Você está na classificação 4, OBESIDADE! Obesidade: grau II');
    }
    else{
        alert('Você está na classificação 5, OBESIDADE GRAVE! Obesidade: grau III');
    }
}

function maiorMenor(){

	var imcMaior = 0;
	for(var i = 0; i < valorimc.length; i++){
	    if(valorimc[i] > imcMaior){
	        imcMaior = valorimc[i];
	     }
	}

	var imcMenor = imcMaior;
	for(var i = 0; i < valorimc.length; i++){
	    if(valorimc[i] < imcMenor){
	        imcMenor = valorimc[i];
	     }
	}
	document.write('O maior IMC calculado é: '+ imcMaior, ' e o menor IMC calculado é: '+ imcMenor +'.');
}

function mediaAltura(){
	var soma = 0;
	for(var x=0; x < altura.length; x++){
		soma += parseFloat(altura[x]);
	}
	var media = soma / 2;
	var mediaDaAltura = media.toFixed(2); 
	document.write('\nA altura média dos alunos é: '+ mediaDaAltura);
}