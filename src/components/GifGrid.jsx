import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const GifGrid = ({ category, onDeleteCategory }) => {

  const { images, isLoading } = useFetchGifs(category);

  const handleDeleteClick = () => {
    onDeleteCategory(category);
  }


  return (
    <>
      {category && (
        <>
          <h3>{category}</h3>
          <button onClick={handleDeleteClick}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
      
      {isLoading && (<h2>Cargando...</h2>)}
      <div className='card-grid'>
        {images.map(((image) => (
          <GifItem key={image.id} {...image} />
        )))}
      </div>
    </>
  )
}
