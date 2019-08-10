import React,{Component} from 'react'

class ContactUs extends Component{
    render(){
        return(
        <div>
            <h3 style={{paddingRight:'20px',paddingTop:'10px',paddingBottom:'5px',color:'white'}}>Contact Us</h3>
            <div className='row' style={{padding:'5px'}}>
                <div className='col-7' style={{padding:'20px'}}>
                    <div className='row justify-content-center' style={{color:'white'}}>The Graduate School of Technology</div>
                    <div className='row justify-content-center' style={{color:'white'}}>Affiliated to the University of Mumbai | AICTE, NBA, NAAC Accredited</div>
                    <div className='row' style={{padding:'10px'}}>
                        <div className='col' style={{padding:'10px'}}>
                        <div className='card'>
                            <div className='card-header'>
                            <h6 className='card-title'>BUSINESS HOURS</h6>
                            <div className='card-body'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Days</th>
                                            <th>Hours</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Monday-Saturday</td>
                                            <td>9:00 AM to 5:30 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>Closed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='card-footer'>* 2nd and 4th Saturdays are off</div>
                            </div>
                        </div>
                        </div>
                        <div className='col' style={{padding:'10px'}}>
                        <div className='card'>
                            <div className='card-header'>
                                <h6 className='card-title'>ADDRESS</h6>
                            </div>
                            <div className='card-body'>
                            Sri Chandrasekarendra Saraswati Vidyapuram Sector-V, Nerul Navi Mumbai-400706.
                            </div>
                            <div className='card-footer'>
                                <div>Phone :</div>
                                <ul>
                                    <li>022-61082400</li>
                                    <li>022-61082402</li>
                                    <li>022-61082427</li>
                                    <li>022-61082417</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-5' style={{float:'right'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4755497650417!2d73.02088931538397!3d19.04281805796202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sSIES+Graduate+School+of+Technology!5e0!3m2!1sen!2sin!4v1565437583569!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                </div>
            </div>
        </div>
        )
    }
}

export default ContactUs