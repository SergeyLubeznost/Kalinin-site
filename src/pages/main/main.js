import {useState} from "react";
import "./main.css"
import './main-laptop.css'
import "./main-slider.css"
import "./main-tablet.css"
import "./sliderStyle/slider-tablet.css"
import "./sliderStyle/slider-mobile.css"
import "./sliderStyle/slider-laptop.css"
import "./main-mobile.css"
import "./bestseller-section.css"
import "./bestseller-tablet.css"
import "./bestseller-mobile.css"
import "./bestseller-laptop.css"
import "./main-form.css"
import "./main-form-tablet.css"
import "./main-form-mobile.css"
import "./main-form-laptop.css"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination,FreeMode } from 'swiper/modules';

import logoMain from "./image-main/Group 61.svg"
import galochka from './image-main/galochka.svg'
import shesternya from './image-main/shesterenka.svg'
import korona from './image-main/korona.svg'
// import from slider img
import semiElipse from './image-main/Ellipseslide1.png';
import elipse from './image-main/EllipseFullslide1.png';
import zerkalo from './image-main/slider-img/для баннера 1.png';
import strelka from './image-main/slider-img/right.svg';
import sizeBanner from './image-main/slider-img/Group 58.png';
import bigElipse from "./image-main/bestseller-img/Ellipse 21.svg";
import smallElipse from "./image-main/bestseller-img/Ellipse 20.svg";
import telega from "./image-main/telega.svg"
import data from "./data.js"

import FormDialogModal from "../../components/main-dialog/main-modal.js"

function Main() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const CustomNextButton = ({ onClick }) => {
        return (
          <button className="custom-next-button" onClick={onClick}>
            <img src={strelka} alt="Next" />
          </button>
        );
      };
      
      const CustomPrevButton = ({ onClick }) => {
        
        return (
          <button className="custom-prev-button" onClick={onClick}>
            <img src={strelka} alt="Previous" />
          </button>
        );
      };

    return (
        <main>
            <section className="section-main">
                <div className="main-container">
                    <div className="logo-main">
                        <img src={logoMain} alt="" />
                    </div>
                    <h1 className="main-title">ГРИМЁРНЫЕ СТОЛЫ <br />И ЗЕРКАЛА ДЛЯ ВАС</h1>
                    <div className="main-btn-group">
                        <button className="main-btn-catalog">Каталог</button>
                        <FormDialogModal className={"main-btn-contact"}/>
                    </div>
                </div>
            </section>
            <section className="guarantees">
                <div className="guarantees-container">
                    <div className="guarantees-item">
                        <img  className="position-guarantees-img" src={galochka} alt="" />
                        <div className="position-guarantees">
                            <h3>Гарантия</h3>
                            <p>Несколько слов об условиях гарантии</p>
                        </div>

                    </div>
                    <div className="guarantees-item">
                        <img className="position-guarantees-mid-img" src={shesternya} alt="" />
                        <div className="position-guarantees-mid-div">
                            <h3>Бесплатная установка</h3>
                            <p>Несколько слов об условиях гарантии</p>
                        </div>

                    </div>
                    <div className="guarantees-item">
                        <img className="position-guarantees-last-img" src={korona} alt="" />
                        <div className="position-guarantees-last-div">
                            <h3>Лучшие материалы</h3>
                            <p>Несколько слов о материалах</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="slider-section">
    
            <Swiper
        cssMode={true}
        onSwiper={setSwiperInstance}
        navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination,]}
        className="mySwiper"
        slidesPerView={1} // Измените параметр для адаптивности
        spaceBetween={30} // Отступы между слайдами
        breakpoints={{
          640: {
            slidesPerView: 1, // Для ширины более 640 пикселей
          },
          1024: {
            slidesPerView: 1, // Для ширины более 1024 пикселей
          },
        }}
      >

        <SwiperSlide><div className="slide1">
            <div className="banner-container">
                <div className="elipse-container">
                <img className="semiElipse" src={semiElipse} alt="" /><img className="elipse" src={elipse} alt="" />
                </div>
                <div className="other-container">
                    <h3>
                    Получи в подарок <br /> зеркало в полный рост!
                    </h3>
                    <p>При заказе от 100 000 рублей</p>
                    <button>
                        К покупкам
                    </button>
                </div>
               
            </div>
            <div className="zerkalo-container">
                <img className="size-banner" src={sizeBanner} alt="" /><img className="zercalo" src={zerkalo} alt="" />
            </div>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="slide1 slide2">
        <div className="banner-container">
            
                <div className="other-container other__con-slide2">
                    <h3>
                    Подарок для вас!
                    </h3>
                    <p>При покупке от 50 рублей - банкетка в подарок!</p>
                    <p className="other__con-slide2-paragpaph">Не упустите возможность!</p>
                    <button>
                        К покупкам
                    </button>
                </div>
               
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide1 slide3">
        <div className="banner-container">
            
                <div className="other-container other__con-slide3">
                    <h3>
                    Специальное предложение!
                    </h3>
                    <p>При покупке на сумму от 10 000 ₽ вы получаете съемные разделители в ящике в подарок!</p>
                    <button>
                        К покупкам
                    </button>
                </div>
               
            </div>
            </div>
            </SwiperSlide>
      
      

            <CustomPrevButton onClick={() => swiperInstance && swiperInstance.slidePrev()} />
            <CustomNextButton onClick={() => swiperInstance && swiperInstance.slideNext()} />
      </Swiper>
      
            </section>

            <section className="section-bestseller">
            <h2>Бестселлеры</h2>
            <div className="bestseller-container">
           
            <img className="bigElipse" src={smallElipse} alt="" />
            <div className="poducts-bestseller">
            <Swiper
       slidesPerView={2}
       spaceBetween={30}
       freeMode={true}
       breakpoints={{
        968: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }}
       modules={[FreeMode]}
        className="mySwiper2"
      >
  {data.map((item, index) => (
        <SwiperSlide className="slide-bestseller" key={index}>
          <div className="card-bestseller">
            <img src={item.img} alt={item.title} />

            <div className="mobile__category">
            <div className="category__title">
            <p>{item.category}</p>
            </div>

            <p className="likes__mobile"> <Checkbox className="image-like" icon={<FavoriteBorder sx={{ color: '#EA899A' }} />} checkedIcon={<Favorite sx={{ color: '#EA899A' }} />} /> {item.likes}</p>
            </div>
            <div className="title__like-container">
            <h3>{item.title}</h3> <p> <Checkbox className="image-like" icon={<FavoriteBorder sx={{ color: '#EA899A' }}/>} checkedIcon={<Favorite  sx={{ color: '#EA899A' }}/>} /> {item.likes}</p>
            </div>
            <p className="matherial__title">Материал: {item.material}</p>
           <div className="block__price">
           <p>{item.price} р.</p>
           <Button className="price__button" variant="contained" >Подробнее</Button>
           </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="dop__block"></SwiperSlide>
      </Swiper>
            </div>
            <img className="smallElipse" src={bigElipse} alt="" />
            </div>

            </section>

            <section className="main__form-section">
                <div className="main__form-text">
                    <h2>Оставьте контакты, и мы с вами свяжемся</h2>
                    <p>Пожалуйста, введите ваши данные в поля для заполнения</p>
                </div>
                <div className="main__form-formBlock">
                <h2 className="min__form-dopTitle">Оставьте контакты, и мы <br/> с вами свяжемся</h2>
                    <img src={telega} alt="sand" />
                    <div className="main__form-inputGroup">
                        <TextField className="main__form-input" 
                        id="outlined-basic"
                            label="Имя"
                            variant="outlined"
                            color='#EA899A'
                             />
                            
                        <TextField
                            id="outlined-basic"
                            label="Телефон"
                            type="number"
                            className="main__form-input"
                            color='#EA899A'
                        />
                    </div>
                    <div className="main__form-buttonGroup">
                        <div className="main__form-chekboks">
                            <FormControlLabel control={<Checkbox defaultChecked
                             sx={{
                                '&.Mui-checked': {
                                    color: '#EA899A',
                                },
                              
                            }} 
                            />} label={
                                <div className="label-chekbox">Я согласен на обработку <span style={{ fontWeight: 'bold', color: '#EA899A' }}>персональных данных</span></div>
                            }
                            />
                        </div>
                        <Button className="main_form-button" variant="contained">Отправить</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main