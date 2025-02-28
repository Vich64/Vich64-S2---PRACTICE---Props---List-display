export default function AVAILABLE_THING({id, title, image, item}) {
    return (
      <li key={id} className={item}>
        <button>
          <img src={image.src} alt={image.alt} />
          <h3>{title}</h3>
        </button>
      </li>
    );
  }
  