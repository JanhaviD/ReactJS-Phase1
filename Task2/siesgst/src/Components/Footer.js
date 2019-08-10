import React,{Component} from 'react'
import './Footer.css'
class Footer extends Component{

    render(){
        return(
            <div>
                <div className='row footer-text'>
                    <div className='col' style={{textAlign:'center'}}>
                    © 2017 SIES Graduate School Of Technology, Nerul · All Rights Reserved
                    </div>
                    <div className='col'>
                        <a href="#">HOME</a>
                        <a href="#">PRIVACY</a>
                        <a href="#">DEVELOPERS</a>
                        <a href="#">CONTACT US</a>
                        <a href="#">MANDATORY DISCLOSURE</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer