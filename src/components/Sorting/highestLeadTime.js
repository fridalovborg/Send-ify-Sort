export const highestLeadTime = (items) => {
    
    const highest = items.reduce((lastValue, item) => {
        console.log('funkar2')
        const { hours } = item;
        if (hours > lastValue) {
            console.log('funkar 3')
            return hours;
        }
        return lastValue;
    }, 0);

    return highest;
}