import React,{Component} from 'react'

class Carousel extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {carousel} = this.props
        return(
            <div>
                <div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {carousel.map((value,index)=>{
                                if(index!==0)
                                    return <li data-target="#carouselExampleCaptions" data-slide-to={index}></li>
                                else
                                    return <li data-target="#carouselExampleCaptions" data-slide-to={index} className="active"></li>
                            })}
                        </ol>
                        <div className="carousel-inner">
                            {carousel.map((value,index)=>{
                                if(index===0){
                                return(
                                    <div className="carousel-item active">
                                    <img src={value.img} className="d-block" style={{width:"100%",height:"800px"}} alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{value.heading}</h5>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                                )}
                                else{
                                    return(
                                        <div className="carousel-item">
                                        <img src={value.img} className="d-block" style={{width:"100%",height:"800px"}} alt="..."></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{value.heading}</h5>
                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                    )}
                            })}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel