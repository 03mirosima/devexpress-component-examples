const products = [
  {
    id: 1,
    text: 'Aksesuar',
    expanded: false,
    items: [],
  },
  {
    id: 2,
    text: 'Direksiyon',
    expanded: false,
    items: [],
  },
  {
    id: 3,
    text: 'Filtre',
    items: [
      {
        id: 4,
        text: 'Filtre 1',
        items: [],
      },
    ],
  },
  {
    id: 5,
    text: 'iç Donanım',
    items: [
      {
        id: 6,
        text: 'Kol Dayama',
        items: [
          {
            id: 7,
            text: 'Kol Dayama a',
          },
          {
            id: 8,
            text: 'Kol Dayama b',
          },
          {
            id: 9,
            text: 'Kol Dayama c',
          },
        ],
      },
      {
        id: 10,
        text: 'Kol Dayama 2',
        items: [
          {
            id: 11,
            text: 'Kol Dayama d',
          },
          {
            id: 12,
            text: 'Kol Dayama e',
          },
          {
            id: 13,
            text: 'Kol Dayama f',
          },
        ],
      },
    ],
  },
  {
    id: 14,
    text: 'Karoseri',
    items: [
      {
        id: 15,
        text: 'Karoseri 1',
      },
      {
        id: 16,
        text: 'Karoseri 2',
      },
    ],
  },
  {
    id: 17,
    text: 'Motor',
    items: [
      {
        id: 18,
        text: 'Motor 1',
        items: [
          {
            id: 19,
            text: 'Motor a',
          },
          {
            id: 20,
            text: 'Motor b',
          },
        ],
      },
    ],
  },
  {
    id: 21,
    text: 'Isıtma',
    items: [
      {
        id: 22,
        text: 'Havalandırma',
      },
    ],
  },
  {
    id: 23,
    text: 'Triger',
  },
  {
    id: 24,
    text: 'Motosiklet',
  },
];

export default {
  getProducts() {
    return products;
  }
};
