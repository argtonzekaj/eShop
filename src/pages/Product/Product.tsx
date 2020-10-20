import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import * as API from './../../api/api';


import './Product.scss'


import { SecondHeader } from '../../components/SecondHeader/SecondHeader';
import { ProductBox } from '../../components/ProductBox/ProductBox';


import foodImage from '../../assets/images/hamburger1.jpeg'
import subscribe from './../../assets/images/blake-wisz-GFrBMipOd_E-unsplash.svg'




const settingsFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}

export const Product = () => {
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
        <div className="Product">
            <SecondHeader />
            <section className="food_section">
                <div className="container">
                    <div className="food__wrapper">
                        <div className="food__wrapper__thumb">
                            <img src={foodImage} alt="foodImage" />
                        </div>
                        <div className="food__wrapper__content">
                            <h3>Cheese Burger</h3>
                            <span>$4.99</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="food__wrapper__id">Product ID:  261311</div>
                    </div>
                </div>
            </section>
            <section className="favorite_section">
                <div className="container">
                    <div className="main_title">
                        <h3>Your Favorite</h3>
                    </div>
                    {
                        state.food?.slice(0, 1)?.map((foodItem: API.Hints) => {
                            return (
                                <div className="favorite_slider" key={foodItem.food.foodId}>
                                    <Slider {...settingsFavorite}>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            )
                        }
                        )
                    }
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
