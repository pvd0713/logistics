<script setup></script>

<template>
  <div class="contain">
    <header class="center">
      <h1>ST<span>&</span>L</h1>
      <nav>
        <ul>
          <li>О компании</li>
          <li>Функциональность</li>
          <li>Преимущества</li>
          <li>Эффективность внедрения</li>
          <li>Вакансии</li>
          <li><div class="enter" @click="$router.push('/logistics/messages')">Вход</div></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <img src="@/assets/img/MainImg.jpg" alt="Hero Image" />
    </section>

    <section class="center about">
      <div class="relative">
        <div class="flex flex-col w-3/5 gap-y-14 py-20">
          <h2>О КОМПАНИИ</h2>
          <p>
            <span>Smart Trade & Logistic</span> - разработчик системы, предназначенный для
            управления торговлей и логистикой.
          </p>
        </div>

        <img src="@/assets/img/map.jpg" alt="Country Map" />
      </div>
    </section>

    <section class="functionality center">
      <h2>ФУНКЦИОНАЛЬНОСТЬ</h2>
      <div class="functionality-sections">
        <div class="fun-item">
          <h3>Цепочка поставок</h3>
          <ol>
            <li>Поиск партнера</li>
            <li>Заключение и документальное сопровождение сделок</li>
            <li>Контроль исполнения сделок</li>
            <li>Актово-претензионная работа</li>
            <li>Отчетные и другие документы</li>
          </ol>
          <div>
            <img src="@/assets/img/picMain1.jpg" alt="pic" />
          </div>
        </div>

        <div class="fun-item">
          <h3>Автомобильный транспорт</h3>
          <ol>
            <li>Контроль исполнения сделок</li>
            <li>
              Документальное сопровождение отгрузок и транспортировки, в том числе
              актово-претензионная деятельность
            </li>
            <li>Планирование отгрузок</li>
            <li>Электронная очередь</li>
            <li>Контроль транспортного средства</li>
          </ol>
          <div>
            <img src="@/assets/img/picMain2.jpg" alt="pic" />
          </div>
        </div>

        <div class="fun-item">
          <h3>Железнодорожный транспорт</h3>
          <ol>
            <li>Контроль исполнения сделок</li>
            <li>
              Документальное сопровождение отгрузок и транспортировки, в том числе
              актово-претензионная деятельность
            </li>
            <li>Планирование отгрузок</li>
            <li>Контроль состояния ГУ-12 и ЖД накладной</li>
            <li>Контроль транспортного средства</li>
          </ol>
          <div>
            <img src="@/assets/img/picMain3.jpg" alt="pic" />
          </div>
        </div>
      </div>
    </section>

    <section class="advantages center">
      <h2>ПРЕИМУЩЕСТВА</h2>
      <div class="advantages-grid">
        <div class="border-r-2 border-[rgba(0,0,0,0.2)] flex items-center gap-8">
          <img class="w-10" src="@/assets/img/hand.svg" alt="icon" />
          <p>Простота использования</p>
        </div>
        <div class="flex items-center gap-8">
          <img class="w-10" src="@/assets/img/rub.svg" alt="icon" />
          <p>Низкая стоимость использования</p>
        </div>
        <div
          class="border-r-2 border-b-2 border-t-2 border-[rgba(0,0,0,0.2)] flex items-center gap-8"
        >
          <img class="w-10" src="@/assets/img/clock.svg" alt="icon" />
          <p>Высокая скорость и оперативность взаимодействия с другими клиентами</p>
        </div>
        <div class="border-t-2 border-b-2 border-[rgba(0,0,0,0.2)] flex items-center gap-8">
          <img class="w-10 h-14" src="@/assets/img/filter.svg" alt="icon" />
          <p>
            Широкий функционал использования от поиска партнера до закрытия сделки, все участники
            сделки
          </p>
        </div>
        <div class="border-r-2 border-[rgba(0,0,0,0.2)] flex items-center gap-8">
          <img class="w-10 object-none h-14" src="@/assets/img/list.svg" alt="icon" />
          <p>Интеграция с другими информационными системами</p>
        </div>
        <div class="flex items-center gap-8">
          <img class="w-10" src="@/assets/img/timeclock.svg" alt="icon" />
          <p>Быстрое внедрение</p>
        </div>
      </div>
    </section>

    <section class="effectiveness center">
      <div class="relative">
        <h2>ЭФФЕКТИВНОСТЬ ВНЕДРЕНИЯ</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div>
              <span>Рост объемов и эффективности</span> реализации или закупок товаров и услуг
            </div>
          </div>
          <div class="w-28 flex justify-center relative">
            <img src="@/assets/img/number1.svg" alt="icon" />
            <div class="border border-[rgba(246,153,18,0.6)] h-[90px] absolute top-[155px]"></div>
          </div>
          <div class="timeline-item"></div>
          <div class="timeline-item"></div>
          <div class="w-28 flex justify-center relative">
            <img src="@/assets/img/number2.svg" alt="icon" />
            <div class="border border-[rgba(246,153,18,0.6)] h-[90px] absolute top-[155px]"></div>
          </div>
          <div class="timeline-item">
            <div>
              <span>Повышение скорости и оперативности</span> взаимодействия с другими клиентами
            </div>
          </div>
          <div class="timeline-item">
            <div><span>Контроль и прозрачность</span> планирования и исполнения сделок</div>
          </div>
          <div class="w-28 flex justify-center relative">
            <img src="@/assets/img/number3.svg" alt="icon" />
            <div class="border border-[rgba(246,153,18,0.6)] h-[90px] absolute top-[155px]"></div>
          </div>
          <div class="timeline-item"></div>
          <div class="timeline-item"></div>
          <div class="w-28 flex justify-center relative">
            <img src="@/assets/img/number4.svg" alt="icon" />
            <div class="border border-[rgba(246,153,18,0.6)] h-[90px] absolute top-[155px]"></div>
          </div>
          <div class="timeline-item">
            <div>
              <span>Просмотр оперативной информации</span> при интеграция с другими информационными
              системами, в том числе АС Этран на стороне грузоотправителя/получателя
            </div>
          </div>
          <div class="timeline-item">
            <div><span>Централизация</span> потока инфрмации</div>
          </div>
          <div class="w-28 flex justify-center relative">
            <img src="@/assets/img/number5.svg" alt="icon" />
          </div>
          <div class="timeline-item"></div>
        </div>
        <!-- <img
          class="absolute top-[-200px] right-24 z-[-1]"
          src="@/assets/img/Rectangle1.png"
          alt="pic"
        />
        <img
          class="absolute top-[200px] right-[-120px] z-[-1]"
          src="@/assets/img/Rectangle2.png"
          alt="pic"
        /> -->
      </div>
    </section>

    <section class="vacancies center">
      <h2>ВАКАНСИИ</h2>
      <p>
        К нам в команду требуются новые сотрудники. Вы можете отправить своё резюме по адресу:
        <span>stl@mail.ru</span>
      </p>
    </section>

    <section class="footer bg-[#676767] h-[302px]"></section>
  </div>
</template>

<style scoped lang="scss">
.contain {
  font-family: 'Montserrat', sans-serif;
  color: #333;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  height: 63px;
  background-color: #727171;
  min-width: 1000px;
}

header h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 64px;
  line-height: 77px;
  color: white;
}

header span {
  color: #f69912;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
}

nav ul li {
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: white;
  position: relative;
}

.enter {
  color: #f69912;
  border: 1px solid #f69912;
  padding: 4px 10px;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
  min-width: 1000px;
}

.hero img {
  width: 100%;
  height: auto;
}

.about {
  background: none;
  border-radius: 10px;
  display: flex;
  position: relative;
  margin-bottom: 100px;
  min-width: 1000px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    line-height: 61px;
    color: #000;
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 32px;
    line-height: 39px;
    color: #f69912;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 32px;
    line-height: 39px;
    color: #000;
  }
}

.about img {
  width: 700px;
  height: auto;
  margin-top: 40px;
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
}

.functionality {
  margin-bottom: 160px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    line-height: 61px;
    color: #000;
    margin-bottom: 60px;
  }
}

.functionality-sections {
  display: flex;
  gap: 7px;
}

.fun-item {
  background: none;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.25);
  min-height: 503px;
  position: relative;
  min-width: 328px;

  div {
    position: relative;
    flex-grow: 3;
    bottom: 0;
    left: -20px;
  }

  img {
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
  }
}

.functionality-sections h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  line-height: 39px;
  color: #f69912;
  text-decoration: underline;
  height: 78px;
  margin-bottom: 23px;
  margin-top: 27px;
  letter-spacing: -1.5px;
}

.functionality-sections ol {
  list-style: decimal;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  line-height: 26px;
  color: #000;
  padding-left: 24px;
}

.functionality-sections ol li {
  margin-bottom: 5px;
}

.advantages {
  padding-left: calc(50% - 650px);
  padding-right: calc(50% - 650px);
  min-width: 1000px;
  margin-bottom: 160px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    line-height: 61px;
    color: #000;
    margin-bottom: 60px;
    padding-left: 50px;
  }
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.advantages-grid div {
  padding-top: 42px;
  padding-bottom: 42px;
  padding-left: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 39px;
}

.effectiveness {
  margin-bottom: 160px;
  min-width: 1000px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    color: #000;
    margin-bottom: 60px;
    padding-left: 50px;
  }

  .timeline {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    justify-items: center;
    gap: 0px 25px;
    min-width: 1000px;
  }

  .timeline-item {
    width: 100%;
    height: 200px;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    align-items: center;
    text-align: center;
    color: #000;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);

    span {
      font-weight: 700;
      color: #f69912;
    }
  }
}

.vacancies {
  margin-bottom: 160px;
  min-width: 1000px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    color: #000;
    margin-bottom: 60px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #000;
  }

  span {
    color: #f69912;
    cursor: pointer;
  }
}

.footer {
  min-width: 1000px;
}
</style>
