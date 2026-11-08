export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: string;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: 'Amsterdam',
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 4,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: 'Amsterdam',
    previewImage: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: 'Cologne',
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 4,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: 'Cologne',
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 5,
  },
];
