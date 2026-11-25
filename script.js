
const experiencias = [
    {
      categoria: "INVESTIGAÇÃO",
      cenas: [
        {
          simbolo: "⌕",
          titulo: "UMA MENSAGEM ESTRANHA",
          descricao: "Você recebe uma mensagem de um número desconhecido: 'Eu sei o que aconteceu naquela noite.'",
          opcoes: [
            ["Responder perguntando quem é.", "Você decide investigar sem revelar informações pessoais. É importante não compartilhar dados com desconhecidos."],
            ["Bloquear e denunciar o número.", "Você evita o contato e protege sua privacidade. Uma escolha segura."],
            ["Enviar seus dados para descobrir.", "Compartilhar dados pessoais com desconhecidos pode colocar sua segurança em risco."]
          ]
        },
        {
          simbolo: "▣",
          titulo: "O ARQUIVO",
          descricao: "Um arquivo chega junto com a mensagem. Você não sabe quem enviou.",
          opcoes: [
            ["Não abrir e verificar o remetente.", "Boa decisão. Arquivos desconhecidos podem conter golpes ou programas maliciosos."],
            ["Abrir imediatamente.", "Abrir arquivos suspeitos pode comprometer seu dispositivo."],
            ["Enviar para um amigo analisar.", "Encaminhar arquivos suspeitos também pode colocar outras pessoas em risco."]
          ]
        },
        {
          simbolo: "◈",
          titulo: "A ÚLTIMA PISTA",
          descricao: "Você encontra uma pista, mas ela contém informações pessoais de outra pessoa.",
          opcoes: [
            ["Preservar a privacidade e procurar ajuda.", "Você respeita a privacidade e busca uma forma responsável de resolver a situação."],
            ["Publicar tudo na internet.", "Expor dados de alguém pode causar danos reais."],
            ["Investigar sem autorização.", "Invadir contas ou dispositivos não é uma forma segura ou legal de investigar."]
          ]
        }
      ]
    },
    {
      categoria: "VIDA REAL",
      cenas: [
        {
          simbolo: "!",
          titulo: "VOCÊ ESTÁ SENDO SEGUIDO",
          descricao: "Na volta para casa, você percebe que uma pessoa parece estar seguindo você.",
          opcoes: [
            ["Ir para um local movimentado e pedir ajuda.", "Boa escolha. Procure um estabelecimento aberto ou um local com pessoas e peça ajuda."],
            ["Ir direto para casa.", "Evite revelar onde mora. Procure um local seguro e movimentado."],
            ["Confrontar a pessoa sozinho.", "Confrontar alguém pode aumentar o risco. Priorize chegar a um local seguro."]
          ]
        },
        {
          simbolo: "⌖",
          titulo: "UMA SITUAÇÃO DE RISCO",
          descricao: "Você presencia uma situação de violência na rua.",
          opcoes: [
            ["Manter distância e ligar para a emergência.", "Correto. No Brasil, ligue 190 para a Polícia Militar."],
            ["Intervir fisicamente sozinho.", "Sua segurança também importa. Evite se colocar em risco."],
            ["Gravar de perto.", "Aproximar-se pode colocar você em perigo. Priorize pedir ajuda."]
          ]
        },
        {
          simbolo: "◇",
          titulo: "UM PEDIDO SUSPEITO",
          descricao: "Alguém que você conheceu pela internet pede dinheiro com urgência.",
          opcoes: [
            ["Não enviar e verificar a história.", "Ótima decisão. Golpes usam urgência e pressão emocional."],
            ["Enviar o dinheiro.", "Nunca envie dinheiro sem verificar a identidade e a situação."],
            ["Pedir dados bancários.", "Não compartilhe seus próprios dados e procure confirmar a história por outro canal."]
          ]
        }
      ]
    },
    {
      categoria: "SUSPENSE",
      cenas: [
        {
          simbolo: "◉",
          titulo: "A CASA VAZIA",
          descricao: "Você acorda durante a madrugada. A porta da sala está aberta, mas você lembra de tê-la trancado.",
          opcoes: [
            ["Ficar em local seguro e chamar ajuda.", "Você priorizou sua segurança em vez de investigar sozinho."],
            ["Descer para verificar.", "Investigar um possível invasor pode ser perigoso."],
            ["Gritar perguntando quem está aí.", "Evite revelar sua posição. Procure um local seguro e peça ajuda."]
          ]
        },
        {
          simbolo: "▤",
          titulo: "O BARULHO",
          descricao: "Um barulho vem do corredor. Seu celular está com 12% de bateria.",
          opcoes: [
            ["Ligar para alguém e informar onde está.", "Você mantém contato e compartilha sua localização com alguém de confiança."],
            ["Sair para investigar.", "Você pode se expor a um perigo desnecessário."],
            ["Apagar todas as luzes e esperar.", "Ficar escondido pode ser uma medida temporária, mas procure ajuda."]
          ]
        },
        {
          simbolo: "☾",
          titulo: "A SAÍDA",
          descricao: "Você encontra uma saída segura e consegue pedir ajuda.",
          opcoes: [
            ["Sair sem voltar para buscar objetos.", "Sua vida vale mais que qualquer objeto. Boa decisão."],
            ["Voltar para pegar seus pertences.", "Não coloque sua segurança em risco por objetos."],
            ["Esperar para descobrir o que aconteceu.", "Não vale a pena permanecer em uma situação potencialmente perigosa."]
          ]
        }
      ]
    },
    {
      categoria: "RELACIONAMENTOS",
      cenas: [
        {
          simbolo: "♡",
          titulo: "UMA CONFISSÃO",
          descricao: "Uma pessoa próxima conta um segredo e pede que você não conte a ninguém.",
          opcoes: [
            ["Respeitar a confiança, salvo risco à segurança.", "Você respeita a privacidade sem ignorar possíveis situações de perigo."],
            ["Contar para todos.", "Espalhar segredos pode destruir a confiança."],
            ["Usar o segredo contra a pessoa.", "Manipular alguém não resolve o problema."]
          ]
        },
        {
          simbolo: "◇",
          titulo: "UMA ESCOLHA DIFÍCIL",
          descricao: "Você descobre que alguém está mentindo para uma pessoa que ama.",
          opcoes: [
            ["Conversar com cuidado e buscar fatos.", "Dialogar com responsabilidade pode evitar conclusões precipitadas."],
            ["Espalhar a história.", "Compartilhar algo sem contexto pode prejudicar pessoas."],
            ["Fingir que não sabe.", "Ignorar pode prolongar uma situação complicada."]
          ]
        },
        {
          simbolo: "∞",
          titulo: "SEUS LIMITES",
          descricao: "Alguém insiste em fazer algo que deixa você desconfortável.",
          opcoes: [
            ["Dizer não e manter seus limites.", "Você tem direito de dizer não. Seus limites devem ser respeitados."],
            ["Aceitar para não desagradar.", "Você não precisa aceitar algo que não deseja."],
            ["Pedir ajuda a alguém de confiança.", "Buscar apoio é uma atitude válida e importante."]
          ]
        }
      ]
    },
    {
      categoria: "SOBREVIVÊNCIA",
      cenas: [
        {
          simbolo: "⌁",
          titulo: "SEM ENERGIA",
          descricao: "Uma tempestade causa queda de energia no bairro. Seu celular está quase descarregado.",
          opcoes: [
            ["Economizar bateria e acompanhar informações oficiais.", "Boa escolha. Preserve a bateria e procure atualizações de fontes oficiais."],
            ["Usar o celular normalmente.", "Você pode ficar sem comunicação quando mais precisar."],
            ["Sair para procurar sinal.", "Evite sair durante condições perigosas. Procure um lugar seguro."]
          ]
        },
        {
          simbolo: "⌂",
          titulo: "A ÁGUA",
          descricao: "O abastecimento foi interrompido e você percebe que há pouca água em casa.",
          opcoes: [
            ["Reservar água e acompanhar orientações oficiais.", "Organizar o consumo e acompanhar os avisos da Defesa Civil é uma boa decisão."],
            ["Desperdiçar a água restante.", "Evite desperdício. A água pode ser necessária por mais tempo."],
            ["Consumir água de origem desconhecida.", "Não consuma água de procedência duvidosa sem orientação adequada."]
          ]
        },
        {
          simbolo: "⚠",
          titulo: "O ALERTA",
          descricao: "Você recebe um alerta oficial de evacuação para sua região.",
          opcoes: [
            ["Seguir a orientação e sair com segurança.", "Correto. Siga as instruções oficiais e não retorne até ser liberado."],
            ["Ignorar o aviso.", "Ignorar alertas pode colocar sua vida em risco."],
            ["Esperar até a última hora.", "Atrasar a saída pode dificultar uma evacuação segura."]
          ]
        }
      ]
    },
    {
      categoria: "DILEMAS",
      cenas: [
        {
          simbolo: "⚖",
          titulo: "UMA CARTEIRA",
          descricao: "Você encontra uma carteira com dinheiro e documentos no chão.",
          opcoes: [
            ["Tentar localizar o dono ou entregar às autoridades.", "Você respeita o direito de quem perdeu seus pertences."],
            ["Ficar com o dinheiro.", "A carteira pertence a outra pessoa. O correto é tentar devolvê-la."],
            ["Deixar onde está.", "Outra pessoa pode pegar. Procure entregar a alguém responsável."]
          ]
        },
        {
          simbolo: "◇",
          titulo: "UMA INJUSTIÇA",
          descricao: "Você vê alguém sendo humilhado por um grupo.",
          opcoes: [
            ["Apoiar a pessoa e buscar ajuda segura.", "Você não precisa enfrentar o grupo sozinho para ajudar."],
            ["Participar da humilhação.", "Sua atitude pode aumentar o sofrimento de alguém."],
            ["Filmar e publicar.", "Expor a vítima pode aumentar o constrangimento."]
          ]
        },
        {
          simbolo: "✦",
          titulo: "A DECISÃO FINAL",
          descricao: "Você pode assumir um erro ou culpar outra pessoa. Ninguém está olhando.",
          opcoes: [
            ["Assumir a responsabilidade.", "Agir com honestidade é difícil, mas demonstra caráter."],
            ["Culpar outra pessoa.", "Transferir a culpa prejudica alguém que pode não ter feito nada."],
            ["Esconder o ocorrido.", "Esconder o erro não resolve suas consequências."]
          ]
        }
      ]
    }
  ];
  
  let jogoAtual = 0;
  let cenaAtual = 0;
  let pontuacao = 0;
  let respondeu = false;
  
  function iniciarJogo() {
    document.getElementById("jogos").scrollIntoView({ behavior: "smooth" });
  }
  
  function abrirJogo(indice) {
    jogoAtual = indice;
    cenaAtual = 0;
    pontuacao = 0;
    document.getElementById("modal").classList.add("active");
    document.body.style.overflow = "hidden";
    mostrarCena();
  }
  
  function fecharJogo() {
    document.getElementById("modal").classList.remove("active");
    document.body.style.overflow = "";
  }
  
  function mostrarCena() {
    const jogo = experiencias[jogoAtual];
    const cena = jogo.cenas[cenaAtual];
  
    respondeu = false;
  
    document.getElementById("categoria").textContent = jogo.categoria;
    document.getElementById("fase").textContent =
      `CENA ${String(cenaAtual + 1).padStart(2, "0")} / 03`;
  
    document.getElementById("barra").style.width =
      `${((cenaAtual + 1) / jogo.cenas.length) * 100}%`;
  
    document.getElementById("sceneVisual").textContent = cena.simbolo;
    document.getElementById("subtitulo").textContent = "SITUAÇÃO";
    document.getElementById("pergunta").textContent = cena.titulo;
    document.getElementById("descricao").textContent = cena.descricao;
  
    document.getElementById("feedback").textContent = "";
    document.getElementById("proximo").style.display = "none";
  
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";
  
    cena.opcoes.forEach((opcao, indice) => {
      const botao = document.createElement("button");
      botao.className = "choice";
      botao.textContent = `${String.fromCharCode(65 + indice)}. ${opcao[0]}`;
      botao.addEventListener("click", () => escolher(indice));
      opcoes.appendChild(botao);
    });
  }
  
  function escolher(indice) {
    if (respondeu) return;
    respondeu = true;
  
    const cena = experiencias[jogoAtual].cenas[cenaAtual];
    const botoes = document.querySelectorAll(".choice");
  
    botoes.forEach((botao, i) => {
      botao.disabled = true;
      if (i === indice) botao.classList.add("selected");
    });
  
    pontuacao++;
    document.getElementById("feedback").textContent = cena.opcoes[indice][1];
    document.getElementById("proximo").style.display = "inline-block";
  
    if (cenaAtual === 2) {
      document.getElementById("proximo").textContent = "VER RESULTADO →";
    } else {
      document.getElementById("proximo").textContent = "PRÓXIMA CENA →";
    }
  }
  
  function proximaCena() {
    if (!respondeu) return;
  
    if (cenaAtual < 2) {
      cenaAtual++;
      mostrarCena();
      return;
    }
  
    mostrarResultado();
  }
  
  function mostrarResultado() {
    document.getElementById("categoria").textContent = "MISSÃO CONCLUÍDA";
    document.getElementById("fase").textContent = "FIM DA EXPERIÊNCIA";
    document.getElementById("barra").style.width = "100%";
    document.getElementById("sceneVisual").textContent = "✓";
    document.getElementById("subtitulo").textContent = "SEU RESULTADO";
    document.getElementById("pergunta").textContent = "VOCÊ CHEGOU AO FINAL.";
    document.getElementById("descricao").textContent =
      "Cada decisão tem consequências. Reflita sobre suas escolhas e lembre-se: na vida real, segurança e responsabilidade vêm primeiro.";
  
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("feedback").textContent =
      "Experiência finalizada. Você concluiu as 3 cenas.";
  
    const botao = document.getElementById("proximo");
    botao.textContent = "JOGAR NOVAMENTE ↻";
    botao.onclick = () => abrirJogo(jogoAtual);
  }
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") fecharJogo();
  });
  
  document.getElementById("modal").addEventListener("click", (event) => {
    if (event.target.id === "modal") fecharJogo();
  });
  