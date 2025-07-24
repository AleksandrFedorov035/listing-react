import getQuantityLevel from "./getQuantityLevel";

interface ListingItem {
    listing_id: number;
    url?: string;
    MainImage?: {
        url_570xN?: string;
    };
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
}

interface ListingProps {
    items: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url || '#'}>
                            <img src={item.MainImage?.url_570xN || 'https://via.placeholder.com/570x380'} alt={item.title || 'No title'} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {item.title && item.title.length > 50 ? `${item.title?.substring(0, 50)}…` : item.title || 'No title'}
                        </p>
                        <p className="item-price">
                            {item.currency_code === 'USD' ? `$${item.price}` :
                                item.currency_code === 'EUR' ? `€${item.price}` :
                                    `${item.currency_code || 'GBP'} ${item.price}`}
                        </p>
                        <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>
                            {item.quantity || 0} left
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;
