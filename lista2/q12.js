//QUESTAO 12 - PERGUNTAS LOGICAS PARA DESCOBRIR UM ANIMAL

//pato, águia, galinha, avestruz, pinguim, 
//morcego, ornitorrinco, leão, gato, onça pintada, 
//baleia, tubarão, lambari, enguia e arraia.

console.log(`QUESTÃO 12 - DESCOBRIR UM ANIMAL POR MEIO DE PERGUNTAS LÓGICAS
RESPOSTAS S/N
`);


var prompt=require('prompt-sync')();

var tipo=prompt('O animal é um mamífero? (S/N) ').toUpperCase();
if(tipo=='S'){
	var tipo=prompt('Este mamífero voa? (S/N) ').toUpperCase();
	if(tipo=='S'){
		console.log('Você pensou em um morcego. Acertei, não acertei? ');
	}else{
		var tipo=prompt('Este mamífero é adaptado ao meio aquático? (S/N) ').toUpperCase();
		if (tipo=='S'){
			var tipo=prompt('Este mamífero adaptado ao meio aquático é venenoso? (S/N) ').toUpperCase();
			if (tipo=='S'){
				console.log('Você pensou em um ornitorrinco. Acertei, não acertei? ');
			}else{	
			var tipo=prompt('Este mamífero adaptado ao meio aquático é bem grande, esguicha água (na verdade ar quente) e é muito famoso em parques aquáticos? (S/N)').toUpperCase();
				if (tipo=='S'){
					console.log('Você só pode ter pensando em uma baleia. Acertei?');
				}else{
					console.log('Bom, parece que você tentou pensar fora dos animais dados pelo exercício. Aí fica meio difícil para esta mera programadora iniciante que vos fala.');
				}
			}
		}else{
			var tipo=prompt('Este mamífero é grande? (S/N) ').toUpperCase();
			if (tipo=='S'){
				var tipo=prompt('Este mamífero grande tem pintas? (S/N) ').toUpperCase();
				if (tipo=='S'){
					console.log('Pensou em uma onça pintada, não pensou? Acertei.');
				}else{
					console.log('É um leão, então? É, não é? Acertei.');
				}
			}else{
				console.log('Ah, você pensou em um gato. É isso!');
			}
		}
	}

}else{
var tipo=prompt('O animal é aquático? (S/N) ').toUpperCase();
	if(tipo=='S'){
		var tipo=prompt('Este animal aquático é grande? (S/N) ');
		if (tipo=='S'){
			var tipo=prompt('Bem grande mesmo? (S/N) ');
			if (tipo=='S'){
				console.log('Bom, é uma baleia, não é? Baleias também são mamíferos. O easter egg agora pode ser chegar a esta mesma resposta por dois meios diferentes.');
			}else{
				var tipo=prompt('Este animal aquático normalmente parece ter dentes bem afiados, uma barbatana que assusta muita gente e afunda quando para de nadar? (S/N) ');
				if(tipo=='S'){
					console.log('Você pensou em um tubarão. Acertei, não? Mas nem todos os tubarões são predadores! O filme do Steven Spielberg alimentou tantos esteriótipos sobre eles...');
				}else{
					console.log('Bom, parece que você tentou pensar fora dos animais dados pelo exercício. Aí fica meio difícil para esta mera programadora iniciante que vos fala.');
				}
			}
		}else{
			var tipo=prompt('Este animal aquático é pequeno, com escamas, de cor prateada e vive em água doce? (S/N) ');
			if (tipo=='S'){
				console.log('Você pensou em um lambari. Ou também conhecido como Piaba. Já comeu piaba bem fritinha com baião de dois? Eu 100% recomendo.');
			}else{
				var tipo=prompt('Este animal aquático é exclusivamente marinho (vive em água salgada)? (S/N) ');
				if(tipo=='S'){
					console.log('É uma arraia, não é? Acertei.');
				}else{
					var tipo=prompt('Este animal aquático é esguio e longo e, às vezes, até elétrico?');
					if (tipo=='S'){
						console.log('Então é uma enguia! Acertei?');
					}
				}
			}
		}
	}else{
		var tipo=prompt('O animal é uma ave? (S/N) ').toUpperCase();
		if(tipo=='S'){
			var tipo=prompt('Esta ave consegue voar? (S/N) ').toUpperCase();
			if(tipo=='S'){
				var tipo=prompt('Mas consegue voar por grandes distâncias? (S/N) ').toUpperCase();
				if(tipo=='S'){
					var tipo=prompt('E também é onívoro (S/N) ');
					if(tipo=='S'){
						console.log('Patos! Você pensou em um pato. Eles são aves onívoras e, além disso, sabem andar, voar e nadar. Dá pra imaginar esse monte de talento?');
					}else{
						console.log('Pensou em uma águia, não é? Elas são carnívoras e alguns tipos até comem outras aves, como patos...');
					}
				}else{
				console.log('Pensou em uma galinha, não pensou? Acertei.');
				}
			}else{
				var tipo=prompt('Essa ave, que não consegue voar, tem um pescoço longo e flexível?').toUpperCase();
				if(tipo=='S'){
					console.log('É um avestruz, não tem outra.');
				}else{
					console.log('É um pinguim? Acho que acertei!');
				}
			}
		}else{
			console.log('Ah, estou sem opções de animais para adivinhar. Você me pegou...');
		}
}
}