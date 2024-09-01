/* eslint-disable react/prop-types */

export const PokemonCard = ({id, name, sprites = []}) => {
    
  return (
    <section style={{height: 200}}>
        <h2 className="text-capitalize">#{id} - {name}</h2>
        <div>
            {/* imagenes */}
            {sprites.map( (img)=> (<img key={img} src={img} alt={name} />) )}
        </div>
        
    </section>
  )
}
