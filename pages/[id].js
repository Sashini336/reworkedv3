import { getLocalData } from "../lib/localdata";
import Head from "../components/header";
import Seller from "../components/seller";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export async function getStaticProps({ params }) {
  const localData = await getLocalData();
  const filteredData = localData.filter((ads) => Number(params.id) === ads.id);
  const data = filteredData[0];

  return {
    props: { data },
  };
}

export const getStaticPaths = async () => {
  // Fetch the necessary data to determine the paths
  const localData = await getLocalData();

  // Create an array of objects with `params` containing the dynamic route parameter `id`
  const paths = localData.map((ads) => ({
    params: { id: ads.id.toString() },
  }));

  // Return the object with `paths` and `fallback` value
  return {
    paths,
    fallback: false,
  };
};

function SingleCarAds({ data }) {
  const images = [""];

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
                    <img alt="img" id="imagesSingleAd" src={data.image} />
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
                    Дата на производство : <p id="infoCarSingle">{data.year}</p>
                  </li>
                  <li>
                    Тип двигател: <p id="infoCarSingle">{data.fuel_type}</p>
                  </li>
                  <li>
                    Мощност: <p id="infoCarSingle">{data.horsepower}</p>
                  </li>
                  {/* <li>
                    Кубатура[куб.см]{" "}
                    <p id="infoCarSingle">{data.engine_liters}</p>
                  </li> */}
                  <li>
                    Скоростна кути:{" "}
                    <p id="infoCarSingle">{data.transmission}</p>
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
              <div className="moreInfoContainer">
                <p id="additionalInfo"> Допълнителна Информация: </p>
                <p id="singleInfo">{data.moreInformation}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SingleCarAds;
