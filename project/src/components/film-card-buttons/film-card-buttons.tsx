import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import React from 'react';
import {Film} from '../../types/film';
import {FilmStatus} from '../../types/film-status';
import {changeFilmStatusToView} from '../../store/api-actions';
import {setFavoriteCount} from '../../store/main-data/main-data';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteCount} from '../../store/main-data/selectors';

type FilmCardButtonsProps ={
  film: Film,
  authStatus: AuthorizationStatus
}

function FilmCardButtons({film, authStatus}: FilmCardButtonsProps): JSX.Element{
  const favoriteCount = useAppSelector(getFavoriteCount);
  const dispatch = useAppDispatch();

  const onAddFavoriteClick = () => {
    const filmStatus: FilmStatus = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    dispatch(changeFilmStatusToView(filmStatus));

    if (film?.isFavorite) {
      dispatch(setFavoriteCount(favoriteCount - 1));
    } else {
      dispatch(setFavoriteCount(favoriteCount + 1));
    }
  };

  return(
    <div className="film-card__buttons">
      <Link
        to={`/player/${film.id}`}
        className='btn btn--play film-card__button'
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <Link
        className='btn btn--list film-card__button'
        to={'/mylist'}
        onClick={onAddFavoriteClick}
      >
        {
          film?.isFavorite ? <span>✓</span> :
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
        }
        <span>My list</span>
        <span className="film-card__count">{favoriteCount}</span>
      </Link>
      { authStatus === AuthorizationStatus.Auth &&
        <Link to={'review'} className="btn film-card__button" type='button'>Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
