import Head from "next/head";
import Ad from "../components/ad";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState } from "react";
import { getLocalData } from "../lib/localdata";
import { useRouter } from "next/router";
import Link from "next/link";

const adsPerPage = 12; // Change this value as per your preference

export async function getStaticProps() {
  const localData = await getLocalData();

  return {
    props: { localData },
  };
}

export default function Home({ localData }) {
  const [searchField, setSearchField] = useState("");
  const [displayedAds, setDisplayedAds] = useState(adsPerPage);
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const router = useRouter();

  const loadMoreAds = () => {
    setDisplayedAds((prevDisplayedAds) => prevDisplayedAds + adsPerPage);
  };

  const filteredCars = localData.filter((car) => {
    return car.title.toLowerCase().startsWith(searchField.toLowerCase());
  });

  const paginatedAds = filteredCars.slice(0, displayedAds);

  return (
    <div>
      <Head>
        <title>CarSite</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        />
      </Head>
      <main>
        <div className="container">
          <div className="searchContainer">
            <form action="" className="searchBar">
              <input
                className="search"
                type="search"
                placeholder="Търсене"
                value={searchField}
                onChange={handleChange}
              ></input>
            </form>
          </div>
          <div className="ads">
            {paginatedAds.map((ads) => {
              return (
                <Ad
                  key={ads.id}
                  id={ads.id}
                  title={ads.title}
                  image={ads.image}
                  path={ads.path}
                  price={ads.price}
                  millage={ads.millage}
                  year={ads.year}
                  fuel={ads.fuel}
                  city={ads.region}
                ></Ad>
              );
            })}
          </div>
          <div className="loadMoreAdsContainer">
            {displayedAds < filteredCars.length && (
              <button className="loadMoreAds" onClick={loadMoreAds}>
                Още обяви
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
