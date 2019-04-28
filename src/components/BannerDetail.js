import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 1.2rem;
  background: #92B3D8;
`;

const FloatTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroImage = styled.div`
  width: 100%;
  height: 3rem;
  background: #3C9DCD;
`;

const DescLink = styled.a`
  display: block;
`;

class BannerDetail extends React.PureComponent {
  render() {
    return (
      <Container>
        <HeaderImage>
          <FloatTitle>Banner 标题</FloatTitle>
        </HeaderImage>
        <HeroImage />
        <DescLink href="#" >1. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >2. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >3. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >4. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >5. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >6. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >7. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >8. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >9. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >6. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >7. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >8. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >9. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >10. 链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >11.链接fadsjlkjfldafdsafdfadf</DescLink>
        <DescLink href="#" >...</DescLink>
      </Container>
    );
  }
}

export default BannerDetail;
