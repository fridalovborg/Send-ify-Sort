import React, { Component } from 'react';
import products from '../products/products';
import ListItem from '../ListItem';
import Header from '../Header';
import Button from '../Button';
import Loader from '../Loader';
import Error from '../Error';
import { Main } from '../Main/styles';
import { Container } from '../Container/styles';
import { highestLeadTime } from './highestLeadTime';
import { setLeadTimeAndProductLogo } from './setLeadTimeAndProductLogo';

class Sorting extends Component {
    constructor(props) {
        super(props);

        const { items } = products;

        this.state = {
            items,
            activeCost: false, 
            activeTime: false,
            loader: false,
            error: false,
            highest: null,
        };
    }

    componentDidMount() {
        // OpenWeatherMap API - Shows the weather in Gothenburg
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Gothenburg,se&APPID=7ebaae6c5ca8182948063bc055eb4563')
        .then(res => res.json())
        .then(
            (result) => {        
                const currentWeather = result.weather[0].description;
                this.changeLeadTimeAndAddLogo(currentWeather);

                this.setState({
                    loader: true,
                });
            },
            () => {
                this.changeLeadTimeAndAddLogo('');

                this.setState({
                    loader: true,
                    error: true,
                });
            }
        );
    }

    changeLeadTimeAndAddLogo = (currentWeather) => {
        const { items } = this.state;
        
        const setItems = setLeadTimeAndProductLogo(items, currentWeather);
        const highest = highestLeadTime(items);

        this.setState({
            items: setItems,
            highest: highest,
        });
    }

    sortByPriceAndTime = (items, value) => {
        const newOrder = [...items].sort(( a, b ) => a[value] - b[value] );

        if (value === 'cost') {
            this.setState({
                items: newOrder,
                activeCost: true,
                activeTime: false,
            });
        } else {
            this.setState({
                items: newOrder,
                activeCost: false,
                activeTime: true,
            });
        }
    }

    render() {
        const { items, activeCost, activeTime, loader, highest, error } = this.state;

        return(
            <Main>
                <Header />
                    
                <Button onClick={ () => this.sortByPriceAndTime(items, 'cost') } items={ items } text="Cheapest" cost={ true } active={ activeCost } />
                <Button onClick={ () => this.sortByPriceAndTime(items, 'hours') } items={ items } text="Fastest" cost={ false } active={ activeTime } />

                <Error error={ error } />

                <Container>
                    {items.map((item, id) => {
                        return <ListItem key={ id } item={ item } highest={ highest } />; 
                    })}
                </Container>

                <Loader loader={ loader } />
            </Main>
        );
    };
};

export default Sorting;
