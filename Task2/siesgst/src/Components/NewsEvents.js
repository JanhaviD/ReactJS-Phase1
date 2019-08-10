import React,{Component} from 'react'

class NewsEvents extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {newsEvents} = this.props
        console.log(newsEvents)
        let slides = ""
        for(let i =0;i<newsEvents.length;i++){

        }

        return(
            <div>
                <h3 style={{ margin: "20px" }}>News And Events</h3>
                <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                    <div class="controls-top">
                        <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                        <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                            class="fa fa-chevron-right"></i></a>
                    </div>
                    <ol className="carousel-indicators">
                    {newsEvents.map((value,index)=>{
                        if(index==0){
                            return(<li data-target="#multi-item-example" data-slide-to={index} class="active"></li>)
                        }
                        else{
                            return(<li data-target="#multi-item-example" data-slide-to={index} ></li>)
                        }
                    })}
                    </ol>
                    {newsEvents.map((value, index, array) => {

                        let classname = "carousel-item container-fluid"
                        if (index == 0) {
                            classname += " active"
                        }
                        let i = index*3
                        if(i>=array.length){
                            return <div></div>
                        }
                        return (
                            <div className={classname}> 
                            <div className="row">
                                <div className="col-3 d-flex">
                                    <div className="card flex-fill h-200">
                                        <img className="card-img-top"
                                            src={array[i+0].img} style={{height:'150px'}}></img>
                                        <div className="card-body">
                                            <p className="card-text">{array[i+0].content}</p>
                                            <h6 className="card-footer">{array[i+0].date}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3 d-flex">
                                    <div className="card flex-fill h-200">
                                        <img className="card-img-top"
                                            src={array[i+1].img} style={{height:'150px'}}></img>
                                        <div className="card-body">
                                            <p className="card-text">{array[i+1].content}</p>
                                            <h6 className="card-footer">{array[i+1].date}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3 d-flex">
                                    <div className="card flex-fill h-200">
                                        <img className="card-img-top"
                                            src={array[i+2].img} style={{height:'150px'}}></img>
                                        <div className="card-body">
                                            <p className="card-text">{array[i+2].content}</p>
                                            <h6 className="card-footer">{array[i+2].date}</h6>
                                        </div>
                                    </div>
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

export default NewsEvents