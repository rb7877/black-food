import { Box } from "@mui/material";
import React, { useEffect } from "react"
import styled from "styled-components";
import HomeCarousel from "components/utils/HomeCarousel";
import PopularCarousel from "components/utils/PopularCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertise = () => {

  const mostFoodData = [
    {
      img: '/uploads/foods/images/bargecu.svg',
      name: 'Sultan Kacchi Biryani',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/caprina.svg',
      name: 'Pizza Caprina',
      description: 'Pizas, Italian-American, Desserts',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/waffle.png',
      name: 'The Waffle Jar',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/waffle.png',
      name: 'The Waffle Jar',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/bargecu.svg',
      name: 'Sultan Kacchi Biryani',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/caprina.svg',
      name: 'Pizza Caprina',
      description: 'Pizas, Italian-American, Desserts',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/waffle.png',
      name: 'The Waffle Jar',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/waffle.png',
      name: 'The Waffle Jar',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
  ]
  const TopRatesData = [
    {
      img: '/uploads/foods/images/bargecu.svg',
      name: 'Sultan Kacchi Biryani',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/caprina.svg',
      name: 'Pizza Caprina',
      description: 'Pizas, Italian-American, Desserts',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/waffle.png',
      name: 'The Waffle Jar',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
    {
      img: '/uploads/foods/images/waffle.png',
      name: 'The Waffle Jar',
      description: 'Desserts, Beverages',
      rating: '4.5',
      estimate: '20 Mins',
      cost: '$200/person',
      discount: '70% off | Use WELCOME50'
    },
  ]
  const PopularData = [
    {
      img: '/uploads/foods/images/icecreams.png',
      name: 'Icecreams',
      link: 'Desserts, Beverages',
    },
    {
      img: '/uploads/foods/images/Biryani.png',
      name: 'Biryani',
      link: 'Desserts, Beverages',
    },
    {
      img: '/uploads/foods/images/hamburger.png',
      name: 'Icecreams',
      link: 'Desserts, Beverages',
    },
    {
      img: '/uploads/foods/images/Waffles.png',
      name: 'Waffles',
      link: 'Desserts, Beverages',
    },
    {
      img: '/uploads/foods/images/Groceries.png',
      name: 'Groceries',
      link: 'Desserts, Beverages',
    },
    {
      img: '/uploads/foods/images/Indian Meal.png',
      name: 'Indian Meal',
      link: 'Desserts, Beverages',
    },
  ]
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <MainContainer>
      <AdvertiseContainer>
        <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <HomeCarousel data={mostFoodData} title={`Most popular food people ordered`} subtitle={`Lorem ipsum`} />
        </Box>
        <Box mt={`100px`} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="300">
          <HomeCarousel data={TopRatesData} title={`Top Rates Nearby`} subtitle={`Lorem ipsum`} />
        </Box>
        <Box mt={`100px`} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="500">
          <PopularCarousel data={PopularData} title={`Popular Cuisines`} subtitle={`Browse popular take out cuisines from restaurants in your area and order delivery online.`} />
        </Box>
      </AdvertiseContainer>
    </MainContainer>
  )
}

const MainContainer = styled(Box)`
  width : 100% ;
  background : #F8FAFB;
`

const AdvertiseContainer = styled(Box)`
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  display : flex ;
  flex-direction : column ;
  padding-left : calc((100% - 375px) / 2);

  @media screen and (min-width : 475px) {
    padding-left : ${window.innerWidth >= 1440 ? '150px' : '50px'};
  }
  padding-top :80px;
  padding-bottom : 120px ;
`
export default Advertise;