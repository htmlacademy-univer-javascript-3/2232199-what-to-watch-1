import SmallFilmCard from '../small-film-card/small-film-card';
import {Film} from '../../types/film';

type CatalogProps = {
  films: Film[]
}

function Catalog({ films }: CatalogProps): JSX.Element{
  return (
    <div className='catalog__films-list'>
      {films.map((film) => <SmallFilmCard key={film.title} title={film.title} posterUrl={film.posterUrl}/>)}
    </div>);
}

export default Catalog;