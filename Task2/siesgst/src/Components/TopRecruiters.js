import React,{Component} from 'react'

class TopRecruiters extends Component{
    render(){
        let {topRecruiters} = this.props
        console.log(topRecruiters)
        return(
            <div>
                <h3 style={{padding:'5px 10px'}}>Top Recruiters</h3>
                <div className='row' style={{margin:'10px'}}>
                {topRecruiters.map((value,index)=>{
                    return(
                        <div className='col-2' style={{padding:'15px'}}>
                            <img src={value} style={{height:'100px',width:'175px'}}></img>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default TopRecruiters