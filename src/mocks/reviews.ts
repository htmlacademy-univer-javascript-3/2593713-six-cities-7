export type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};

export const reviews: Review[] = [
  {
    id: '1',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
  },
  {
    id: '2',
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: '2019-05-10',
    rating: 5,
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
  },
  {
    id: '3',
    comment: 'Great location and very clean apartment. Would definitely stay again on our next trip!',
    date: '2019-06-02',
    rating: 3,
    user: {
      name: 'John',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
  },
];
