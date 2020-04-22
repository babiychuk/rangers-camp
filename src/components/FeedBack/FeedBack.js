import React from "react";
import Container from 'react-bootstrap/Container';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


import Header from "../Header/Header";
import CampList from "../Blocks/CampList/CampList";
import CampTermsBlock from "../Blocks/CampTermsBlock/CampTermsBlock";
import ChangeBlock from "../Blocks/ChangeBlock/ChangeBlock";
import DayTime from "../Blocks/DayTime/DayTime";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import Footer from "../Footer/Footer";

import './FeedBack.css';
class FeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [
                {
                    name: "Елена Соловьёва",
                    text: `Среди ночи наконец удалось вырвать Человека домой из лагеря… концерты, дискотеки, вечерние угощения, квесты, церемония награждения... но я не об этом.
                Rangers camp СПАСИБО вам огромнейшее и от всего сердца за второе крутейшее лето Сани! Когда ребёнок просит, можно ли приехать ещё на одну смену в тот же день, когда забираешь его домой для поездки на море, это говорит о многом! А когда восторг от второй смены чуть ли не превосходит эмоции после первой - ну это совсем кайф!
                Обалденные развлечения! Такие красивые, милые, добрые, заботливые вожатые-друзья!
                Я в восторге! Хочу к вам
                Спасибо ещё раз и до встречи!`
                },
                {
                    name: "Людмила Андреева",
                    text: `Дочь (8 лет) была в лагере на смене "КулинаРиЯ". Сказать, то ребенок в восторге - ничего не сказать. До этого в июле была в другом лагере, сказала, что это небо и земля и теперь только в Rangers, а лучше на 2 смены сразу. Весело, интересно, современно! Восторг от Хот дог вечеринки, от ночной игры, а мастер классы вообще выше всех похвал. 
                    Дочь не успела вернуться домой, уже готовила кейк попсы и планирует равиоли) 
                    Еда в лагерях у нас больная тема, но тут дочь сказала, что кормили очень вкусно, и она ела те блюда, которые даже пробовать раньше не хотела! 
                    Спасибо за такой труд и любовь к детям, ждите в следующем году!`
                },
                {
                    name: "Мария Рябцева",
                    text: `Большое спасибо всем людям, которые работали с детьми. 
                    Спасибо за новые впечатления, навыки.
                    Спасибо за то, что было весело и интересно. И отдельное спасибо за дружескую атмосферу в лагере.`
                },
                {
                    name: "Тетяна Кузьмук",
                    text: `Хочу написати враження від вашого табору, синуля був у вас в липні на Детективних історіях разом з своїми друзями. Це був їх перший досвід таборного життя. І вони в захваті!
                    Їм сподобалось буквально все! І ми, батьки, дуже раді, що знайшли вас. 
                   Наступного року обов'язково будемо відпочивати у вас знову, дякуємо, так тримати!`
                },
                {
                    name: "Марта Маламуд",
                    text: `После окончания смены, дети уже просятся на следующую! 
                    Ребята, вы - лучшие!! спасибо вам за счастливых детей и отдохнувших родителей:)))`
                },
                {
                    name: "Марина Виноградова",
                    text: `Отличное место, ребёнок доволен, мама тоже! 
                    Досуг, питание, организация, охрана - все 👌. До встречи в следующем году!`
                },
            ]
        };
    }
    render() {
        const settingSlide = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
            ],
        };
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">Відгуки про Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Slider {...settingSlide} className="m20">
                            {this.state.feedback.map((feedback, num) => (
                                <div className="t-center" key={num}>
                                    <p class="team-name">{feedback.name}</p>
                                    <p class="team-pos">{feedback.text}</p>
                                </div>
                            ))}
                        </Slider>
                    </Container>
                    <CampList />
                    <CampTermsBlock />
                    <DayTime />
                    <TeamBlock />
                    <ChangeBlock />
                    <CampLocation />
                </div >
                <Footer />
            </div >
        );
    }
}

export default FeedBack;
