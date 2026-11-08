import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers';

type OfferListProps = {
  offers: Offer[];
  onActiveOfferChange: (id: string) => void;
};

function OfferList({ offers, onActiveOfferChange }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onActiveOfferChange(offer.id)}
        />
      ))}
    </div>
  );
}

export default OfferList;
