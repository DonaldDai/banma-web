import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #1BB56E;
`;

const InfoCardWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: .32rem;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: .12rem;
`;

class Banner3 extends React.PureComponent {
  render() {
    return (
      <Container>
        <InfoCardWrapper>
          <Title>标题标题标题标题标题标题标题标题</Title>
          <SubTitle>副标题副标题</SubTitle>
        </InfoCardWrapper>
      </Container>
    );
  }
}

export default Banner3;
