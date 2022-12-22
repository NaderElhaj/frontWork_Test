import Chat from "../components/Chat";

export default{
    title:"Chat",
    component : Chat
}
const Template = (args) => <Chat {...args} />
  
export  const Orange = Template.bind({})

Orange.args = {
    backgroundColor : "#4643D3",
size : "md",
avatar : "/images/avatar.png",
name : "Emily Dougrer",
job : "Developer",
message : "Hi there.We use Boards to share initial goals and ideas.",
}


