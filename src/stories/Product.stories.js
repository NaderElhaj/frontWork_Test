import Product from "../components/Product";

export default{
    title:"Component/Product",
    component : Product
}
const Template = (args) => <Product {...args} />
  
export  const Orange = Template.bind({})

Orange.args = {
    backgroundColor:"#FEF2EE",
    brand:"Nike",
    name:"Nike Air Max 270",
    price:"$195.80",
    productImage:"/images/nike.png",
    size:"sm"
}
export  const Default = Template.bind({})

Default.args = {
    brand:"Nike",
    name:"Nike Air Max 270",
    price:"$195.80",
    productImage:"/images/nike.png",
    size:"sm"
}
export  const Small = Template.bind({})

Small.args = {
    backgroundColor:"#FEF2EE",

    brand:"Nike",
    name:"Nike Air Max 270",
    price:"$195.80",
    productImage:"/images/nike.png",
    size:"sm"
}
export  const Medium = Template.bind({})

Medium.args = {
    backgroundColor:"#FEF2EE",

    brand:"Nike",
    name:"Nike Air Max 270",
    price:"$195.80",
    productImage:"/images/nike.png",
    size:"md"
}
export  const Large = Template.bind({})

Large.args = {
    backgroundColor:"#FEF2EE",

    brand:"Nike",
    name:"Nike Air Max 270",
    price:"$195.80",
    productImage:"/images/nike.png",
    size:"lg"
}




