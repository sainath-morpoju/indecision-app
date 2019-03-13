class Counter extends React.Component{

    constructor(props){
        super(props);

        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);

        this.state = {
            // count: props.count
            count : 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        // if(stringCount){
        //     this.setState( () => (
        //         {count : parseInt(stringCount,10)}
        //     ))
        // }
        const count = parseInt(stringCount,10);
        if(!isNaN(count)){
            this.setState(()=> ({count}));
        }
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }   
    }

    handleAddOne(){ 
        // console.log("+1");
        // this.state.count = this.state.count+1;
        this.setState( (prevState) => {
            return{
                count : prevState.count+1
            };
        });
        //passing a function nto setState is the preferred way than to directly pass the object like below, watch lecture 34 at 5min
        // this.setState({
        //     count : this.state.count+1
        // }) ;
    }
    handleMinusOne() {
        // console.log("-1");
        this.setState( (prevState) =>  {
           return {
               count : prevState.count-1
            };
        });
    }
    handleReset() {
        this.setState( () =>  {
            return {
                count : 0
             };
         });
    }
    render(){

        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count : 0
// };

ReactDOM.render(<Counter />,document.getElementById('app'));