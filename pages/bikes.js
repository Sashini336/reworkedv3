import Head from "next/head";
import Ad from "../components/ad";

const data = [
  {
    title: "Segway Powersports UTV-Fugleman Fugleman 1000 X",
    image:
      "https://mobistatic1.focus.bg/mobile/photosmob/528/5/big/51645110842382528_87.jpg",
    path: "", // <-- Change to my path (this is for test)
    price: "33 499 лв.",
    millage: " 10 км",
    city: "София, с.Бистрица",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Motorcycles</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1643111191115-f05b24332bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
        />
      </Head>
      <main>
        <div className="container">
          <div className="ads">
            {data.map((ads) => {
              return (
                <Ad
                  title={ads.title}
                  image={ads.image}
                  path={ads.path}
                  price={ads.price}
                  millage={ads.millage}
                  city={ads.city}
                ></Ad>
              );
            })}
            {data.map((ads) => {
              return (
                <Ad
                  title={ads.title}
                  image={ads.image}
                  path={ads.path}
                  price={ads.price}
                  millage={ads.millage}
                  city={ads.city}
                ></Ad>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
