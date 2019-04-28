import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/dist/js/swiper.esm'
import { Link } from 'react-router-dom';

import { Banner1, Banner2, Banner3, Banner4 } from 'components/Banners';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #1D7967;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
`;

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 2rem);
  .swiper-container {
    width: 100%;
    height: 100%;
  }
`;

class Home extends React.PureComponent {
  render() {
    const params = {
      modules: [Pagination, Navigation, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      loop: true,
      autoplay: true,
    }

    return (
      <Container>
        <HeaderWrapper>
          <div>前一个标题</div>
          <div style={{ fontSize: '.32rem' }} >当前标题</div>
          <div>后一个标题</div>
        </HeaderWrapper>
        <SwiperWrapper>
          <Swiper {...params}>
            <div>
              <Link to="/banner/detail" >
                <Banner1 />
              </Link>
            </div>
            <div>
              <Link to="/banner/detail" >
                <Banner2 />
              </Link>
            </div>
            <div>
              <Link to="/banner/detail" >
                <Banner3 />
              </Link>
            </div>
            <div>
              <Link to="/banner/detail" >
                <Banner4 />
              </Link>
            </div>
          </Swiper>
        </SwiperWrapper>
      </Container>
    );
  }
}

export default Home;
