import Image from "next/image";
import Main from "@/app/blocks/main";
import Description from "@/app/blocks/description";
import Roadmap from "@/app/blocks/roadmap";
import HotelBlock from "@/app/blocks/hotel";
import OrganizatorBlock from "@/app/blocks/organiztor";
import Avia from "@/app/blocks/avia";
import PhotoGallery from "@/app/blocks/photo-gallery";
import FacebookReviews from "@/app/blocks/facebook-reviews";
import ReviewsTitle from "@/app/blocks/reviews-title";
import InstagramReviews from "@/app/blocks/instagram-reviews";
import YoutubeReviews from "@/app/blocks/youtube-reviews";
import BeWithUsBlock from "@/app/blocks/be-with-us";
import OtherEvents from "@/app/blocks/other-events";
import LeadBlock from "@/app/blocks/lead-block";

export default function Home() {

    const data = {
        tourName: 'ВОЛШЕБНАЯ КАППАДОКИЯ',
        dateStart: '2023-10-14',
        dateEnd: '2023-10-17',
        layoutSrc: '/images/layout.jpg',
        description: <div className={'flex text-black text-center flex-col gap-12'}>
            <div className={'flex flex-col p-4 gap-5'}><p className={'font-bold sm:text-2xl text-center'}>от ART PLANET
                TRAVEL</p><p
                className={'font-normal sm:text-xl'}>Нас ждёт запоминающееся путешествие в одно из красивейших мест
                планеты, в
                Каппадокию с ее сказочными пейзажами и завораживающими видами!</p>
            </div>
            <div className={'flex flex-col gap-5'}>
                <p
                    className={'font-bold sm:text-2xl text-center'}>Мы организуем этот тур, чтобы:</p><p
                className={'font-normal sm:text-xl'}>Познакомиться со сказочной
                Каппадокией и увидеть её невероятную красоту своими глазами!
                Познакомиться с местной культурой, увидеть красивейший вид на долины и пещерные города, прочувствовать
                весь колорит этого места!
                И все это — в компании единомышленников в душевной и непринужденной атмосфере!

                Каппадокия - одно из самых необычных и красивых мест в мире со сказочным лунным ландшафтом, над которым
                на рассвете взмывают десятки воздушных шаров, с потрясающими подземными городами, пещерными церквями и
                домами, высеченными прямо в скалах.</p>
            </div>
        </div>,
        natureGallery: ['/images/nature.jpg', '/images/nature.jpg', '/images/nature.jpg', '/images/nature.jpg', '/images/nature.jpg', '/images/nature.jpg', '/images/nature.jpg', '/images/nature.jpg'],
        roadmap: [
            {
                date: new Date('2023-10-14'),
                name: 'Выезд из Чиралы',
                image: '/images/roadmapitem.jpg',
                stages: [
                    {
                        time: '10:00 ',
                        stageName: 'Вызжаем из Чиралы на комфортабельном автобусе'
                    },
                    {
                        time: '11:30',
                        stageName: 'Анталья'
                    },
                    {
                        time: '18:00',
                        stageName: 'Приезд в Каппадокию, размещение в отеле'
                    },
                    {
                        time: '19:00',
                        stageName: 'Совместный ужин'
                    },

                ]
            },
            {
                date: new Date('2023-10-15'),
                name: 'Выезд из Чиралы',
                image: '/images/roadmapitem.jpg',
                stages: [
                    {
                        time: '10:00 ',
                        stageName: 'Вызжаем из Чиралы на комфортабельном автобусе'
                    },
                    {
                        time: '11:30',
                        stageName: 'Анталья'
                    },
                    {
                        time: '18:00',
                        stageName: 'Приезд в Каппадокию, размещение в отеле'
                    },
                    {
                        time: '19:00',
                        stageName: 'Совместный ужин'
                    },

                ]
            },
            {
                date: new Date('2023-10-16'),
                name: 'Выезд из Чиралы',
                image: '/images/roadmapitem.jpg',
                stages: [
                    {
                        time: '10:00 ',
                        stageName: 'Вызжаем из Чиралы на комфортабельном автобусе'
                    },
                    {
                        time: '11:30',
                        stageName: 'Анталья'
                    },
                    {
                        time: '18:00',
                        stageName: 'Приезд в Каппадокию, размещение в отеле'
                    },
                    {
                        time: '19:00',
                        stageName: 'Совместный ужин'
                    },

                ]
            }

        ],
        roadmapGallery: ['/images/rodamapGaleryItem.jpeg', '/images/rodamapGaleryItem2.jpeg', '/images/rodamapGaleryItem.jpeg', '/images/rodamapGaleryItem2.jpeg', '/images/rodamapGaleryItem.jpeg', '/images/rodamapGaleryItem2.jpeg', '/images/rodamapGaleryItem.jpeg', '/images/rodamapGaleryItem2.jpeg', '/images/rodamapGaleryItem.jpeg', '/images/rodamapGaleryItem2.jpeg'],
        hotel: {
            description: 'Будем жить в атмосферном и уютном отеле, который расположен в историческом центре Каппадокии - Гёреме. Отель окружают потрясающие каменные столбы, что впечатляет и создаёт особый колорит.\n' +
                'Здесь нас будут ждать прекрасные континентальные завтраки, настоящее турецкое гостеприимство и возможность за 5 минут дойти до самых интересных мест в городе.',
            gallery: ['/images/hotelTemp.jpeg', '/images/hotelTemp2.jpeg', '/images/hotelTemp2.jpeg', '/images/hotelTemp2.jpeg', '/images/hotelTemp2.jpeg'],
            variants: [{
                name: 'СТАНДАРТНЫЙ НОМЕР',
                galery: ['/images/hotelRoom.webp', '/images/hotelRoom.webp', '/images/hotelRoom.webp'],
                priceVariants: [
                    {price: 449, currency: '€', description: '2-местный номер стандарт'},
                    {price: 649, currency: '€', description: 'одноместный номер стандарт'}
                ],
                remains: 1,
                included: ['— трансфер на автобусе из Чиралы/Анталии до Каппадокии и обратно',
                    '— проживание 4 дня/3 ночи',
                    '— трансферы в Каппадокии завтраки',
                    '— экскурсионная программа',
                    '— комфортабельное проживание'],
                excluded: ['— полет на шаре',
                    '— обеды и ужины ', '— входные билеты в музеи'],
                billingDescriprion: 'Для бронирования необходимо внести предоплату: 10000 р.\n' +
                    'Остаток вносится в долларах по прилету в Турцию'
            },
                {
                    name: 'НОМЕР ПО-КРУЧЕ',
                    galery: ['/images/hotelRoom.webp', '/images/hotelRoom.webp', '/images/hotelRoom.webp'],
                    priceVariants: [
                        {price: 449, currency: '€', description: '2-местный номер стандарт'},
                        {price: 649, currency: '€', description: 'одноместный номер стандарт'}
                    ],
                    remains: 1,
                    included: ['— трансфер на автобусе из Чиралы/Анталии до Каппадокии и обратно',
                        '— проживание 4 дня/3 ночи',
                        '— трансферы в Каппадокии завтраки',
                        '— экскурсионная программа',
                        '— комфортабельное проживание'],
                    excluded: ['— полет на шаре',
                        '— обеды и ужины ', '— входные билеты в музеи'],
                    billingDescriprion: 'Для бронирования необходимо внести предоплату: 10000 р.\n' +
                        'Остаток вносится в долларах по прилету в Турцию'
                }

            ]
        },

        organizator: {
            name: 'Андрей Фазлеев',
            post: 'Организатор, путешественник, музыкант и Dj ecstatic dance',
            avatar: '/images/avatarTemp.JPG',
            description: <p>Основатель проекта Art Planet, бэкграунд которого более 100 событий: фестивалей, ретритов,
                экспедиций и осознанных вечеринок. Программный директор Международного дня йоги в Москве (Красная Пресня
                и Царицыно) 2017-2018 гг.<br/><br/>

                Практик медитации и проводник осознанного образа жизни. Исполняет исцеляющую музыку. Проводит
                персональные сессии в вопросах реализации и отношений, направленные на гармонизацию и трансформацию
                жизни человека.<br/><br/>
                Более 11 лет в практиках.

                Лидер и создатель музыкального коллектива ATMANLOVE<br/><br/>
                Dj Ecstatic Dance.
                Музыкант-мультиинструменталист: ситар, гитара, перкуссия, вокалист, исполняет и записывает электронную
                музыку в формате etno-fusion (сочетание электронного звучания и живых инструментов).</p>,
            tours: [
                {
                    name: 'Индийские Гималаи, восхождение на Тапован 4500 м (Ришикеш-Ганготри-Тапован)',
                    year: 2017,
                },
                {
                    name: 'Автопутешествие по Грузии (Москва-Сванетия 5000км)',
                    year: 2018,
                },
                {
                    name: 'Тур в Индию (Арамболь-Гокарна)',
                    year: 2018,
                }
            ],
        },
        airTravel: [{
            name: 'Если вы летите только в Каппадокию',
            description: 'Мы выезжаем утром 14 октября из деревни Чиралы. Аэропорт Антальи будем проезжать в районе 10:30—11:00 утра.\n' +
                'Вы можете присоединиться к нам в аэропорте или прилететь на день раньше 13 октября, чтобы отдохнуть после перелёта и иметь дополнительный запас по времени.\n' +
                'На обратном пути мы будем проезжать мимо аэропорта Антальи в районе 19:00—20:00 часов. Также Вы можете переночевать в Антальи и улететь 18 октября'
        }],
        photoGallery: ['/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg', '/images/photoGallery.jpeg'],
        reviews: {
            facebook: [{
                name: 'Наталия Котлярова',
                event: <p>Art Planet на Байкал (август 2019)</p>,
                profileNickname: 'natalia.kotlyarova',
                profileLink: 'https://www.facebook.com/natalia.kotlyarova',
                avatar: '/images/reviewTemp.png',
                text: <p>Они в потоке. Они открывают новые миры для творчества и самопознания. Они помогают
                    соединить сердце, душу и тело и встретиться с новыми интересными гранями себя. Они - это
                    организаторы Art Planet.
                    Дорогие, Andrew Fazleev и команда, спасибо за то, что «проводите», создаёте потоковость...
                    просто являясь самими собой! Вы прекрасны! Обожаю вас! Спасибо, что вы есть!! Благодарю за
                    вчерашний тёплый, семейный и глубокий вечер! 🙌❤️🌸🦄
                    Анюта и Лена, отдельное спасибо за рождение Эльфийской принцессы 😉 💎🧚♀️🦄
                    Уже жду новой встречи 😉
                    #artfridayparty</p>
            },
                {
                    name: 'Наталия Котлярова',
                    event: <p>Art Planet на Байкал (август 2019)</p>,
                    profileNickname: 'natalia.kotlyarova',
                    profileLink: 'https://www.facebook.com/natalia.kotlyarova',
                    avatar: '/images/reviewTemp.png',
                    text: <p>Они в потоке. Они открывают новые миры для творчества и самопознания. Они помогают
                        соединить сердце, душу и тело и встретиться с новыми интересными гранями себя. Они - это
                        организаторы Art Planet.
                        Дорогие, Andrew Fazleev и команда, спасибо за то, что «проводите», создаёте потоковость...
                        просто являясь самими собой! Вы прекрасны! Обожаю вас! Спасибо, что вы есть!! Благодарю за
                        вчерашний тёплый, семейный и глубокий вечер! 🙌❤️🌸🦄
                        Анюта и Лена, отдельное спасибо за рождение Эльфийской принцессы 😉 💎🧚♀️🦄
                        Уже жду новой встречи 😉
                        #artfridayparty</p>
                },
                {
                    name: 'Наталия Котлярова',
                    event: <p>Art Planet на Байкал (август 2019)</p>,
                    profileNickname: 'natalia.kotlyarova',
                    profileLink: 'https://www.facebook.com/natalia.kotlyarova',
                    avatar: '/images/reviewTemp.png',
                    text: <p>Они в потоке. Они открывают новые миры для творчества и самопознания. Они помогают
                        соединить сердце, душу и тело и встретиться с новыми интересными гранями себя. Они - это
                        организаторы Art Planet.
                        Дорогие, Andrew Fazleev и команда, спасибо за то, что «проводите», создаёте потоковость...
                        просто являясь самими собой! Вы прекрасны! Обожаю вас! Спасибо, что вы есть!! Благодарю за
                        вчерашний тёплый, семейный и глубокий вечер! 🙌❤️🌸🦄
                        Анюта и Лена, отдельное спасибо за рождение Эльфийской принцессы 😉 💎🧚♀️🦄
                        Уже жду новой встречи 😉
                        #artfridayparty</p>
                }],
            instagram: [{
                name: 'Наталия Котлярова',
                event: <p>Art Planet на Байкал (август 2019)</p>,
                profileNickname: 'natalia.kotlyarova',
                profileLink: 'https://www.facebook.com/natalia.kotlyarova',
                avatar: '/images/reviewTemp.png',
                text: <p>Они в потоке. Они открывают новые миры для творчества и самопознания. Они помогают
                    соединить сердце, душу и тело и встретиться с новыми интересными гранями себя. Они - это
                    организаторы Art Planet.
                    Дорогие, Andrew Fazleev и команда, спасибо за то, что «проводите», создаёте потоковость...
                    просто являясь самими собой! Вы прекрасны! Обожаю вас! Спасибо, что вы есть!! Благодарю за
                    вчерашний тёплый, семейный и глубокий вечер! 🙌❤️🌸🦄
                    Анюта и Лена, отдельное спасибо за рождение Эльфийской принцессы 😉 💎🧚♀️🦄
                    Уже жду новой встречи 😉
                    #artfridayparty</p>,
                gallery: ['/images/reviewTemp.png','/images/reviewTemp.png','/images/reviewTemp.png']
            },
                {
                    name: 'Наталия Котлярова',
                    event: <p>Art Planet на Байкал (август 2019)</p>,
                    profileNickname: 'natalia.kotlyarova',
                    profileLink: 'https://www.facebook.com/natalia.kotlyarova',
                    avatar: '/images/reviewTemp.png',
                    text: <p>Они в потоке. Они открывают новые миры для творчества и самопознания. Они помогают
                        соединить сердце, душу и тело и встретиться с новыми интересными гранями себя. Они - это
                        организаторы Art Planet.
                        Дорогие, Andrew Fazleev и команда, спасибо за то, что «проводите», создаёте потоковость...
                        просто являясь самими собой! Вы прекрасны! Обожаю вас! Спасибо, что вы есть!! Благодарю за
                        вчерашний тёплый, семейный и глубокий вечер! 🙌❤️🌸🦄
                        Анюта и Лена, отдельное спасибо за рождение Эльфийской принцессы 😉 💎🧚♀️🦄
                        Уже жду новой встречи 😉
                        #artfridayparty</p>,
                    gallery: ['/images/reviewTemp.png','/images/reviewTemp.png','/images/reviewTemp.png']
                },
                {
                    name: 'Наталия Котлярова',
                    event: <p>Art Planet на Байкал (август 2019)</p>,
                    profileNickname: 'natalia.kotlyarova',
                    profileLink: 'https://www.facebook.com/natalia.kotlyarova',
                    avatar: '/images/reviewTemp.png',
                    text: <p>Они в потоке. Они открывают новые миры для творчества и самопознания. Они помогают
                        соединить сердце, душу и тело и встретиться с новыми интересными гранями себя. Они - это
                        организаторы Art Planet.
                        Дорогие, Andrew Fazleev и команда, спасибо за то, что «проводите», создаёте потоковость...
                        просто являясь самими собой! Вы прекрасны! Обожаю вас! Спасибо, что вы есть!! Благодарю за
                        вчерашний тёплый, семейный и глубокий вечер! 🙌❤️🌸🦄
                        Анюта и Лена, отдельное спасибо за рождение Эльфийской принцессы 😉 💎🧚♀️🦄
                        Уже жду новой встречи 😉
                        #artfridayparty</p>,
                    gallery: ['/images/reviewTemp.png','/images/reviewTemp.png','/images/reviewTemp.png']
                }],
            youtube: ['https://www.youtube.com/embed/HWzU1YwFKZM?si=LYD1hKUqXNS5krcT','https://www.youtube.com/embed/HWzU1YwFKZM?si=LYD1hKUqXNS5krcT','https://www.youtube.com/embed/HWzU1YwFKZM?si=LYD1hKUqXNS5krcT']
        },events:[
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'},
            {name:'ART PLANET WEEKEND В ТИШИНЕ 30 ОКТЯБРЯ -1 НОЯБРЯ',avatar:'/images/otherImage.png'}

        ]

    }

    return (
        <div className={'overflow-hidden'}>
            <Main name={data.tourName} image={data.layoutSrc} dateStart={new Date(data.dateStart)}
                  dateEnd={new Date(data.dateEnd)}/>
            <Description name={data.tourName} gallery={data.natureGallery} description={data.description}/>
            <Roadmap roadMap={data.roadmap} roadmapGalley={data.roadmapGallery} tourName={data.tourName}/>
            <HotelBlock {...data.hotel}/>
            <OrganizatorBlock {...data.organizator}/>
            <Avia airTravels={data.airTravel}/>
            <PhotoGallery photos={data.photoGallery}/>
            <ReviewsTitle/>
            <FacebookReviews reviews={data.reviews.facebook}/>
            <InstagramReviews reviews={data.reviews.instagram}/>
            <YoutubeReviews videos={data.reviews.youtube}/>
            <BeWithUsBlock/>
            <OtherEvents events={data.events}/>
            <LeadBlock/>
        </div>
    );
}
