export default function Seller({ brand, phone, region, city, logo, more }) {
  return (
    <div className="sellerContainer">
      <div className="sellerInfo">
        <img src={logo} alt="logo" id="sellerLogo" />
        <p id="sellerBrand">{brand}</p>
        <p id="sellerLocation">
          {region}, {city}
        </p>
        <a id="sellerAds" href={more}>
          View all our cars!
        </a>
        <p id="sellerPhone">{phone}</p>
      </div>
    </div>
  );
}
