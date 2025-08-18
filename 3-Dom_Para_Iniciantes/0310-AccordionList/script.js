// Por questão de escopo, os códigos ficarão dentro de uma função. Seria meio que uma boa prática para não ter conflito entre variáveis
function initTabNav(){
  const tabMenu    = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  // Verifica se existe tanto tabMenu quanto o tabContent na página
  // Pelo que entendi da explicação é como se esse arquivo JS também estivesse sendo usado em outra página, então para que não acontecesse algum erro. Esse trecho de código não seria acionado. 
  // Em resumo: esse trecho de código só ativa se estiver na página que possui essas duas listas
  if(tabMenu.length && tabContent.length) { 
    // Faz com que exiba somente o conteúdo do primeiro item, pois no CSS todos os conteúdos dessa lista estão por padrão com display: none. 
    tabContent[0].classList.add('ativo');
  
    // Função para adicionar a clase "ativo" ao clicar no item da lista de navegação
    function activeTab(index) {
      // Remove a classe "ativo" de todos os itens da lista de navegação
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
  
      // Adiciona a classe "ativo" no item da lista de navegação clicado
      tabContent[index].classList.add('ativo');
  
      // Desta forma, se clicar no item 2, caso tenha clicado em outro item antes, apenas o item 2 terá a classe "ativo".
    }
  
    // Chama a função ao clicar no item de navegação (o .forEach é para que percorra por cada item na lista de navegação)
    tabMenu.forEach((itemMenu, index) => {  // O argumento index é para mostrar o index de cada imagem (item de navegação) 
      // Adição da função a cada item da lista de navegação
      itemMenu.addEventListener('click', () => {
        activeTab(index); // Esse index é referente ao index do forEach, que é referente ao item da lista de navegação
      });
    });
  }
}

function initAccordion(){
  // Verificação se '.js-accordion dt' existe
  if(accordionList.length){
    const accordionList = document.querySelectorAll('.js-accordion dt');
  
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
  
    // Função para exibir e ocultar o conteúdo
    function activeAccordion(){
      // O this faz referência ao item que está sendo clicado. 
      // Também é o mesmo que usar event.currentTarget nesse caso, mas teria que passar o parâmetro event na função. 
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }
  
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

// Iniciando as funções 
initTabNav();
initAccordion();