import BestSeller from "../components/BestSeller"
import Product from "../components/Product"
import * as ProductStoies from './Product.stories'


export default{
    title:"Components/BestSeller",
    component : BestSeller,
    subcomponents : {Product}

}
const Template = (args) => (
        <BestSeller {...args} /> 
) 
  

export  const OneItem = Template.bind({})

OneItem.args = {

    items :   [
        {...ProductStoies.Default} , 
   
    ]
 

}
export  const TwoItems = Template.bind({})

TwoItems.args = {

    items :   [
        {...ProductStoies.Orange.args} , 
        {...ProductStoies.Default.args} , 
   
    ]
 

}
export  const ThreeItems = Template.bind({})

ThreeItems.args = {

    items :   [
        {...ProductStoies.Orange.args} , 
        {...ProductStoies.Default.args} , 
        {...ProductStoies.Default.args} , 
   
    ]
 

}
export  const FourItems = Template.bind({})

FourItems.args = {

    items :   [
        {...ProductStoies.Orange.args} , 
        {...ProductStoies.Default.args} , 
        {...ProductStoies.Default.args} , 
        {...ProductStoies.Default.args} , 
   
    ]
 

}


