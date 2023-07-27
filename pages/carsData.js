import { getLocalData } from "../lib/localdata";

export async function getStaticProps(context) {
  const { id } = context.params;
  const localData = await getLocalData();

  const adData = localData.find((ad) => ad.id === Number(id));

  return {
    props: {
      adData,
    },
  };
}

export async function getStaticPaths() {
  const localData = await getLocalData();
  const paths = localData.map((ad) => ({
    params: { id: ad.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function AdPage({ adData }) {
  return <carAd adData={adData} />;
}
