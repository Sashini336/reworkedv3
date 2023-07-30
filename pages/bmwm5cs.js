import Head from "next/head";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Seller from "../components/seller";

export default function CarAd(props) {
  const images = [
    "https://mobistatic4.focus.bg/mobile/photosmob/199/1/big1/11681392318747199_Kd.jpg",
    "https://mobistatic4.focus.bg/mobile/photosmob/199/1/big1/11681392318747199_kt.jpg",
    "https://mobistatic4.focus.bg/mobile/photosmob/199/1/big1/11681392318747199_F.jpg",
    "https://mobistatic4.focus.bg/mobile/photosmob/199/1/big1/11681392318747199_kX.jpg",
    "https://mobistatic4.focus.bg/mobile/photosmob/199/1/big1/11681392318747199_as.jpg",
  ];
  const data = {
    title: "BMW M5 Competition",
    price: "195 000 лв.",
    date: "май 2020г.",
    engine: "Бензинов",
    category: "Седан",
    horsepower: "780кс",
    trans: "Автоматична",
    eco: "Евро 6",
    millage: "30000 км",
    color: "Син",
    moreInfo: `Дата на първа регистрация 28. 05. 2020г. Автомобила е с пълна сервизна история, обслужен преди 3 000км.
    Два комплекта гуми Pirelli P Zero летни и зимни.
    Безплатно сервизно обслужване до 27. 05. 24г или 80 000км.
    - Софтуер MHD Tuning Stage 2
    - MHD Wireless Adapter за следене на живи данни и бързо препрограмиране на карти
    - Даунпайпове горни и долни
    - Цялостна спортна изпускателна система REMUS Cat-Back
    - Въздушни филтри K&N Performance
    - Софтуер на скоростна кутия Stage 2
    - Адаптивни Лазерни фарове
    - HARMAN/KARDON озвучителна система
    - Competition пакет с карбонов таван
    - Shadow line пакет
    - Дистроник stop&go
    - Асистент за шофиране Plus/следене на пътната маркировка с интервенция на волана и спирачна функция против удър
    - Паркинг асистент Plus/360 градуса гледка, автономно паркиране
    - Сензори за налягане и температура на гумите
    - Head Up дисплей
    - Управление с жестове на мултимедията
    - Комфортен достъп
    - Меко затваряне на вратите
    - Слънцезащитно хамелеон фолио на предният прозорец
    - Подгряване на предни и задни седалки
    - Обдухване на предни седалки
    - Масаж на предни седалки
    - Отопление на волана
    - Амбиентно осветление
    - Климатроник с 4 зони
    - Керамично покритие на контролните елементи
    -Отваряне и затваряне на багажника с крак
    Не се начислява ДДС ! `,
  };

  const seller = [
    {
      logo: "https://cdn2.focus.bg/mobile/images/houseslogos/h12326225621846761.pic?1689762742",
      brand: "Ауто Бавария",
      region: "София",
      city: "гр.София",
      more: "https://autobavaria.mobile.bg/",
      phone: "08767214212",
    },
  ];
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="wholePageContainer">
          <h3 id="singleAdTitle">{data.title}</h3>
          <div className="adContainer">
            {seller.map((seller) => {
              return (
                <Seller
                  logo={seller.logo}
                  brand={seller.brand}
                  region={seller.region}
                  city={seller.city}
                  more={seller.more}
                  phone={seller.phone}
                ></Seller>
              );
            })}
            <div className="sellerInfo"></div>
            <div class="swiperContainer">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="external-buttons"
                spaceBetween={25}
                slidesPerView={1}
                navigation
                updateOnWindowResize
                observer
                observerParents
                initialSlide={1}
                loop
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img alt="img" id="imagesSingleAd" src={image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="desc">
              <p id="name">{data.title}</p>
              <p id="price">{data.price}</p>
              <div className="singleAdContainer">
                <ul className="specsSingleAd">
                  <li>
                    Дата на производство : <p id="infoCarSingle">{data.date}</p>
                  </li>
                  <li>
                    Тип двигател: <p id="infoCarSingle">{data.engine}</p>
                  </li>
                  <li>
                    Мощност: <p id="infoCarSingle">{data.horsepower}</p>
                  </li>
                  <li>
                    Скоростна кути: <p id="infoCarSingle">{data.trans}</p>
                  </li>
                  <li>
                    Категория: <p id="infoCarSingle">{data.category}</p>
                  </li>
                  <li>
                    Евростандарт: <p id="infoCarSingle">{data.eco}</p>
                  </li>
                  <li>
                    Пробег: <p id="infoCarSingle">{data.millage}</p>
                  </li>
                  <li>
                    Цвят: <p id="infoCarSingle">{data.color}</p>
                  </li>
                </ul>
              </div>
              <div className="moreInfoAboutCar">
                <a
                  href="https://www.auto-data.net/bg/bmw-m5-f90-lci-facelift-2020-cs-4.4-v8-635hp-xdrive-steptronic-42156"
                  target="_blank"
                >
                  Технически характеристики !
                </a>
              </div>
              <div className="moreInfoContainer">
                <p id="additionalInfo"> Допълнителна Информация: </p>
                <p id="singleInfo">{data.moreInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
