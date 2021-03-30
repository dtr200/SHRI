window.renderTemplate = function(alias, data) {

    const themeColor = document.querySelector('body')
                        .classList.contains('theme_light') ? '' : 'theme_dark';
    switch(alias){
        case 'leaders': return renderLeaders(data, themeColor);
        case 'vote': return renderVote(data, themeColor);
        case 'activity': return renderActivity(data, themeColor);
        case 'chart': return renderChart(data, themeColor);
        case 'diagram': return renderDiagram(data, themeColor);
        default: return renderLeaders(data, themeColor);
    }
 }

function renderLeaders(data, color){

    //color - вставить на место класса дарк

    return `<div class="app app--theme-black">
                <header class="page-header">
                    <h1 class="page-header__title page-header__title--theme-black">Больше всего коммитов</h1>
                    <h2 class="page-header__subtitle page-header__subtitle--theme-black">Спринт № 213</h2>
                </header>
                <main class="page-main">
                    <section class="page-main__place place place--fifth">                
                        <div class="place__developer developer developer--fifth">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/8.jpg 2x,
                                        images/3x/8.jpg 3x,
                                        images/4x/8.jpg 4x"
                                src="images/1x/8.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Александр Иванков</span>
                            <span class="developer__commits">19</span>
                        </div>
                        <div class="place__position position position--fifth position--theme-black position--regular">
                            <span class="position__number position__number--theme-black">5</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--third">                
                        <div class="place__developer developer developer--third">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/7.jpg 2x,
                                        images/3x/7.jpg 3x,
                                        images/4x/7.jpg 4x"
                                src="images/1x/7.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Дмитрий Андриянов</span>
                            <span class="developer__commits">22</span>
                        </div>
                        <div class="place__position position position--third position--theme-black position--regular">
                            <span class="position__number position__number--theme-black">3</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--first">
                        <div class="place__developer developer developer--first">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/3.jpg 2x,
                                        images/3x/3.jpg 3x,
                                        images/4x/3.jpg 4x"
                                src="images/1x/3.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Дарья Ковалева</span>
                            <span class="developer__commits">32</span>
                        </div>
                        <div class="place__position position position--top position--first position--theme-black">
                            <span class="position__number position__number--theme-black">1</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--second">                
                        <div class="place__developer developer developer--second">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/9.jpg 2x,
                                        images/3x/9.jpg 3x,
                                        images/4x/9.jpg 4x"
                                src="images/1x/9.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Сергей Бережной</span>
                            <span class="developer__commits">27</span>
                        </div>
                        <div class="place__position position position--second position--theme-black position--regular">
                            <span class="position__number position__number--theme-black">2</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--fourth">                
                        <div class="place__developer developer developer--fourth">                     
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/6.jpg 2x,
                                        images/3x/6.jpg 3x,
                                        images/4x/6.jpg 4x"
                                src="images/1x/6.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Андрей Мокроусов</span>
                            <span class="developer__commits">20</span>
                        </div>
                        <div class="place__position position position--fourth position--theme-black position--regular">
                            <span class="position__number position__number--theme-black">4</span>
                        </div>
                    </section>
                </main>
            </div>`
}

function renderVote(data, color){
  return `<div class="app app--theme-black">
            <header class="page-header">
                <h1 class="page-header__title page-header__title--theme-black">Самый 🔎 внимательный разработчик</h1>
                <h2 class="page-header__subtitle page-header__subtitle--theme-black">Спринт № 213</h2>
            </header>
            <main class="page-main page-main--vote">
                    <div class="row__wrapper row__wrapper--edge-devs">
                        <section class="row column column--edge-devs">
                            <div class="column__developer developer developer--vote">
                                <img class="developer__photo developer__photo--theme-black"
                                    srcset="images/2x/1.jpg 2x,
                                            images/3x/1.jpg 3x,
                                            images/4x/1.jpg 4x"
                                    src="images/1x/1.jpg" 
                                    alt="Developers photo">
                                <span class="developer__name developer__name--theme-black">Евгений Дементьев</span>
                            </div>
                            <div class="column__developer developer developer--vote">
                                <img class="developer__photo developer__photo--theme-black"
                                    srcset="images/2x/12.jpg 2x,
                                            images/3x/12.jpg 3x,
                                            images/4x/12.jpg 4x"
                                    src="images/1x/12.jpg" 
                                    alt="Developers photo">
                                <span class="developer__name developer__name--theme-black">Алексей Ярошевич</span>
                            </div>                    
                            <div class="column__developer developer developer--vote developer--hide">
                                <img class="developer__photo developer__photo--theme-black"
                                    srcset="images/2x/5.jpg 2x,
                                            images/3x/5.jpg 3x,
                                            images/4x/5.jpg 4x"
                                    src="images/1x/5.jpg" 
                                    alt="Developers photo">
                                <span class="developer__name developer__name--theme-black">Александр Николаичев</span>
                            </div>     
                        </section>
                    </div>
                    <div class="row__wrapper row__wrapper--vote">
                        <section class="row column column--vote">
                            <div class="column__wrapper column__wrapper--vote">
                                <div class="column__nav nav nav--up">
                                    <svg class="nav__button nav__button--theme-black nav__button--up nav__button--hover" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>
                                    </svg>                        
                                </div>                            
                                <div class="column__nav nav nav--down">
                                    <svg class="nav__button nav__button--theme-black nav__button--down" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="developer__wrapper developer__wrapper--vote">
                                <div class="column__developer developer developer--theme-black developer--vote developer--voted">
                                    <img class="developer__photo developer__photo--voted developer__photo--lower developer__photo--theme-black"
                                        srcset="images/2x/4.jpg 2x,
                                                images/3x/4.jpg 3x,
                                                images/4x/4.jpg 4x"
                                        src="images/1x/4.jpg" 
                                        alt="Developers photo">
                                    <span class="developer__name developer__name--short developer__name--theme-black">Вадим Пацев</span>
                                </div>
                                <div class="column__developer developer developer--theme-black developer--vote developer--hover">
                                    <img class="developer__photo developer__photo--lower developer__photo--theme-black"
                                        srcset="images/2x/11.jpg 2x,
                                                images/3x/11.jpg 3x,
                                                images/4x/11.jpg 4x"
                                        src="images/1x/11.jpg" 
                                        alt="Developers photo">
                                    <span class="developer__name developer__name--theme-black">Юрий Фролов</span>
                                </div>
                            </div>
                        </section>
                        <section class="row column column--devs">
                            <div class="column__developer developer developer--vote">
                                <img class="developer__photo developer__photo--theme-black"
                                    srcset="images/2x/10.jpg 2x,
                                            images/3x/10.jpg 3x,
                                            images/4x/10.jpg 4x"
                                    src="images/1x/10.jpg" 
                                    alt="Developers photo">
                                <span class="developer__name developer__name--theme-black">Яна Берникова</span>
                            </div>                    
                            <div class="column__developer developer developer--vote">
                                <img class="developer__photo developer__photo--theme-black"
                                    srcset="images/2x/2.jpg 2x,
                                            images/3x/2.jpg 3x,
                                            images/4x/2.jpg 4x"
                                    src="images/1x/2.jpg" 
                                    alt="Developers photo">
                                <span class="developer__name developer__name--theme-black">Александр Шлейко</span>
                            </div>
                            <div class="column__developer developer developer--vote developer--hide">
                                <img class="developer__photo developer__photo--theme-black"
                                    srcset="images/2x/6.jpg 2x,
                                            images/3x/6.jpg 3x,
                                            images/4x/6.jpg 4x"
                                    src="images/1x/6.jpg" 
                                    alt="Developers photo">
                                <span class="developer__name developer__name--theme-black">Андрей Мокроусов</span>
                            </div>
                        </section>
                    </div>
            </main>
        </div>
  `
}

function renderVoteResults(data, color){
    return `<div class="app app--theme-black">
                <header class="page-header">
                    <h1 class="page-header__title page-header__title--theme-black">Самый 🔎 внимательный разработчик</h1>
                    <h2 class="page-header__subtitle page-header__subtitle--theme-black">Спринт № 213</h2>
                </header>
                <main class="page-main">
                    <section class="page-main__place place place--results place--fifth">                
                        <div class="place__developer developer developer--results developer--fifth">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/11.jpg 2x,
                                        images/3x/11.jpg 3x,
                                        images/4x/11.jpg 4x"
                                src="images/1x/11.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Юрий Фролов</span>
                            <span class="developer__votes developer__votes--theme-black developer__votes--voted">15 голосов</span>
                        </div>
                        <div class="place__position position position--fifth position--theme-black position--voted position--regular position--border">
                            <span class="position__number position__number--results position__number--theme-black">5</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--third">                
                        <div class="place__developer developer developer--third">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/10.jpg 2x,
                                        images/3x/10.jpg 3x,
                                        images/4x/10.jpg 4x"
                                src="images/1x/10.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Яна Берникова</span>
                            <span class="developer__votes">17 голосов</span>
                        </div>
                        <div class="place__position position position--third position--theme-black position--no-voted position--regular">
                            <span class="position__number position__number--theme-black">3</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--first">
                        <div class="place__developer developer developer--top-results developer--first">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/1.jpg 2x,
                                        images/3x/1.jpg 3x,
                                        images/4x/1.jpg 4x"
                                src="images/1x/1.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Евгений Дементьев</span>
                            <span class="developer__votes">22 голоса</span>
                        </div>
                        <div class="place__position position position--first position--theme-black position--top position--no-voted">
                            <span class="position__number position__number--theme-black">1</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--second">                
                        <div class="place__developer developer developer--second">
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/4.jpg 2x,
                                        images/3x/4.jpg 3x,
                                        images/4x/4.jpg 4x"
                                src="images/1x/4.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--short developer__name--theme-black">Вадим Пацев</span>
                            <span class="developer__votes">19 голосов</span>
                        </div>
                        <div class="place__position position position--second position--theme-black position--no-voted position--regular">
                            <span class="position__number position__number--theme-black">2</span>
                        </div>
                    </section>
                    <section class="page-main__place place place--fourth">                
                        <div class="place__developer developer developer--fourth">                     
                            <img class="developer__photo developer__photo--theme-black"
                                srcset="images/2x/12.jpg 2x,
                                        images/3x/12.jpg 3x,
                                        images/4x/12.jpg 4x"
                                src="images/1x/12.jpg" 
                                alt="Developers photo">
                            <span class="developer__name developer__name--theme-black">Алексей Ярошевич</span>
                            <span class="developer__votes">16 голосов</span>
                        </div>
                        <div class="place__position position position--fourth position--theme-black position--no-voted position--regular">
                            <span class="position__number position__number--theme-black">4</span>
                        </div>
                    </section>
                </main>
            </div>`
}

function renderChart(data, color){
  return `<div class="app app--theme-black">
            <header class="page-header">
                <h1 class="page-header__title page-header__title--theme-black">Коммиты</h1>
                <h2 class="page-header__subtitle page-header__subtitle--theme-black">Спринт № 213</h2>
            </header>
            <main class="page-main page-main--chart">
                <section class="page-main__graphs">
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number">112</span>
                        <div class="position position--chart position--regular position--column-one position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">207</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number">152</span>
                        <div class="position position--chart position--regular position--column-two position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">208</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number">128</span>
                        <div class="position position--chart position--regular position--column-three position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">209</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number">164</span>
                        <div class="position position--chart position--regular position--column-four position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">210</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number">118</span>
                        <div class="position position--chart position--regular position--column-five position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">211</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number">140</span>
                        <div class="position position--chart position--regular position--column-six position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">212</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--top position__commits--theme-black number">182</span>
                        <div class="position position--chart position--column-seven position--top position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">213</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number"></span>
                        <div class="position position--chart position--regular position--column-eight position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">214</span>
                    </div>                    
                    <div class="page-main__position">
                        <span class="position__commits position__commits--regular position__commits--theme-black number"></span>
                        <div class="position position--chart position--regular position--column-nine position--theme-black"></div>
                        <span class="position__sprint position__sprint--theme-black number">215</span>
                    </div>                    
                </section>
                <section class="page-main__devs">
                    <div class="page-main__devs-wrapper">
                        <div class="developer developer--chart developer--winner developer--theme-black">
                            <img class="developer__photo developer__photo--chart developer__photo--theme-black"
                                srcset="images/2x/3.jpg 2x,
                                        images/3x/3.jpg 3x,
                                        images/4x/3.jpg 4x"
                                src="images/1x/3.jpg" 
                                alt="Developers photo">
                            <div class="developer__info developer__info--winner">
                                <span class="developer__name developer__name--chart developer__name--theme-black">Дарья Ковалева</span>
                                <span class="developer__commits developer__commits--chart">32</span>
                            </div>
                        </div>
                        <div class="developer developer--chart developer--top developer--theme-black developer--border">
                            <img class="developer__photo developer__photo--chart developer__photo--theme-black"
                                srcset="images/2x/9.jpg 2x,
                                        images/3x/9.jpg 3x,
                                        images/4x/9.jpg 4x"
                                src="images/1x/9.jpg" 
                                alt="Developers photo">
                            <div class="developer__info">
                                <span class="developer__name developer__name--chart developer__name--theme-black">Сергей Бережной</span>
                                <span class="developer__commits developer__commits--chart">27</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>`
}

function renderDiagram(data, color){
  return `<div class="app app--theme-black">
            <header class="page-header">
                <h1 class="page-header__title page-header__title--theme-black">Размер коммитов</h1>
                <h2 class="page-header__subtitle page-header__subtitle--theme-black">Спринт № 213</h2>
            </header>
            <main class="page-main page-main--diagram">
                <section class="page-main__diagram">
                    <div class="diagram__wrapper">
                        <svg class="diagram" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 400 400" >  
                            <defs>

                                <filter id="rounded">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                                    <!-- <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>    -->
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="rounded" />
                                    <feComposite in="SourceGraphic" in2="rounded" operator="atop"/>
                                </filter>

                                <filter id="shadow-first-theme-black" >

                                        <!-- Сдвиг тени -->
                                        <feOffset dx="0" dy="0"></feOffset>
                                        
                                        <!-- Размытие тени -->
                                        <feGaussianBlur stdDeviation="20" result="offset-blur"></feGaussianBlur>
                                        
                                        <!-- Инвертируем drop shadow
                                        чтобы создать внутреннюю тень -->
                                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite>
                                        
                                        <!-- Цвет и Прозрачность -->
                                        <feFlood flood-color="black" flood-opacity="0.65" result="color"></feFlood>
                                        
                                        <!-- Обрезаем цвет внутрь тени -->
                                        <feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite>
                                        
                                        <!-- Раcполагаем тень поверх элемента -->
                                        <feComposite operator="over" in="shadow" in2="SourceGraphic"></feComposite>
                                        </filter>





                                <radialGradient id="black-first" r="85%" fx="0.5" fy="0.5">
                                    <stop offset="50%" stop-color="#ffb533"></stop>
                                    <stop offset="72%" stop-color="#7c6133"></stop>
                                </radialGradient>                            
                                <radialGradient id="black-second" r="1" fx="0.5" fy="0.5">
                                    <stop offset="40%" stop-color="#F6BD4A"></stop>
                                    <stop offset="50%" stop-color="#F6DFB2"></stop>
                                    <stop offset="70%" stop-color="white"></stop>
                                    <stop offset="90%" stop-color="#F6AC17"></stop>
                                </radialGradient>           
                                <radialGradient id="black-third" r="1" fx="0.5" fy="0.5">
                                    <stop offset="40%" stop-color="#DCDCDC"></stop>
                                    <stop offset="50%" stop-color="#FFFFFF"></stop>
                                    <stop offset="60%" stop-color="#CDCDCD"></stop>
                                    <stop offset="90%" stop-color="#CDCDCD"></stop>
                                </radialGradient>
                                <radialGradient id="black-fourth" r="1" fx="0.5" fy="0.5">
                                    <stop offset="40%" stop-color="#DCDCDC"></stop>
                                    <stop offset="50%" stop-color="#F3F3F3"></stop>
                                    <stop offset="60%" stop-color="#B8B8B8"></stop>
                                    <stop offset="90%" stop-color="#B8B8B8"></stop>
                                </radialGradient>
                                <radialGradient id="white-first" r="1" fx="0.6" fy="0.5">
                                    <stop offset="40%" stop-color="#F6BD4A"></stop>
                                    <stop offset="50%" stop-color="#F6DFB2"></stop>
                                    <stop offset="70%" stop-color="white"></stop>
                                    <stop offset="90%" stop-color="#F6AC17"></stop>
                                </radialGradient>                            
                                <radialGradient id="white-second" r="1" fx="0.4" fy="0.5">
                                    <stop offset="40%" stop-color="#F6BD4A"></stop>
                                    <stop offset="50%" stop-color="#F6DFB2"></stop>
                                    <stop offset="70%" stop-color="white"></stop>
                                    <stop offset="90%" stop-color="#F6AC17"></stop>
                                </radialGradient>           
                                <radialGradient id="white-third" r="1" fx="0.5" fy="0.5">
                                    <stop offset="40%" stop-color="#DCDCDC"></stop>
                                    <stop offset="50%" stop-color="#FFFFFF"></stop>
                                    <stop offset="60%" stop-color="#CDCDCD"></stop>
                                    <stop offset="90%" stop-color="#CDCDCD"></stop>
                                </radialGradient>
                                <radialGradient id="white-fourth" r="1" fx="0.5" fy="0.5">
                                    <stop offset="40%" stop-color="#DCDCDC"></stop>
                                    <stop offset="50%" stop-color="#F3F3F3"></stop>
                                    <stop offset="60%" stop-color="#B8B8B8"></stop>
                                    <stop offset="90%" stop-color="#B8B8B8"></stop>
                                </radialGradient>
                            </defs>
                            <circle class="diagram__part diagram__part--first diagram__part--theme-black" transform="rotate(-120 200 200)" cx="200" cy="200" r="160"  fill="none"    stroke-width="50" stroke-dashoffset="1005.2" stroke-dasharray="167.5, 837.7" />
                            <circle class="diagram__part diagram__part--second diagram__part--theme-black" transform="rotate(-58 200 200)" cx="200" cy="200" r="160"  fill="none" stroke="#FCF0D0" stroke-width="50" stroke-dashoffset="1005.2" stroke-dasharray="167.5, 837.7" />
                            <circle class="diagram__part diagram__part--third diagram__part--theme-black" transform="rotate(5 200 200)" cx="200" cy="200" r="160"  fill="none" stroke="#C4C4C4" stroke-width="50" stroke-dashoffset="1005.2" stroke-dasharray="335, 670" />
                            <circle class="diagram__part diagram__part--fourth diagram__part--theme-black" transform="rotate(137 200 200)" cx="200" cy="200" r="160"  fill="none" stroke="#C4C4C4" stroke-width="50" stroke-dashoffset="1005.2" stroke-dasharray="296, 695" />
                        </svg>
                    </div>
                </section>
                <section class="page-main__stats">
                    <div class="page-main__stats-wrapper">
                        <div class="stats-line stats-line--theme-black">
                            <div class="stats-line__param-wrapper">
                                <div class="stats-line__dot stats-line__dot--theme-black stats-line__dot--thousand"></div>
                                <span class="stats-line__param stats-line__param--theme-black">>1001 строки</span>
                            </div>
                            <div class="stats-line__values">
                                <span class="stats-line__added stats-line__added--theme-black">+8</span>
                                <span class="stats-line__current stats-line__current--theme-black">30</span>
                            </div>
                        </div>
                        <div class="stats-line stats-line--border stats-line--theme-black">
                            <div class="stats-line__param-wrapper">
                                <div class="stats-line__dot stats-line__dot--theme-black stats-line__dot--five-hundred"></div>
                                <span class="stats-line__param stats-line__param--theme-black">501 - 1000 строк</span>
                            </div>
                            <div class="stats-line__values">
                                <span class="stats-line__added stats-line__added--theme-black">+6</span>
                                <span class="stats-line__current stats-line__current--theme-black">32</span>
                            </div>
                        </div>
                        <div class="stats-line stats-line--border stats-line--theme-black">
                            <div class="stats-line__param-wrapper">
                                <div class="stats-line__dot stats-line__dot--theme-black stats-line__dot--one-hundred"></div>
                                <span class="stats-line__param stats-line__param--theme-black">101 - 500 строк</span>
                            </div>
                            <div class="stats-line__values">
                                <span class="stats-line__added stats-line__added--theme-black">+16</span>
                                <span class="stats-line__current stats-line__current--theme-black">58</span>
                            </div>
                        </div>
                        <div class="stats-line stats-line--border stats-line--theme-black">
                            <div class="stats-line__param-wrapper">
                                <div class="stats-line__dot stats-line__dot--theme-black stats-line__dot--one"></div>
                                <span class="stats-line__param stats-line__param--theme-black">1 - 100 строк</span>
                            </div>
                            <div class="stats-line__values">
                                <span class="stats-line__added stats-line__added--theme-black">+12</span>
                                <span class="stats-line__current stats-line__current--theme-black">62</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>`
}

function renderActivity(data, color){
    return `<div class="app app--theme-black">
                <header class="page-header">
                    <h1 class="page-header__title page-header__title--theme-black">Коммиты, 1 неделя</h1>
                    <h2 class="page-header__subtitle page-header__subtitle--theme-black">Спринт № 213</h2>
                </header>
                <main class="page-main page-main--activity">                
                    <section class="page-main__activity activity">
                            <div class="activity__hour activity__hour--odd activity__hour--one">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--two">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--three">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--four">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--five">
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--six">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--seven">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--extra activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--eight">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--nine">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--extra activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--max activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--ten">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--extra activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--max activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--eleven">
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--mid activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--twelve">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--max activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--max activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--extra activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--thirteen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--mid activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--max activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--fourteen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--extra activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--max activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--fifteen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--sixteen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--seventeen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--extra-desktop activity__graph--extra activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--max activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--eighteen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--nineteen">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--max-desktop activity__graph--max activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--twenty">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--twentyone">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--twentytwo">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--odd activity__hour--twentythree">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--mid activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--mid-desktop activity__graph--min activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                            <div class="activity__hour activity__hour--even activity__hour--twentyfour">
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--monday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--tuesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--mid activity__graph--wednesday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--thursday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--friday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--saturday"></div>
                                <div class="activity__graph activity__graph--theme-black activity__graph--min-desktop activity__graph--min activity__graph--sunday"></div>
                            </div>
                    </section>
                    <section class="page-main__legend legend">
                            <div class="legend__symbol legend__symbol--theme-black legend__symbol--one">
                                <div class="legend__sample legend__sample--size-bar">
                                    <div class="legend__vertical-bar legend__vertical-bar--theme-black"></div>
                                    <div class="legend__horizontal-bar legend__horizontal-bar--theme-black"></div>
                                    <div class="legend__vertical-bar legend__vertical-bar--theme-black"></div>
                                </div>
                            </div>
                            <div class="legend__symbol legend__symbol--theme-black legend__symbol--zero">
                                <div class="legend__sample legend__sample--zero legend__sample--theme-black"></div>
                            </div>
                            <div class="legend__symbol legend__symbol--theme-black legend__symbol--two">
                                <div class="legend__sample legend__sample--one legend__sample--theme-black"></div>
                            </div>
                            <div class="legend__symbol legend__symbol--theme-black legend__symbol--four">
                                <div class="legend__sample legend__sample--three legend__sample--theme-black"></div>
                            </div>
                            <div class="legend__symbol legend__symbol--theme-black legend__symbol--six">
                                <div class="legend__sample legend__sample--five legend__sample--theme-black"></div>
                            </div>
                    </section>
                </main>
            </div>`
}

 /* 
    "data": {
      "title": "Больше всего коммитов",
      "subtitle": "Спринт № 213",
      "emoji": "👑",
      "users": [
        {"id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "32"},
        {"id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "27"},
        {"id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "22"},
        {"id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "20"},
        {"id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "19"}
      ]
    }
  
   */