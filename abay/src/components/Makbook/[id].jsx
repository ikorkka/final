import s from "../PurchaseFirstPage/PurchaseFirst.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Modal } from "antd";
import { Navigation, Autoplay } from "swiper";
import PurchaseSecond from "../PurchaseSecondPage/PurchaseSecond";
import Header from "../Header/Header";
import { useState } from "react";

const Makbook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function removeType() {
    setType((current) => !current);

    setStyleClass((prev) => !prev);
  }

  return (
    <div className={s.purchaseFirst}>
      <Header />
      <div className={s.purchaseFirst__container}>
        <div className={s.purchaseFirst__body}>
          <div className={s.purchaseFirst__link}>
            <a href="#"> Главная /</a>
            <a href="#"> Смартфоны /</a>
            <a href="#"> Apple /</a>
            <span>
            "LOUIS VUITTON Official Canada Explore the World of Louis Vuitton"            </span>
          </div>
          <div className={s.purchaseFirst__title}>
            <h1>"LOUIS VUITTON Official Canada Explore the World of Louis Vuitton"</h1>
          </div>
          <div className={s.purchaseFirst__content}>
            <div className={s.purchaseFirst__swiper}>
              <div className={s.purchaseFirst__swiper_container}>
                <div className={s.purchaseFirst__swipe_title}>
                  <h1>Хит</h1>
                  <div className={s.card__icon}>
                    <Image
                      src="/Image/FirstBlock/Union.png"
                      alt="Union"
                      width={14}
                      height={17}
                    />
                    <Image
                      className={s.product__favorites}
                      src="/Image/FirstBlock/like.png"
                      alt="Union"
                      width={19}
                      height={18}
                    />
                  </div>
                </div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  autoplay={{ delay: 2500 }}
                  speed={700}
                  modules={[Navigation, Autoplay]}
                  className={s.purchaseFirstSwiper}
                >
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                      <Image
                      src="/mechta.png"
                      alt="Smartfon"
                        width={362}
                        height={362}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                      <Image
                      src="/mechta.png"
                      alt="Smartfon"
                        width={362}
                        height={362}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={s.purchaseFirst__characteristic}>
              <div className={s.purchaseFirst__characteristic_title}>
                <div className={s.purchaseFirst__title_info}>
                  <h1>116 849 ₽</h1>
                  <h2>162 990 ₽</h2>
                </div>
                <div className={s.purchaseFirst__subtitle_info}>
                  <a href="#" onClick={showModal}>
                  </a>
          
                </div>
              </div>
              <div className={s.purchaseFirst__characteristic_info}>
                <div className={s.characteristic_info_first}>
   
                </div>
                <div className={s.characteristic_info_second}>
                  <div className={s.characteristic_info_second_1}>
                    <div className={s.info_second_content}>
                      <h1>Цвет:</h1>
                      <div className={s.info_second_content_btn}>
                        <button>
                          <Image
                            src="/Image/Purchaseimg/checkmark.svg"
                            alt="Smartfon"
                            width={17}
                            height={13.5}
                          />
                        </button>
                        <button>
                          <Image
                            src="/Image/Purchaseimg/checkmark.svg"
                            alt="Smartfon"
                            width={17}
                            height={13.5}
                          />
                        </button>
                        <button>
                          <Image
                            src="/Image/Purchaseimg/checkmark.svg"
                            alt="Smartfon"
                            width={17}
                            height={13.5}
                          />
                        </button>
                      </div>
                      
                    </div>
                   
                  </div>
                  <div className={s.characteristic_info_second_2}>
                   
                    <div className={s.info_second_2_down}>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.purchaseFirst__bottom_info}>
                <button>Купить</button>
                <div>
                  <p>
                    <Image
                      src="/Image/Purchaseimg/logo1.svg"
                      alt="Smartfon"
                      width={14}
                      height={14}
                    />
                    Доставка по Москве в пределах МКАД от 700₽
                  </p>
                  <p>
                    <Image
                      src="/Image/Purchaseimg/logo2.svg"
                      alt="Smartfon"
                      width={14}
                      height={14}
                    />
                    Доставка по всей России через транспортную компанию СДЕК, по
                    100% оплате
                  </p>
                  <p>
                    <Image
                      src="/Image/Purchaseimg/logo3.svg"
                      alt="Smartfon"
                      width={14}
                      height={14}
                    />
                    Отправка происходит в течении часа после оплаты товара.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makbook;
