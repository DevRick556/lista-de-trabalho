import React from 'react'

const Busca = ({search, setSearch}) => {
  return (
    <div className='search' >
        <h2>Pesquisar:</h2>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='digite pra pesquisar
        ' />
    </div>
  )
}

export default Busca