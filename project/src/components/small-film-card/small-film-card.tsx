import {Link} from 'react-router-dom';
import {useState} from 'react';
import PreviewPlayer from '../preview-player/preview-player';
import {useAppDispatch} from '../../hooks';
import {resetMainScreen} from '../../store/main-data/main-data';

type SmallFilmCardProps ={
  id: number;
  title: string;
  posterUrl: string;
  videoUrl: string;
};

function SmallFilmCard({id, title, posterUrl, videoUrl}: SmallFilmCardProps): JSX.Element{
  const dispatch = useAppDispatch();
  const [isPointed, setIsPointed] = useState(false);

  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseEnter={() => setIsPointed(true)}
      onMouseLeave={() => setIsPointed(false)}
    >
      <div className='small-film-card__image'>
        {
          isPointed
            ? <PreviewPlayer image={posterUrl} previewVideo={videoUrl}/>
            : <img src={posterUrl} alt={title} width='280' height='175'/>
        }
      </div>
      <h3 className='small-film-card__title'>
        <Link
          to={`/films/${id}`}
          className='small-film-card__link'
          onClick={() => (dispatch(resetMainScreen()))}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
