export default function AnimeDetails({ anime }) {
  return (
    <div className="details">
      <header>
        <img src={anime.image} alt={`${anime.title} cover`} />
        <div className="details-overview">
          <h2>{anime.title}</h2>
          <p>
            {anime.year} &bull; {anime.score}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{anime.synopsis}</em>
        </p>
      </section>
    </div>
  );
}
