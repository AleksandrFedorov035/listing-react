interface ItemsProp {
    listing_id: number;
    url: string;
    MainImage: {
        url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

interface Items {
    items: ItemsProp[]
}

export default function Listing({ items }: Items) {
    return (
        <div className="item-list">
            {items.map(item => (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt={item.title} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}
                        </p>
                        <p className="item-price">
                            {item.currency_code === 'USD' ? `$${item.price}` :
                                item.currency_code === 'EUR' ? `€${item.price}` :
                                    `${item.price} ${item.currency_code}`}
                        </p>
                        <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>
                            {item.quantity} left
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
const getQuantityLevel = (quantity: number): string => {
    if (quantity < 10) return 'low';
    if (quantity < 20) return 'medium';
    return 'high';
};
