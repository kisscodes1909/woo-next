import { find, uniq } from "lodash";
import { useState } from "react";
import VariationDropdown from "./variation-dropdown";
import AddToCartButton from "../cart/AddToCartButton";
import { StockStatus } from "./stock-status";

const Variation = ({product}) => {

    // Defaul variation
    let {edges: variations} = product.variations;

    // Get Product attributes
    let {nodes: attributes} = variations[0].node.attributes;

    //console.log(variations);
    
    //console.log(attributes);

    // console.log(variations);

    // Collect attribute


    function formatVariations(variations) {
        let allAttributes = [];
        return variations.map(variation => {
            return variation.node.attributes.nodes;
        })
    } 

    function filterVariation(variations, attrs) {
        return variations.filter((variation)=>{
            return hasMultipleAttr(variation, attrs);
        });
    }


    function hasMultipleAttr(variation, attrs) {
        // attrs = [
        //     {
        //         name: 'pa_size',
        //         value: 'Small'
        //     },
        //     {
        //         name: 'pa_colour',
        //         value: 'Blue'
        //     },
        // ];

        let hasMultipleValue = true;

       // console.log(attrs);

        // attrs.forEach(attr => {
        //     const hasAttr = hasAttribute(variation, attr.name, attr.value);

        //     // console.log(hasAttr);

        //     if(hasAttr === false) {
        //         hasMultipleValue = false;
        //         return hasMultipleValue;
        //     }
            
        //     //if(!hasAttr) return;
        // });
        
        for (const name in attrs) {
            const hasAttr = hasAttribute(variation, name, attrs[name]);

            if(hasAttr === false) {
                hasMultipleValue = false;
                return hasMultipleValue;
            }
        }

        return hasMultipleValue;
    }


    function hasAttribute(variation ,paName = 'pa_size', value="Small") {
        let hasAttr = false;

        variation.forEach(attr => {
            if(attr.name === paName && attr.value === value) {
                hasAttr = true;
                return hasAttr;
            }
        });

        return hasAttr; 
    }

    // console.log(filterVariation(formatVariations(variations)));

    variations = formatVariations(variations);

    // variations = filterVariation(variations, {
    //     pa_size: 'Small',
    // });

    // console.log

    // console.log(variations);
    
    function findAvailableAttributes(attributes, variations) {

        //console.log(variations);


        attributes = attributes.map(attr => {

            const id = attr.attributeId;
            const attrName = attr.name;
    
    
            //console.log(attr);
                 
            // Loop through variations

            
    
            let values = variations.map(variation => {

                //console.log(variation);

                //console.log(variation);
    
                // console.log(variation.node.attributes);
    
                const matchAttribute = variation.filter(attr => {
                    //console.log(attr);
                    return attr.name === attrName;
    
                });
    
                return matchAttribute[0].value;
    
                // console.log(matchAttribute);
                // console.log(matchAttribute);
            });
    
    
    
            // Unique values
            values = uniq(values);
    
            //console.log(values);
    
            return {
                id,
                values,
                name: attr.name,
                label: attr.label
            }
        });

        // console.log(attributes);

        return attributes;
    }


    // [
    //     {
    //         id: 'x',
    //         label: 'Label',
    //         values: [1, 2, 3, 4]
    //     }
    // ]
    
    
    // console.log();


    const [productAttributes, setAttributes] = useState(findAvailableAttributes(attributes, variations));
    const [selectedAttributes, setSelectedAttributes] = useState({});

    function VariationDropdownOnChange(evt) {

        let currSelectAttrs = {...selectedAttributes};

        currSelectAttrs[evt.target.className] = evt.target.value;

        let newVariations = filterVariation(variations, currSelectAttrs);

        newVariations = findAvailableAttributes(attributes, newVariations);

        setAttributes(newVariations);

        setSelectedAttributes(currSelectAttrs);
    }
    
    function reset() {
        setAttributes(findAvailableAttributes(attributes, variations));
        setSelectedAttributes({});
    }
    
    return (
        <div>
            
            {productAttributes.map((attr, key) => {
            return <VariationDropdown attribute={attr} 
                    // setSelectedAttributes={setSelectedAttributes}  
                    // selectedAttributes={selectedAttributes}
                    onChange={VariationDropdownOnChange}
                    selectedAttributes={selectedAttributes}
                    key={key}
                />
            })}

            <button onClick={() => {reset()}}>Reset</button>

            <StockStatus status='InStock' />

            <AddToCartButton product={ product }/>

        </div>
        // <div></div>
    );
}

export default Variation