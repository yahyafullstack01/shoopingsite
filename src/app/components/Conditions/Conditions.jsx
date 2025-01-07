import React from "react";

const Conditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 md:p-16">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Повернення та обмін товару
      </h1>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
          ЗАГАЛЬНІ УМОВИ ПОВЕРНЕННЯ ТА ОБМІНУ ТОВАРУ:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Повернення та обмін товарів можливе протягом 14 днів після отримання.</li>
          <li>Обмін можливий як на інший розмір та колір, так і на будь-яку іншу річ.</li>
          <li>
            У разі отримання товару неналежної якості обмін та повернення оплачується нашим магазином. 
            Якщо вам доставили не той товар, який ви замовляли, він теж відноситься до товару неналежної 
            якості та доставки оплачуються нами.
          </li>
          <li>
            Товари належної якості підлягають як поверненню, і обміну без пояснення причин. У разі 
            повернення/обміну товарів належної якості (без браку), поштові витрати оплачує покупець.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Ви можете повернути або обміняти товар належної якості, якщо:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Товар не був у вживанні і не має слідів використання: подряпин, сколів, потертостей, плям тощо;</li>
          <li>Товар зберігає товарний вигляд та свої споживчі властивості.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          ОБМІНУ ТА ПОВЕРНЕННЮ НЕ ПІДЛЯГАЮТЬ:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Вироби, що пошиті за мірками клієнта;</li>
          <li>Вироби, у яких змінена довжина виробу/ фасон за проханням замовника;</li>
        </ul>
        <p className="mt-2">
          У даному випадку можлива лише переробка за попередньою домовленістю.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Способи доставки
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Нова пошта:</span> доставка у відділення та поштомати
          </li>
          <li>
            <span className="font-semibold">Укр пошта:</span> доставка у відділення
          </li>
          <li>
            <span className="font-semibold">Закордон за домовленістю:</span> Нова пошта або Укр пошта
          </li>
          <li>
            <span className="font-semibold">Самовивіз:</span> з міста Харків або Івано-Франківськ
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Додаткова інформація:
        </h2>
        <p className="mb-2">
          Ми зможемо оформити повернення тоді, коли отримаємо Вашу посилку на нашому складі. Це пересилання може зайняти 
          до 5-7 робочих днів без урахування вихідних та святкових днів.
        </p>
        <p>
          Для обміну або повернення телефонуйте у технічну підтримку (24/7):{" "}
          <span className="font-bold text-blue-600">+38-067-579-5497</span>
        </p>
      </section>
    </div>
  );
};

export default Conditions;
