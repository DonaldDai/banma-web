import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #6C6095;
`;

const InfoCardWrapper = styled.div`
  position: absolute;
  right: 18.2%;
  bottom: 18.2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
`;

const TextButton = styled.div`
  padding: .12rem .16rem;
  margin-top: .08rem;
  border: solid ${props => (props.borderColor ? props.borderColor : 'black')} .02rem;
  border-radius: .04rem;
`;

class Banner1 extends React.PureComponent {
  render() {
    return (
      <Container>
        <InfoCardWrapper>
          <div>This is a placeholder.~This is a placeholder, too~</div>
          <TextButton borderColor="white" >Have a look</TextButton>
        </InfoCardWrapper>
      </Container>
    );
  }
}

export default Banner1;
