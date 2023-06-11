
function Buscador({buscar, handleChange}){
  
    return (
      <div>
        <input 
          type="text" 
          name="buscar" 
          value={buscar} 
          onChange={handleChange} 
        />
      </div>
    );
  }
  
  export default Buscador;
  