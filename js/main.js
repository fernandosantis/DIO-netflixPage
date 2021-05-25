var games = [{id:0,file:"altbeast", nome:"Altered Beast", descricao:"O jogo se passa na Grécia antiga e segue a história de um centurião ressuscitado por Zeus para resgatar sua filha Atena, que foi raptada pelo demônio Neff."},{id:1, file:"astdelux", nome:"Asteroids Deluxe", descricao:"Asteroids é um jogo de arcade com gráficos vetoriais muito popular lançado em 1979 pela Atari."},{id:2, file:"blktiger", nome:"Black Tiger", descricao:"Em Black Dragon/Tiger você é um bábaro que luta com um escudo inútil e uma bola de ferro com spikes, atachada a uma corrente, para fazer o efeito iô-iô e poder re-utilizar a arma em outros monstros."},{id:3, file:"cawing", nome:"Carrier Air Wing", descricao:"A sequência do clássico de 1989 com rolagem vertical shoot-em-up, Area 88. Tal como no original, os jogadores escolhem qualquer um dos três caças a disposição para a batalha que se tem em seu caminho, através de dez etapas cheias de inimigos."},{id:4,file:"ghouls",nome:"Ghouls'n Ghosts",descricao:"Mais uma vez o valoroso cavaleiro Arthur corre, pula e enfrenta perigos em estágios sombrios no Demon Realm, um mundo de fantasia demoníaco."},{id:5,file:"joust",nome:"Joust",descricao:"Joust é um jogo de Video-game da Atari movido para Arcade, PC e Nintendo Entertainment System, desenvolvido por Williams Electronics. "},{id:6,file:"mslug4",nome:"Metal Slug IV",descricao:"A história do game mostra que um ano após os eventos de Metal Slug 3, o mundo treme sob a ameaça de um vírus novo cyber misteriosa, mas mortal que ameaça atacar e destruir qualquer sistema de computadores militares da nação."},{id:7,file:"pacman",nome:"PacMan",descricao:"Pac-Man (conhecido em japonês com o nome de Puckman ou パックマン) é um jogo eletrônico criado por Tōru Iwatani para a empresa Namco, e sendo distribuído para o mercado americano pela Midway Games."},{id:8,file:"sf2",nome:"Street Fighter II",descricao:"Street Fighter II: The World Warrior (ストリートファイターⅡ -The World Warrior-[2] Sutorīto Faitā Tsū - The World Warrior?), também conhecido simplesmente por Street Fighter II, é um jogo competitivo de videogame desenvolvido pela Capcom e originalmente lançado para os sistemas de Arcade em 1991."},{id:9,file:"simpsons",nome:"The Simpsons",descricao:"The Simpsons é um jogo eletrônico feito pela Konami para Arcade, mais tarde, em 2012 foi adaptado para Xbox 360 e para Play Station 3 e remasterizado pela EA para iOS em 2009 (três anos antes da adaptação no Xbox 360 e PlayStation 3)."},{id:10,file:"shinobi",nome:"Shinobi",descricao:"Shinobi, o clássico de 1987, pegou emprestado várias ideias de um sucesso dos arcades de 1986: Rolling Thunder, da Namco."}];

function trocaimg(elemento,id) {
    var x = elemento;
    var y = games[id].file;
    x.src ="/img/capa/"+ y +".jpg";
}

function trocalogo(elemento,id) {
    var x = elemento;
    var y = games[id].file;
    x.src ="/img/logo/"+ y +".png";
}

function trocamain(id) {
    var y = games[id].file;
    document.getElementById("game-cab").src = "/img/cab/"+ y +".png";
    var xsnap = "/img/snap/"+ y +".jpg";
    document.getElementById("game-tela").style.backgroundImage = "url('" + xsnap + "')";
    var xcover = "/img/capa/"+ y +".jpg";
    document.getElementById("game-capa").style.background ="linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)100%), url('" + xcover + "')";
    document.getElementById("game-capa").style.backgroundSize="cover";
    document.getElementById("game-capa").style.backgroundPosition="center";
    document.getElementById("game-logo").src = "/img/logo/"+ y +".png";
    document.getElementById("game-descricao").innerHTML = games[id].descricao;

}