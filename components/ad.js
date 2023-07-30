import Link from "next/link";

export default function Ad({
  title,
  image,
  price,
  path,
  millage,
  fuel,
  city,
  year,
  id,
}) {
  return (
    <div className="smallAd">
      <img id="image" src={image} />
      <div className="infoSmallAd">
        <Link class="link" id="link" href={`/${id}`}>
          {title}
        </Link>
        <p className="priceSmallAd">{price}</p>
        <p className="millageSmallAd">{millage}</p>
        <p className="yearSmallAd">{year} г.</p>
        {/* <p className="fuelSmallAd">{fuel}</p> */}
        <p className="citySmallAd">{city}</p>
      </div>
    </div>
  );
}
