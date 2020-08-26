import React from 'react';
import { Item, ItemContent, ItemInfo, Text, TimeContainer, TimeInnerContainer, ProgressBar } from './styles';

const ListItem = (props) => {
    const { item, highest } = props;

    const logo = item.logo;
    const name = item.product.replace('_', ' ');
    let currency = '';
    const cost = Math.round(item.cost);
    let leadTime = item.hours;
    let days = null;
    let hours = null;
    let printDays = '';
    let printHours = '';

    const generateDaysAndHours = (leadTime) => {
        days = Math.floor((leadTime / 24));
        hours = Math.round(leadTime % 24);
        
        if ( days !== 0 && days > 1 ) {
            printDays = days + ' days';
        } else if ( days === 1 ) {
            printDays = days + ' day';
        }
        
        if ( hours !== 0 && hours > 1 ) {
            printHours = hours + ' hours';
        } else if ( hours === 1 ) {
            printHours = hours + ' hour';
        }
    }

    // Currency
    if ( item.currency.includes('sek') ) {
        currency = 'kr';
    } else {
        currency = item.currency;
    }

    generateDaysAndHours(leadTime);

    return (
        <Item className="item">
            <ItemContent>
                <img src={ logo } alt={ name } />

                <ItemInfo>
                    <Text className="title">{ name }</Text>
                    <Text className="price">{ cost } { currency }</Text>

                    <TimeContainer>
                        <TimeInnerContainer>
                            <Text>{ printDays }</Text>
                            <Text>{ printHours }</Text>
                        </TimeInnerContainer>
                        <ProgressBar max={ highest } value={ leadTime }></ProgressBar>
                    </TimeContainer>
                </ItemInfo>
            </ItemContent>
        </Item>
    );
};

export default ListItem;
