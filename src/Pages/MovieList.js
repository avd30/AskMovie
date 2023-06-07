import { Card } from "../components/Card"
import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);


  return (
    <main>
    <section className=" max-w-7xl mx-auto py-7">
      <div className=" flex justify-center flex-wrap">
      { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
      </div>
    </section>
    </main>
  )
}


