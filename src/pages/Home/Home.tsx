import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import * as API from './../../api/api';


//Components
import { ProductBox } from '../../components/ProductBox/ProductBox';
import { Header } from '../../components/Header/Header'


//photos        
import banner1 from './../../assets/images/HomeBanner1.jpg'
import collectionphoto1 from './../../assets/images/collectionphoto1.jpg'
import collectionphoto2 from './../../assets/images/collectionphoto2.jpg'
import subscribe from './../../assets/images/blake-wisz-GFrBMipOd_E-unsplash.svg'

//styles
import './Home.scss'

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}; 
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

export const Home = () => {
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
        <div className="Home">
            <Header/>
            <section className="banner_section">
                <Slider {...settings}>
                    <div className="sliderItem">
                        <img src={banner1} className="banner1" alt="img"/>
                        <div className="container">
                            <div className="banner__content">
                                <h2>Time to order...</h2>
                            </div>
                        </div>
                    </div>
                    <div className="sliderItem">
                        <img src={banner1} className="banner1" alt="img"/>
                        <div className="container">
                                <div className="banner__content">
                                    <h2>Check our catalog for more choice of foods</h2>
                                </div>
                            </div>
                    </div>
                </Slider> 
            </section>
            <section className="collection_section">
                <div className="container">
                    <div className="collection__wrapper">
                        <div className="column-6">
                            <div className="collection__thumb">
                                <img src={collectionphoto1} alt="img"/>
                            </div>
                            <div className="collection__content">
                                <p>New arrivals are now in!</p>
                                <Link to="/men"><span>Show recipes</span></Link>
                            </div>
                        </div>
                        <div className="column-6">
                            <div className="collection__thumb">
                                <img src={collectionphoto2} alt="img"/>
                            </div>
                            <div className="collection__content">
                                <p>New arrivals are now in!</p>
                                <Link to="/men"><span>Show recipes</span></Link>
                            </div>
                        </div>
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
