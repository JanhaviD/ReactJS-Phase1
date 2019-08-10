import React,{Component} from 'react'
import './Announcements.css'
class Announcements extends Component{
    render(){
        let {announcements} = this.props
        console.log(announcements)
        return(
            <div>
                <h3 style={{ margin: "20px" }}>Announcements</h3>
                <ul className="list-group"></ul>
                {announcements.map((value)=>{
                    return(
                        <li class="list-group-item">
                        <a href="" style={{color:'black'}}>{value.title}</a>
                        <div className="row p-2">
                        <div className ="col"><button className="btn btn-secondary" disabled style={{borderRadius:"5%"}}>{value.date}</button></div>
                        <div className ="col"><button className="btn btn-secondary" disabled style={{borderRadius:"50%"}}>{value.year}</button></div>
                        </div>
                      </li>
                    )
                })}
                <button className='btn' style={{margin:'20px',padding:'5px',backgroundColor:'#1D8E83',color:'white',float:'right'}}>SEE MORE</button>
            </div>
        )
    }
}

export default Announcements