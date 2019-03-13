class IndecisionApp extends React.Component{

	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			// options : ['Thing one','Thing Two','Thing four']
			options : []
		}
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options : []
			};
		});
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
	}

	handleAddOption(option) {

		if(!option){
			return 'Enter valid value to add the item';
		}
		else if(this.state.options.indexOf(option)>-1){
			return 'This option already exists';
		}

		this.setState((prevState)=>{
			return {
				// options : prevState.options.push(option)
				options: prevState.options.concat([option])

			}
		});
	}

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    // const options = ['Thing one','Thing Two','Thing four'];
    return (
    	<div>
        <Header title={title} subtitle={subtitle} />
        <Action 
					hasOptions={this.state.options.length>0} 
					handlePick={this.handlePick}
				/>
        <Options
				 options={this.state.options}
				 handleDeleteOptions = {this.handleDeleteOptions}
				/>
        <AddOption 
					handleAddOption = {this.handleAddOption}
				/>
    	</div>
    );
  }
}

class Header extends React.Component {
  render(){  
    return (
    	<div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
    	</div>
    );
  }
}

class Action extends React.Component{

  render(){
    return (
    	<div>
        <button 
					onClick={this.props.handlePick}
					disabled = {!this.props.hasOptions}
					>
						What should i do?
				</button>
    	</div>
    );
  }
}

//learn about bind and this context in javascript on mdn
class Options extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
    return (
    	<div>
        <button onClick={this.props.handleDeleteOptions}>
					Remove All
				</button>
        {
       		this.props.options.map((option) => {
       		return  <Option key={option} optionText={option}/>
        })}
				{/* {
       		this.props.options = []
					 //	note that this is not allowed as props are read-only in child components
        } */}
    	</div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
    	<div>
        {this.props.optionText}
    	</div>
    );
  }
}

class AddOption extends React.Component{

	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);

		this.state = {
			error: undefined
		};
	}

  handleAddOption(e){
  	e.preventDefault();//this prevents full page refresh default

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

  	if(error){
			this.setState(()=>{
				return {
					// error: error //this is same as below
					error
				}
			})
		}
		
		e.target.elements.option.value = '';

	}
	
  render(){
    return(
    	<div>
			{this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        	<input type="text" name="option" />
        	<button>Add Option</button>
        </form>
    	</div>
    );
  }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));