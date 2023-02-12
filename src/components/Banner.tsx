import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { movieDetail } from '../actions/movie';
import { AppDispatch } from '../store';
import { RootState } from '../store/reducer';
import '../css/Banner.css';

const Banner = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movieDetailData: movie } = useSelector((state: RootState) => state.movie);
  // console.log(':::movie::', movie);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    dispatch(movieDetail());
  }, [dispatch]);

  // 특정 글자 수 이상 일때 자르고 ... 처리함수
  const truncate = useCallback<(str: string, n: number) => string>((str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  }, []);

  // 화면 분기 처리 (클릭시 iframe화면)
  if (isClicked) {
    return (
      <>
        <button onClick={() => setIsClicked(false)}>뒤로가기</button>

        <Container>
          <HomeContainer>
            <Iframe
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </HomeContainer>
        </Container>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className="banner__contents">
          <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>

          <div className="banner_buttons">
            {movie?.videos?.results[0]?.key && (
              <button onClick={() => setIsClicked(true)} className="banner__button play">
                Play
              </button>
            )}
          </div>

          <p className="banner__description">{truncate(movie.overview, 100)}</p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
