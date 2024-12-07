const Textarea = ({ name, id, cols, rows, onChange, count }) => {
    return (
        <div className="form-group">
            <textarea name={name} id={id} cols={cols} rows={rows} onChange={onChange}></textarea>
            <div style={{ color: 'white', textAlign:'center' }} className="count">Count : {count}</div>
        </div>
    )
}

export default Textarea;