import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Header = styled.h1``;

const Input = styled.input``;

const MovieListWrapper = styled.div``;

const Movie = styled.div``;

const Title = styled.div``;

const Details = styled.div``;

const Poster = styled.div``;

const Detail = styled.p``;

const App = () => {
  return (
    <Wrapper>
      <Header>Movies with those guys</Header>
      <Input type="text" />
      <Input type="text" />
      <MovieListWrapper>
        <Movie>
          <Title>Movie title</Title>
          <Details>
            <Poster>Poster</Poster>
            <Detail>Movie details</Detail>
          </Details>
        </Movie>
      </MovieListWrapper>
    </Wrapper>
  );
};

export default App;
