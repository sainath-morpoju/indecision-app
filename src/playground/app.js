class IndecisionApp extends React.Component{

	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			// options : ['Thing one','Thing Two','Thing four']
			// options : props.options
			options : []
		}
	}

	componentDidMount() {
		// console.log('fetching data');
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(() => ({options}));
			}
		}
		catch(e){

		}
	}

	componentDidUpdate(prevProps,prevState) {
		// console.log('saving data');

		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options',json);
		}
	}

	componentWillUnmount(){
		
	}

	// handleDeleteOptions() {
	// 	this.setState(() => {
	// 		return {
	// 			options : []
	// 		};
	// 	});
	// }

	//note when we are returning an object in arrow functin put it in paranthesis () to distinguish it from function body syntax which also uses {}
	handleDeleteOptions() {
		this.setState(() => 
		(
			{
				options :[]
			}
		)
		);
	}

	handleDeleteOption(optionToRemove) {
		// console.log('hdo',option);
		// this.setState((prevState) => ({
		// 	options : prevState.options.filter((option) => {
		// 		return optionToRemove !== option;
		// 	}) 
		// }));

		this.setState((prevState) => ({
			options : prevState.options.filter((option) => 
				optionToRemove !== option)
			}));

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

		// this.setState((prevState)=>{
		// 	return {
		// 		// options : prevState.options.push(option)
		// 		options: prevState.options.concat([option])

		// 	}
		// });

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	};

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    // const options = ['Thing one','Thing Two','Thing four'];
    return (
    	<div>
        <Header subtitle={subtitle} />
        <Action 
					hasOptions={this.state.options.length>0} 
					handlePick={this.handlePick}
				/>
        <Options
				 options={this.state.options}
				 handleDeleteOptions = {this.handleDeleteOptions}
				 handleDeleteOption = {this.handleDeleteOption}
				/>
        <AddOption 
					handleAddOption = {this.handleAddOption}
				/>
    	</div>
    );
  }
}

// IndecisionApp.defaultProps = {
// 	options : []
// };

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitile && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title:'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled = {!props.hasOptions}
				>
					What should i do?
			</button>
		</div>
	);
};
// class Action extends React.Component{

//   render(){
//     return (
//     	<div>
//         <button 
// 					onClick={this.props.handlePick}
// 					disabled = {!this.props.hasOptions}
// 					>
// 						What should i do?
// 				</button>
//     	</div>
//     );
//   }
// }

//learn about bind and this context in javascript on mdn

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>
				Remove All
			</button>
			{
				 props.options.map((option) => {
				 return  (
					 <Option 
					 		key={option} 
							optionText={option}
							handleDeleteOption = {props.handleDeleteOption}
						/>);
			})}
			{/* {
				 props.options = []
				 //	note that this is not allowed as props are read-only in child components
			} */}
		</div>
	);
};

const Option = (props) => {
	return(
		<div>
			{props.optionText}
			{/* <button onClick={props.handleDeleteOption} >Remove</button> */}
			<button 
			onClick={(e) => {
				props.handleDeleteOption(props.optionText)}} 
				>Remove</button>
		</div>
	);
};

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

			// this.setState(()=>{
			// 	return {
			// 		// error: error //this is same as below
			// 		error
			// 	}
			// });

		this.setState(()=>({error}));
		if(!error)
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