import { find, merge, mergeWith, uniq, filter } from "lodash";
import { useState } from "react";
import VariationDropdown from "./variation-dropdown";
import AddToCartButton from "../cart/AddToCartButton";
import { StockStatus } from "./stock-status";
import client from "../ApolloClient";
import { PRODUCT_VARIATION_GET_STOCK } from "../../queries/stock";

const Variation = ({product}) => {

    // Defaul variation
    let {edges: variations} = product.variations;

    // Get Product attributes
    let {nodes: attributes} = variations[0].node.attributes;
    
    // console.log(attributes);

    // console.log(variations);


    function formatVariationData(variations) {
        return variations.map(variation => {
            let propertyObject = {};

            propertyObject['databaseId']  =  variation.node.databaseId;

            variation.node.attributes.nodes.forEach(attribute => {
                propertyObject['attributes'] = merge(propertyObject['attributes'], {
                    [attribute.name] : attribute.value
                });
            });

            return propertyObject;
        });
    }

    
    function prepareStructureUIData(variations) {
        if(variations.length < 1) return [];

        let productAttributes = {};
        let productUIData = [];


        // console.log('variation', variations);

        if(variations.length > 1) {
            // Merge property values
            variations.forEach(variation => {
                productAttributes = mergeWith(productAttributes, variation['attributes']);
                
            });

        } else {
            Object.keys(variations[0]['attributes']).forEach(propKey => {
                productAttributes[propKey] = [variations[0]['attributes'][propKey]];
            });
        }

        console.log(productAttributes);

        // Build product UI structure data
        for (const prop in productAttributes) {
            if (Object.hasOwnProperty.call(productAttributes, prop)) {
                productUIData.push({
                    name: prop,
                    values: productAttributes[prop],
                });
            }
        }

        return productUIData;
    }

    // const newFormatData = ;

    //console.log(newFormatData);
    // console.log(prepareStructureUIData(formatVariationData(variations)));

    variations = formatVariationData(variations);

    const [productAttributes, setAttributes] = useState(prepareStructureUIData(variations));
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [stock, setStock] = useState('');



    async function VariationDropdownOnChange(evt) {

        let currSelectAttrs = {...selectedAttributes};

        currSelectAttrs[evt.target.className] = evt.target.value;

        setSelectedAttributes(currSelectAttrs);

        let newVariations = filter(variations, {attributes: currSelectAttrs});
        let newAttributes = prepareStructureUIData(newVariations);

        setAttributes(newAttributes);

        // if(Object.keys(currSelectAttrs).length == attributes.length) {
        //     console.log('run');
        // }


        // const { data } = await client.query({
        //     query: PRODUCT_VARIATION_GET_STOCK,
        //     variables: { variationId: 'cHJvZHVjdF92YXJpYXRpb246NjA3NzQ=' }
        // });

        // console.log(data);
    }

    let variationDropdowns = [];

    for (const prop in productAttributes) {
        variationDropdowns.push(
            <VariationDropdown 
                attribute={productAttributes[prop]} 
                onChange={VariationDropdownOnChange}
                selectedAttributes={selectedAttributes}
                key={prop}
            />
        )
    }

    
    function reset() {
        setAttributes(prepareStructureUIData(variations));
        setSelectedAttributes({});
    }

    // console.log(productAttributes);
    
    return (
        <div>

            {/* {variationDropdowns} */}
            
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