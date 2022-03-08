const VariationDropdown = ({attribute, onChange, selectedAttributes}) =>{
    
    const id = attribute.id;
    const paName = attribute.name;

    //console.log(attribute);

    function handleOnChange(evt) {
        // let currSelectAttrs = {...selectedAttributes};

        // currSelectAttrs[evt.target.className] = evt.target.value;

        // setSelectedAttributes(currSelectAttrs);
        onChange(evt);
    }

    return (
        <div className="flex">
            <label>{attribute.label}</label> <br />
            {attribute.values.map((val, i, attr)=> {
                //console.log(selectedAttributes);
                return (
                    <div key={i} class='mb-3'>
                        <label className='ml-3' htmlFor={`${paName}_${id}`}>{val}</label>
                        <input
                            className={`${paName}`} 
                            name={`${paName}_${id}`} 
                            id={`${paName}_${id}`} 
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