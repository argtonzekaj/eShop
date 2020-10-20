import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import * as API from './../../api/api';

import './Catalog.scss'

import { SecondHeader } from '../../components/SecondHeader/SecondHeader';
import { ProductBox } from '../../components/ProductBox/ProductBox';


import subscribe from './../../assets/images/blake-wisz-GFrBMipOd_E-unsplash.svg'

export interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}


export const Catalog = () => {
    const [state, setState] = useState<StateProps>({
        loading: true,
        food: [],
        error: undefined
    })

    useEffect(() => {
        loadFood();
    })

    const loadFood = async () => {
        try {
            const res = await API.getFood(

            )
            setState({
                ...state,
                loading: false,
                food: res.data?.hints
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        }
    }
    return (
        <div className="Catalog">
            <SecondHeader />
            <section className="catalog">
                <div className="container">
                    <div className="catalog__title">
                        <h3>Catalog</h3>
                    </div>
                    <div className="row has_gutter">
                        {
                            state.food?.slice(0, 16).map((foodItem: API.Hints) => {
                                return (
                                    <div className="column-3" key={foodItem.food.foodId}>
                                       <Link to="/Product"> <ProductBox
                                            id={foodItem.food.foodId}
                                            title={foodItem.food.label}
                                            price={foodItem.food.category}
                                            image={foodItem.food.image}
                                        />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="subscribe_section">
                <div className="container">
                    <div className="subscribe__text">
                        <h2>Subscribe to our newsletter and receive exclusive offers every week</h2>
                        <form>
                        <input type="email" className="subscribe_input" name="name" placeholder="Enter your email" />
                        <button type="submit" className="subscribe_button">SUBSCRIBE</button>
                        </form>
                    </div>
                    <img src={subscribe} alt="img" />
                </div>
            </section>    
        </div>
    )
}
