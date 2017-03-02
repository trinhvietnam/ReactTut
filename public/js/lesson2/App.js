/**
 * Created by NamTV on 3/2/2017.
 */
var Button = React.createClass({
    getInitialState(){
        return {counter: 0};
    },
    render(){
        return (
            <button onClick={this.click}>{this.state.counter}</button>

        );
    },
    click(){
        this.state.counter++;
        this.setState(this.state);
    }
});
ReactDOM.render(
   <Button/>
    ,
    document.getElementById("root")
);
