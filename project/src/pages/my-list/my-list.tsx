import React from 'react';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import {Film} from '../../types/film';


type MyListProps ={
  myFilms: Film[];
};

function MyList({myFilms}: MyListProps): JSX.Element{
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <a href='main.html' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>9</span></h1>
        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img src='img/avatar.jpg' alt='User avatar' width='63' height='63'/>
            </div>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link'>Sign out</a>
          </li>
        </ul>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <Catalog films={myFilms}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
