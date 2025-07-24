const getQuantityLevel = (quantity: number | undefined): string => {
    if (quantity === undefined || quantity < 10) return 'low';
    if (quantity < 20) return 'medium';
    return 'high';
};

export default getQuantityLevel
