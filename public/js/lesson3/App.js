/**
 * Created by NamTV on 3/2/2017.
 */
var List = React.createClass({
    getInitialState(){
        return {listNotes:['react','react-native','android','java']};
    },
    render(){
        return (
            <ul>
                {this.state.listNotes.map((note,index)=>{
                    return <li key={index}>{note}</li>
                })}
            </ul>
        );
    },

});
ReactDOM.render(
   <List/>
    ,
    document.getElementById("root")
);
