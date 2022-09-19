const threeLetterBtn = document.querySelector(".btn-3");
const printedWordList = document.querySelector(".printedWordList");


threeLetterBtn.addEventListener("click", function() {
wordList3Letters = wordList.filter(word => word.length == 3)
});


let wordList = [
"anu", "asa", "aro", "avó", "bar", "baú", "boá", "boi", "céu", "chá",
"cru", "dia", "dvd", "ema", "emu", "fax", "fio", "giz", "gnu", "gps",
"ímã", "ler", "lua", "mãe", "mão", "mar", "mel", "oca", "ovo", "pai",
"pão", "pia", "rei", "rim", "rio", "rua", "rum", "sal", "sol", "uçá",
"uva", "véu",
"abiu", "açaí", "acne", "açor", "adax", "afta", "água", "aipo", "alça",
"alce", "alho", "alto", "amar", "anão", "anel", "angu", "anjo", "arar",
"arca", "arco", "asma", "asno", "ator", "atum", "babá", "bala", "balé",
"bata", "bebê", "beca", "bico", "bidê", "bife", "boca", "bode", "boia",
"bola", "bolo", "boné", "bota", "bote", "boto", "boxe", "broa", "bule",
"cabo", "café", "cair", "cajá", "caju", "cama", "cano", "capa", "caro",
"casa", "chão", "chip", "cipó", "clip", "coco", "cola", "cone", "copo",
"coxa", "cruz", "cubo", "cuco", "cuia", "dado", "dedo", "divã", "doce",
"dodô", "doer", "égua", "elfo", "elmo", "faca", "fada", "feio", "figa",
"figo", "fila", "filé", "fino", "fita", "flan", "flor", "foca", "fofa",
"fofo", "fogo", "frio", "fubá", "galo", "gari", "gato", "gelo", "gema",
"gibi", "gola", "gota", "iate", "íbis", "iglu", "ilha", "ingá", "ioga",
"ioiô", "irmã", "isca", "jaca", "jacu", "jato", "jiló", "judô", "juiz",
"kiwi", "kudu", "laço", "lago", "lama", "lata", "lava", "leão", "leme",
"leoa", "leve", "lima", "lira", "liso", "lobo", "loja", "lona", "lula",
"lupa", "luva", "maca", "maçã", "mago", "maiô", "mala", "mapa", "mata",
"mate", "meia", "mesa", "mina", "moer", "mola", "moto", "mula", "muro",
"nabo", "naja", "neta", "neto", "neve", "novo", "nuca", "oboé", "odre",
"ogro", "óleo", "olho", "onça", "onda", "orar", "orca", "órix", "osso",
"ouro", "oval", "paca", "pacu", "país", "pano", "pata", "patê", "pato",
"pavê", "pelo", "pena", "pera", "peru", "pião", "piau", "pino", "pipa",
"pneu", "poça", "poço", "pote", "puff", "puma", "purê", "rabo", "rack",
"raia", "raio", "raiz", "ralo", "raso", "rato", "rede", "remo", "rena",
"reto", "rico", "robô", "rodo", "roer", "romã", "rosa", "ruga", "sagu",
"saia", "sair", "sala", "sapo", "seco", "selo", "sino", "siri", "sofá",
"soja", "sopa", "soro", "suco", "sujo", "sumô", "suor", "surf", "taça",
"taco", "taco", "tatu", "taxi", "tear", "teia", "teiú", "tela", "teto",
"tofu", "toga", "trem", "tuba", "umbu", "unha", "urna", "urso", "vaca",
"vaso", "vela", "vila", "voar", "xale", "zebu",
"ábaco", "abadá", "abrir", "ácaro", "achar", "ácido", "açude", "adaga",
"adega", "adiar", "adubo", "afiar", "agogô", "aguar", "águia", "aipim",
"alado", "álbum", "amigo", "amora", "andar", "anzol", "apito", "araça",
"arara", "aratu", "arder", "areia", "arpão", "arroz", "assar", "atobá",
"átomo", "atrás", "aveia", "avelã", "avião", "axila", "azedo", "babar",
"bacia", "bacon", "bagre", "balão", "balde", "balsa", "bambu", "banco",
"banda", "bando", "banho", "banjo", "barba", "barco", "barro", "bater",
"batom", "bauru", "beber", "berço", "betta", "bicar", "bisão", "bloco",
"blusa", "boate", "bocal", "bócio", "boiar", "boina", "bolha", "bolsa",
"bolso", "bomba", "bonde", "bongô", "botão", "braço", "bravo", "brega",
"broca", "bruxa", "bucha", "buquê", "burca", "cabra", "cação", "caçar",
"cacau", "cacho", "cacto", "caído", "caixa", "calar", "calau", "calça",
"calmo", "calor", "canga", "canil", "canoa", "canto", "capim", "capuz",
"caqui", "carga", "carne", "carpa", "carro", "carta", "casar", "casca",
"caspa", "caule", "cavar", "cerca", "cervo", "cesta", "cetro", "chalé",
"chato", "chave", "chefe", "cheio", "chopp", "chulé", "chuva", "cidra",
"cinto", "circo", "cisco", "cisne", "clara", "claro", "clava", "clube",
"coala", "cobra", "cocar", "coçar", "cofre", "coifa", "colar", "comer",
"conga", "cópia", "corda", "coroa", "corvo", "couve", "craca", "cravo",
"crepe", "crina", "cueca", "cuíca", "cupim", "curar", "curau", "curió",
"curry", "curto", "curva", "cutia", "damas", "dardo", "dedal", "dente",
"dingo", "disco", "dócil", "doido", "domar", "draga", "ducha", "ebola",
"esqui", "facão", "fácil", "faixa", "falar", "falir", "faraó", "farda",
"farol", "farto", "fatal", "fatia", "fauna", "febre", "feliz", "fêmur",
"fênix", "ferir", "feroz", "festa", "filha", "filho", "fogão", "foice",
"folha", "forma", "forno", "forte", "fraco", "frear", "frito", "frota",
"fugir", "fundo", "funil", "furão", "furar", "fuzil", "gaita", "galho",
"gamão", "gambá", "ganso", "ganzá", "garça", "garfo", "garoa", "garra",
"gênio", "gesso", "gibão", "glacê", "globo", "gloss", "gnomo", "golfe",
"gongo", "gorro", "grade", "grilo", "gripe", "guará", "guiar", "harpa",
"herói", "hiena", "horta", "hotel", "iaque", "índio", "irara", "irmão",
"jambo", "jarra", "jataí", "jaula", "jeans", "jogar", "kafta", "kunai",
"lacre", "lagoa", "lança", "lápis", "laquê", "larva", "latir", "lavar",
"lhama", "libra", "licor", "ligar", "limão", "limpo", "lince", "linda",
"lebre", "leite", "lenço", "lenha", "lente", "lento", "leque", "lesma",
"linha", "lírio", "livro", "lixar", "loira", "lombo", "longo", "louco",
"louro", "lousa", "lutar", "macio", "magro", "mamão", "mamba", "manga",
"manta", "marte", "meiga", "melão", "menta", "metrô", "milho", "míope",
"mirar", "modem", "moeda", "molho", "monge", "morsa", "mosca", "motor",
"mouse", "múmia", "mural", "museu", "musgo", "nadar", "nariz", "natal",
"navio", "negar", "nevar", "ninho", "nobre", "noite", "nozes", "nuvem",
"oasis", "ocapi", "odiar", "ofurô", "olhar", "ombro", "órgão", "orobô",
"ostra", "ouvir", "padre", "pagar", "palco", "palha", "panda", "papel",
"parca", "pasta", "pavão", "pedal", "pedra", "peixe", "pente", "pequi",
"perna", "pesca", "piano", "picar", "pilão", "pilha", "pinça", "pinha",
"pirão", "pires", "pisar", "pista", "píton", "pizza", "placa", "pluma",
"pobre", "poção", "podar", "pódio", "pólen", "polir", "polvo", "pomar",
"pombo", "pônei", "ponte", "porão", "porco", "porta", "porto", "poste",
"potro", "praça", "praia", "prata", "prato", "prego", "pudim", "pular",
"pulga", "pulso", "puxar", "quati", "quepe", "quibe", "quivi", "ração",
"radar", "rádio", "raio x", "ralar", "rampa", "rapel", "ratel", "rédea",
"regar", "régua", "rezar", "rifle", "rímel", "rodar", "rolar", "rolha",
"ruiva", "sabão", "sabre", "sacro", "sagui", "saiga", "salsa", "santo",
"saquê", "sarna", "sauna", "secar", "serra", "short", "skate", "socar",
"sogra", "sonho", "spray", "suado", "subir", "suflê", "sujar", "sumir",
"sunga", "sushi", "sutiã", "tábua", "talco", "tampa", "tanga", "telha",
"tempo", "tenda", "tênis", "terno", "terra", "testa", "tiara", "tíbia",
"tigre", "tinta", "tocar", "tocha", "toldo", "tórax", "torre", "torta",
"torto", "tosse", "touca", "touro", "traça", "trair", "trave", "trenó",
"trevo", "tribo", "trigo", "tripé", "trono", "trufa", "truta", "tumba",
"túnel", "uivar", "urano", "urubu", "urutu", "vagão", "vagem", "varal",
"vazio", "velho", "veloz", "vento", "vênus", "verão", "vesgo", "vespa",
"vidro", "viela", "vigia", "vilão", "vinho", "viola", "vodca", "votar",
"xexéu", "zebra", "zíper", "zumbi"
];

// wordLength = prompt("how many letter?", "1, 2, 3...").toFixed
let wordLength = 4;
let consultLetter = new Array(wordLength);
// threeLetterBtn.onclick = window.alert("Hello");
printedWordList.innerHTML = printWord();

function printWord() {
	let text = "";
	for (let i = 0; i < wordList.length; i++) {
	 	text += " - " + wordList[i] + " ";
	 } 
	 text += ""

	 return text;
}

