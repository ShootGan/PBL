import { createState } from "@hookstate/core";

export type Place = {
  name: string;
  id: number;
  description: string;
  imageURL: string;
  Gmap: string;
  longitude: number;
  latitude: number;
  freeParking: boolean | null;
  freeEntry: boolean;
  EasyAcces: boolean;
};

const getPlaces = (): Place[] => {
  return [
    {
      id: 1,
      name: "Sztolnia Królowa Luiza - Zabrze",
      description:
        "Sztolnia Królowa Luiza to po??czenie dwóch górniczych, historycznych obiektów: G?ównej Kluczowej Sztolni Dziedzicznej (najd?u?szy obiekty hydrotechniczny w europejskim górnictwie w?glowym) oraz Kopalni Królowa Luiza Do atrakcji nale??: podziemny park maszyn górniczych, zlokalizowany w dawnych wyrobiskach kopalni, trasa wodna oraz rozbudowana przestrze? naziemna z tematycznymi parkami rozrywkowo-edukacyjnymi. Sztolnia Królowa Luiza jest cz??ci? Muzeum Górnictwa W?glowego w Zabrzu.\r\nSztolnia jest wybitnym dzie?em in?ynierskim, które dokumentuje poziom rozwoju techniki w I po?. XIX w. w zakresie budownictwa podziemnego. Dzi?ki odpowiedniemu udost?pnieniu mo?na obecnie sp?ywa? ?odziami na odcinku ok. 1100 m. W podziemnym porcie za?adunkowym w pok?adzie w?gla 509 tury?ci mog? zobaczy?, w jaki sposób w przesz?o?ci wykorzystywano Sztolni? do transportu w?gla drog? wodn?.\r\n",
      imageURL:
        "https://www.zabytkitechniki.pl/uploads/media/document/0010/79/thumb_978336_document_box.jpeg",
      Gmap: "https://goo.gl/maps/zohDcMNLMFGPtHyy7",
      longitude: 18.79899775720797,
      latitude: 50.29656214988968,
      freeParking: true,
      freeEntry: false,
      EasyAcces: true,
    },
    {
      id: 2,
      name: "Nieczynny kamieniołom wapieni triasowych Miko?ów Mokre",
      description:
        "Nazwa Fio?kowej Góry pochodzi od kwitn?cych wiosn? fio?ków le?nych. Wzgórze zbudowane jest z wapieni warstw gogoli?skich. Wapienie te stanowi?y surowiec do wypalania wapna, o czym ?wiadczy du?a ilo?? (8, 13?) zachowanych na obrze?ach kamienio?omu wapienników. Wapienniki to kamienno-ceglane budowle, s?u??ce w XVIII i XIX w. do wypalania wapna, cho? jeszcze do pocz?tku lat 80. XX wieku trwa?a eksploatacja.\r\nKamienio?om ma kszta?t amfiteatralny. ?ciany si?gaj? 20m wysoko?ci i s? do?? dobrze zachowane. \r\nWyrobiska s? opuszczone i zaro?ni?te, mo?na jednak znale?? tu skamienia?o?ci charakterystyczne dla utworów w?glanowych gónego triasu (liliowce, skorupy ma??y, ramienionogów, z?by ryb, lub niewielkie ko?ci gadów). Wyst?puj? tu utwory triasu ?rodkowego – wapienia muszlowego dolnego. Na dolny wapie? muszlowy sk?adaj? si? warstwy gogoli?skie i dolomity kruszcono?ne. Ods?aniaj?ce si? w kamienio?omie warstwy gogoli?skie, z?o?one s? z ?ó?toszarych wapieni, wapieni marglistych i margli o ??cznej mi??szo?ci (w pe?nym profilu) 40 – 45 m. Warstwy gogoli?skie nie maj? wi?kszego znaczenia jako surowiec dla przemys?u cementowo – wapienniczego, g?ównie ze wzgl?du na zmienn? i niezbyt wysok? jako??.\r\nNa terenie kamienio?omu znajduje si? stara sztolnia z prze?omu lat 20. i 30. XX w, w której bytuj? nietoperze.\r\n",
      imageURL: "https://i.ytimg.com/vi/HVxUQCBQyCk/maxresdefault.jpg",
      Gmap: "https://goo.gl/maps/YJ8vtqgzWV4YPVqw8",
      longitude: 18.799104455363263,
      latitude: 50.29656214988968,
      freeParking: null,
      freeEntry: true,
      EasyAcces: false,
    },
  ];
};

const placesStore = createState(getPlaces());

export default placesStore;
