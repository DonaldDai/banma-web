import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #034EED;
`;

const InfoCardWrapper = styled.div`
  position: absolute;
  left: 40%;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33%;
  padding: .32rem;
  background: white;
`;

const Title = styled.div`
  font-size: .32rem;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: .12rem;
`;

const Bar = styled.div`
  width: .50rem;
  height: .04rem;
  margin: .16rem 0;
  background: black;
`;

const Para = styled.div`
  width: 80%;
  margin-bottom: .12rem;
`;

class Banner3 extends React.PureComponent {
  render() {
    return (
      <Container>
        <InfoCardWrapper>
          <Title>标题标题</Title>
          <SubTitle>副标题副标题</SubTitle>
          <Bar />
          <Para>This is a placeholder.~This is a placeholder, too~This is a placeholder.~This is a placeholder, too~</Para>
          <Para>This is a placeholder.~This is a placeholder, too~This is a placeholder.~This is a placeholder, too~</Para>
        </InfoCardWrapper>
      </Container>
    );
  }
}

export default Banner3;
