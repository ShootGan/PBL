import { createState } from "@hookstate/core";

export type Place = {
  name: string;
  id: number;
  description: string;
  imageURL: string;
  Gmap: string;
  longitude: number;
  latitude: number;
};

const getPlaces = (): Place[] => {
  return [
    {
      id: 1,
      name: "Sztolnia Luiza",
      description: "opis tutaj dlugi taki lorem ipsum dolar trarala lalalal",
      imageURL:
        "https://www.zabytkitechniki.pl/uploads/media/document/0010/79/thumb_978336_document_box.jpeg",
      Gmap: "https://goo.gl/maps/zohDcMNLMFGPtHyy7",
      longitude: 18.79899775720797,
      latitude: 50.29656214988968,
    },
    {
      id: 2,
      name: "Siusiak",
      description:
        "opisgsdgs tutaj dlugi taki lorem ipsum dolar trarala lalalal",
      imageURL:
        "https://koszulkowo.com/media/catalog/product/cache/e96e4cf616408cb4fdb26c749a353feb/k/s/kszxd_zoom.jpg",
      Gmap: "https://goo.gl/maps/zohDcMNLMFGPtHyy7",
      longitude: 50.29656214988968,
      latitude: 18.799104455363263,
    },
    {
      id: 3,
      name: "XDD",
      description:
        "opisasas tutaj dlugi taki lorem ipsum dolar trarala lalalal",
      imageURL:
        "https://www.zabytkitechniki.pl/uploads/media/document/0010/79/thumb_978336_document_box.jpeg",
      Gmap: "https://goo.gl/maps/zohDcMNLMFGPtHyy2",
      longitude: 50.29656214988968,
      latitude: 18.799104455363263,
    },
  ];
};

const placesStore = createState(getPlaces());

export default placesStore;
