/**
 * Created by NamTV on 3/2/2017.
 */
var Title = React.createClass({
    getInitialState(){
      return {time:0}
    },
    render(){
        return(
            <h1 className = "title" > {this.state.time}</h1>
        );
    },
    componentDidMount:function () {
        setInterval(()=>{
            this.state.time = this.state.time + 1;
            this.setState(this.state);
        },1);
    }
});
var Content = React.createClass({
    doClick(){
        alert((this.props.children[0].type));
    },
    render(){
        return(
        <div>
            <div>{this.props.text}</div>
            <div>{this.props.children}</div>
            <Title text="123"/>
            <button onClick={this.doClick}>Click</button>
        </div>
        );
    }
})
ReactDOM.render(
    <div>
        <Content text="5431">
            <h3>Day la children</h3>
            <h2>Day la children</h2>
            <h1>Day la children</h1>
            <div></div>
        </Content>
    </div>,
    document.getElementById("root")
);
