
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>filter</h2>
        <div className="filter-options">
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} >
                <option value="All">todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem Alfabética</p>
            <button onClick={()=>setSort('Asc')}>Asc</button>
            <button onClick={() =>  setSort("Desc")} >Desc</button>
            {/* <buton>Asc</buton>
            <buton>Desc</buton> */}
        </div>
    </div>
  )
}

export default Filter