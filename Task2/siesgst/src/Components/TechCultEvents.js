import React,{Component} from 'react'

class TechCultEvents extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {techCultEvents} = this.props
        console.log(techCultEvents)
        return(
            <div>
            <h3 style={{color:'white',padding:'20px'}}>Technical and Cultural Events</h3>
            <div className='card-columns' style={{margin:'30px'}}>
                    {techCultEvents.map((value,index)=>{
                        let i = index*3
                        if(i>=techCultEvents.length){
                            return
                        }
                        return(
                        <div>
                        <div className='card'>
                        <img className='card-img-top' src={techCultEvents[i+0].eventImage} style={{height:'400px'}}></img>
                        <div className='card-body'>
                            <h5 className="card-title">{techCultEvents[i+0].eventName}</h5>
                        </div>
                        </div>
                        <div className='card'>
                        <img className='card-img-top' src={techCultEvents[i+1].eventImage} style={{height:'400px'}}></img>
                        <div className='card-body'>
                            <h5 className="card-title">{techCultEvents[i+1].eventName}</h5>
                        </div>
                        </div>
                        <div className='card'>
                        <img className='card-img-top' src={techCultEvents[i+2].eventImage} style={{height:'400px'}}></img>
                        <div className='card-body'>
                            <h5 className="card-title">{techCultEvents[i+2].eventName}</h5>
                        </div>
                        </div>
                        </div>
                    )
                    })}
            </div>
            </div>
        )
    }
}

export default TechCultEvents