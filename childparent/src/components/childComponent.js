export default function childComponent(props){
   return(
    <>
    <h3>Hello React I'm child</h3>
    {
        props.setfun('My name is Rivindu')
    }
    </>
   );
   
}