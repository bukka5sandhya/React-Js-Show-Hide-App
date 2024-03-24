import './index.css'
import {Component} from 'react'

class ShowHideApp extends Component{
    state = {showFirstName:false,showLastName:false,}

    onClickShowFirstName = () => {
        this.setState(prevState => ({showFirstName: !prevState.showFirstName}));
    }
    onClickShowLastName = () =>{
        this.setState(prevState => ({showLastName: !prevState.showLastName}));
    }
    render(){
        const {showFirstName,showLastName} = this.state
        return(
            <div className="bg-container">
                <h1 className="main-heading">Show/Hide</h1>
                <div className="container2">
                    <div className="container3">
                        <button type="button" className="button" onClick={this.onClickShowFirstName}>Show/Hide FirstName</button>
                        {showFirstName && <p className="name">Joe</p>}
                    </div>
                    <div className="container3">
                        <button type="button" className="button" onClick={this.onClickShowLastName}>Show/Hide LastName</button>
                        {showLastName && <p className="name">Jonas</p>}
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowHideApp