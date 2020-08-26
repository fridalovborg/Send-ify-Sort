// Product logos
import dhl from '../images/dhl.svg';
import dsv from '../images/dsv.svg';
import fedex from '../images/fedex.svg';
import tnt from '../images/tnt.svg';
import ups from '../images/ups.svg';

export const setLeadTimeAndProductLogo = (items, currentWeather) => {
    const sunny = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds'];
    const raining =  ['shower rain', 'rain', 'thunderstorm'];
    const subtract = '-';
    const add = '+';

    // Change lead time in days to hours
    const setItems = items.map((item) => {
        item.hours = item.lead_time * 24;

        // Remove or add lead time depending on weather in Gothenburg
        const calculateLeadTime = (sunnyOperator, sunnyNumber, rainingOperator, rainingNumber) => {
            if ( sunny.includes(currentWeather) ) {
                if ( sunnyOperator === add ) {
                    item.hours = item.hours + (item.hours * sunnyNumber);
                } else {
                    item.hours = item.hours - (item.hours * sunnyNumber);
                }
            } else if ( raining.includes(currentWeather) ) {
                if ( rainingOperator === add ) {
                    item.hours = item.hours + (item.hours * rainingNumber);
                } else {
                    item.hours = item.hours - (item.hours * rainingNumber);
                }
            }
        }

        // Add logo and lead time value and operator
        if ( item.product.includes('dhl') ) {
            item.logo = dhl;
            calculateLeadTime(subtract, 0.05, add, 0.05); // subtract 5% and add 5%
        } else if ( item.product.includes('dsv') ) {
            item.logo = dsv;
            calculateLeadTime(subtract, 0.5, add, 0.1); // subtract 50% and add 10%
        } else if ( item.product.includes('fedex') ) {
            item.logo = fedex;
            calculateLeadTime(subtract, 0.05, add, 0.05); // subtract 5% and add 5%
        } else if ( item.product.includes('tnt') ) {
            item.logo = tnt;
            calculateLeadTime(subtract, 0.05, subtract, 0.3); // subtract 5% and subtract 30%
        } else if ( item.product.includes('ups') ) {
            item.logo = ups;
            calculateLeadTime(subtract, 0.05, add, 0.25); // subtract 5% and add 25%
        }

        return item;
    });

    return setItems;
}