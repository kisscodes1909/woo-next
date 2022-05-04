const VariationDropdown = ({attribute, onChange, selectedAttributes}) =>{
    
    const paName = attribute.name;

    //console.log(attribute);

    function handleOnChange(evt) {
        onChange(evt);
    }

    // console.log(attribute);

    return (
        <div className="flex">
            <label>{attribute.label}</label> <br />
            {attribute.values.map((val, i, attr)=> {
                //console.log(selectedAttributes);
                return (
                    <div key={i} className='mb-3'>
                        <label className='ml-3' htmlFor={`${paName}`}>{val}</label>
                        <input
                            className={`${paName}`} 
                            name={`${paName}`} 
                            id={`${paName}`} 
                            value={val} 
                            type="radio"
                            onChange={ (evt) => handleOnChange(evt) }
                            checked={ selectedAttributes[paName] == val ? true : false }
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default VariationDropdown;