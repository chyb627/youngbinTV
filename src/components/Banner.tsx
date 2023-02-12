import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetail } from '../actions/movie';
import { AppDispatch } from '../store';
import { RootState } from '../store/reducer';
import '../css/Banner.css';

const Banner = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movieDetailData: movie } = useSelector((state: RootState) => state.movie);
  // console.log(':::movieDetailData::', movieDetailData);

  useEffect(() => {
    dispatch(movieDetail());
  }, [dispatch]);

  // 특정 글자 수 이상 일때 자르고 ... 처리함수
  const truncate = useCallback<(str: string, n: number) => string>((str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  }, []);

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
          {movie?.videos?.results[0]?.key && <button className="banner__button play">Play</button>}
        </div>

        <p className="banner__description">{truncate(movie.overview, 100)}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
