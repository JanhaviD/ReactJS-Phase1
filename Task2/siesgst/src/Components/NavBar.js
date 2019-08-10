import React,{Component} from 'react'
import './NavBar.css'
class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {navBar,navBarLogo} = this.props
        return(
            <div>
                <div className="nav">
                    <img src={navBarLogo}></img>
                    {navBar.map((value,index)=>{
                        if(value.dropdown){
                            return(
                                <div>
                                    <div className="dropdown">
                                        <button className="dropbtn">{value.navItem}
                                        <i className="fa fa-caret-down"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            {value.dropdownItems.map((value)=>{
                                                return <a href="#">{value}</a>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else{
                            return <a href="#">{value.navItem}</a> 
                        }
                    })}
            </div>
            </div>
        )
    }
}

export default NavBar