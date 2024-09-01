/* eslint-disable no-unused-vars */
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);


  return (
    <>
      <div className="container">
        <h2>POKEMON -{counter} - {data?.name}</h2>
        <hr />
        {isLoading ? (<LoadingMessage />) : <PokemonCard id={data.id} name= {data.name} sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
          ]}/>}

        <button className="button-danger" onClick={()=> counter > 1 ? decrement(): null}>Anterior</button> &nbsp;
        <button className="button-primary" onClick={()=>increment()}>Siguiente</button>
      </div>
    </>
  );
};
