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
          <li><div class="enter" @click="$router.push('/logistics')">Вход</div></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <img src="@/assets/img/MainImg.jpg" alt="Hero Image" />
    </section>

    <section class="center about">
      <div class="flex flex-col w-3/5 gap-y-14 py-20">
        <h2>О КОМПАНИИ</h2>
        <p>
          <span>Smart Trade & Logistic</span> - разработчик системы, предназначенный для управления
          торговлей и логистикой.
        </p>
      </div>

      <img src="@/assets/img/map.jpg" alt="Country Map" />
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

    <section class="advantages">
      <h2>ПРЕИМУЩЕСТВА</h2>
      <div class="advantages-grid">
        <div>Простота использования</div>
        <div>Низкая стоимость использования</div>
        <div>Высокая скорость и оперативность взаимодействия с другими клиентами</div>
        <div>
          Широкий функционал использования от поиска партнера до закрытия сделки, все участники
          сделки
        </div>
        <div>Интеграция с другими информационными системами</div>
        <div>Быстрое внедрение</div>
      </div>
    </section>

    <section class="vacancies">
      <h2>ВАКАНСИИ</h2>
      <p>
        К нам в команду требуются новые сотрудники. Вы можете отправить своё резюме по адресу:
        stl@mail.ru
      </p>
    </section>

    <section class="effectiveness">
      <h2>ЭФФЕКТИВНОСТЬ ВНЕДРЕНИЯ</h2>
      <ul>
        <li>Рост объемов и эффективности реализации или закупок товаров и услуг</li>
        <li>Повышение скорости и оперативности взаимодействия с другими клиентами</li>
        <li>Контроль и прозрачность планирования и исполнения сделок</li>
        <li>
          Просмотр оперативной информации при интеграции с другими информационными системами, в том
          числе АС Этран на стороне грузоотправителя/получателя
        </li>
        <li>Централизация информации</li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
/* Import Montserrat Font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* Container and Layout */
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
  width: 55%;
  height: auto;
  margin-top: 40px;
  position: absolute;
  z-index: -1;
  right: 0;
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
  min-width: 395px;

  div{
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
  font-size: 32px;
  line-height: 39px;
  color: #f69912;
  text-decoration: underline;
  height: 78px;
  margin-bottom: 23px;
  margin-top: 27px;
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

/* Advantages Section Styles */
.advantages {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.advantages-grid div {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Vacancies Section Styles */
.vacancies {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

/* Effectiveness Section Styles */
.effectiveness {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

.effectiveness ul {
  list-style: disc;
  padding-left: 20px;
  color: #000;
}

.effectiveness ul li {
  margin-bottom: 5px;
}
</style>
