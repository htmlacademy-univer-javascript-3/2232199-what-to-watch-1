import React, {useEffect} from 'react';

import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import {Link, Navigate, useParams} from 'react-router-dom';
import FilmDescription from '../../components/film-description/film-description';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsByID, fetchFilmByID, fetchSimilarByID} from '../../store/api-actions';
import {setDataLoadedStatus} from '../../store/action';
import Loading from '../loading/loading';
import {AuthorizationStatus} from '../../const';

function MoviePage(): JSX.Element{

  const id = Number(useParams().id);
  const film = useAppSelector((state) => state.film);
  const comments = useAppSelector((state) => state.comments);
  const similar = useAppSelector((state) => state.similar);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const loadStatus = useAppSelector((state) => state.isDataLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDataLoadedStatus(true));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));
    dispatch(setDataLoadedStatus(false));
  }, [id, dispatch]);

  if (loadStatus) {
    return(<Loading />);
  }

  if (!film) {
    return <Navigate to={'/notfound'}/>;
  }

  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <Link to='/login' className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${id}`}
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
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                { authStatus === AuthorizationStatus.Auth &&
                  <Link to={'review'} className="btn film-card__button" type='button'>Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name}
                width="218" height="327"
              />
            </div>
            <FilmDescription film={film} reviews={comments}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog films={similar}/>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;

