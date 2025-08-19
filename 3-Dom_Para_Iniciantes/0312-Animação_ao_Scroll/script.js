// Navegação por Tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// Navegação por Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

// Scroll suave com link interno
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

// Animação suave com scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  // Verificando se .js-scroll existe
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;   // Pega 60% do height da tela
    
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;   // Pegando a posição da section em relação ao topo da tela

        // A classe .ativo é acionada na section quando aparecer 60% da tela
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible){
          section.classList.add('ativo');
        }
        // O else é para remover a animação. Dessa forma quando rola de volta para cima e depois for rolar para baixo da página, a animação ocorrerá novamente:
        // else {
        //   section.classList.remove('ativo');
        // }
      })
    }

    // Ativando a função para que assim que o site abra, já apareça a animação
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();