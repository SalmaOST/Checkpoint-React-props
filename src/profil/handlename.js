function HandleName(props){
    return (
      <button className="Button" onClick={() => props.alertMyInput(`My name is Salma Omar Saleh Toure `)}>
        Alert !!
      </button>
    );
   };
  
 export default  HandleName