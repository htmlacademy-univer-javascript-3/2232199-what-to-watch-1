import React from 'react';
import Logo from '../../components/logo/logo';
import {Link, Navigate, useParams} from 'react-router-dom';
import {Film} from '../../types/film';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewProps = {
  films: Film[]
}

function AddReview({films}: AddReviewProps): JSX.Element{
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);

  if (!film) {
    return <Navigate to={'/*'}/>;
  }

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img src='img/avatar.jpg' alt='User avatar' width='63' height='63'/>
              </div>
            </li>
            <li className='user-block__item'>
              <Link to='/login' className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film.posterImage} alt={film.name}
            width='218' height='327'
          />
        </div>
      </div>

      <ReviewForm/>

    </section>
  );
}

export default AddReview;
