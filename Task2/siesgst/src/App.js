import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel'
import NewsEvents from './Components/NewsEvents'
import Announcements from './Components/Announcements'
import TechCultEvents from './Components/TechCultEvents'
import TopRecruiters from './Components/TopRecruiters'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      navBarLogo : "https://www.developerweekend.org/images/sies%20logo.bmp",
      navBar : [
        {
          navItem : "Home",
        },
        {
          navItem : "About",
          dropdown : true,
          dropdownItems : ["Overview","Vision and Mission","The Principal","Core Values"]
        },
        {
          navItem : "Academics",
          dropdown : true,
          dropdownItems : ["Computer Engineering","Electronics and Telecommunication","Information Technology","Mechanical Engineering","Printing and Packaging"]
        },
        {
          navItem : "Admissions"
        },
        {
          navItem : "Careers"
        }
      ],
      carouselSlides : [
          {
            active : "active",
            img : "http://www.siesgst.edu.in/assets/index.png",
            heading : "SIES Graduate School of Technology, Nerul",
            description : "One of the Top Colleges in Mumbai. NAAC Accredited B++ "
          },
          {
            active : "",
            img : "http://www.siesgst.edu.in/assets/career.jpg",
            heading : "Vision",
            description : "To be a centre of excellence in Education and Technology committed towards Socio-Economic advancement of the country"
          }
        ],
      newsEvents : [
        //http://www.siesgst.edu.in/assets/background1.jpg
        {
          img : "https://scontent.fbom3-1.fna.fbcdn.net/v/t1.0-1/c1.0.595.595a/16939712_192122984607206_1141702820984740811_n.jpg?_nc_cat=108&_nc_oc=AQm0TQU_Q7yWngvKB10Q43NhRtCPvOQMRw9ucIP0Xb396053YB9ExwpnHBJf_T2O1-Se270AqnZWiLmyp9CbytfU&_nc_ht=scontent.fbom3-1.fna&oh=d1730aa4a4840a04ff627dbf17b52524&oe=5DE0BA33",
          content : "NSS team joined the campaign Big Mumbai Clean organised by Khushiyaan Foundation on 21st July,2019",
          date : "24-07-2019"
        },
        {
          img : "https://scontent.fbom4-1.fna.fbcdn.net/v/t1.0-9/29572857_2129580850594873_8673442345141656842_n.jpg?_nc_cat=106&_nc_oc=AQn2fosUi8aQgGLhU0rO83ExkCGVhC2wu7-z9woDwMmNBVxZnqK0G6uCBjWlU1RzeRc&_nc_ht=scontent.fbom4-1.fna&oh=f996d5bc45cfb5fec649487bf7bc3622&oe=5DA9C4AE",
          content : "Congratulations to team Turbocrafters for making everyone proud by securing AIR 14 out of 280 teams in the virtual phase of BAJA 2020.",
          date : "19-07-2019"
        },
        {
          img : "http://www.siesgst.edu.in/assets/background1.jpg",
          content : "PPT 2018 pass out Sanjeev Srinivasan wins the Student of the year Award from PrintWeek India.",
          date : "29-11-2018"
        },
        {
          img : "http://www.siesgst.edu.in/assets/background1.jpg",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date : "date"
        },
        {
          img : "http://www.siesgst.edu.in/assets/background1.jpg",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date : "date"
        },
        {
          img : "http://www.siesgst.edu.in/assets/background1.jpg",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date : "date"
        }
      ],
      announcements : [
        {
          title : "Merit List after the Counseling Round - I",
          date : "19-07-2019",
          year : "FE"
        },
        {
          title : "First year Engineering Admissions-Institute Level Counselling Round I -Schedule 2019-20",
          date : "15-07-2019",
          year : "FE"
        },
        {
          title : "INSTITUTE LEVEL CONSOLIDATED MERIT LIST 2019-20",
          date : "13-07-2019",
          year : "FE"
        },
        {
          title : "Guidance Session for First Year Engineering Admissions",
          date : "12-07-2019",
          year : "FE"
        }
      ],
      techCultEvents : [
        {
          eventName : 'Cognition - our technical fest',
          eventImage : 'https://i.ytimg.com/vi/55DNZiqLK4Q/maxresdefault.jpg',
        },
        {
          eventName : 'Bytecamp - our offical hackathon',
          eventImage : 'http://bytecamp.siesgst.ac.in/images/bytecamp2.jpg'
        },
        {
          eventName : 'Lakshya - annual sports meet',
          eventImage : 'https://i.ytimg.com/vi/yPhzdg4jUL4/maxresdefault.jpg'
        },
        {
          eventName : 'Developers Weekend @ siesgst',
          eventImage : 'https://i.ytimg.com/vi/RhaiascE6EI/maxresdefault.jpg'
        },
        {
          eventName : 'TEDx Siesgst',
          eventImage : 'https://i.ytimg.com/vi/80Te5DtndoI/maxresdefault.jpg'
        },
        {
          eventName : 'TML - Tatva Moksh Lakshya',
          eventImage : 'https://i.ytimg.com/vi/NLdyeyShuLA/maxresdefault.jpg'
        }
      ],
      topRecruiters : [
        'https://1000logos.net/wp-content/uploads/2017/02/IBM-Logo.png',
        'https://www.lntinfotech.com/wp-content/uploads/2017/06/LTI_Lets_solve.png',
        'https://findvectorlogo.com/wp-content/uploads/2018/09/continuum-managed-services-vector-logo.png',
        'https://www.gep.com/sites/default/files/gep-logo_0.png',
        'https://i.pinimg.com/originals/df/91/5d/df915d91d151de729d57aaf06de0e8bc.jpg',
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png',
        'https://se-asce2019.utk.edu/wp-content/uploads/2019/02/jacobs-logo.png',
        'https://bsmedia.business-standard.com/_media/bs/img/article/2019-02/18/full/1550484713-313.jpg',
        'https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-23hobu7d7oof0m1e9js6d59aq0-20160511010345.Medi.jpeg',
        'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/1200px-Dabur_Logo.svg.png'
      ]
      }
  }
  render(){
    return(
      <div>
        <NavBar navBarLogo = {this.state.navBarLogo} navBar = {this.state.navBar} ></NavBar>
        <Carousel carousel = {this.state.carouselSlides} ></Carousel>
        <div>
          <div className="container-fluid" style={{backgroundColor:"#E9E9E9"}}>
            <div className="row justify-content-center">
            <div className="col-7">
              <NewsEvents newsEvents = {this.state.newsEvents}></NewsEvents>
            </div>
            <div className="col-3">
              <Announcements announcements={this.state.announcements}></Announcements>
            </div>
            </div>
          </div>
          <div className='container-fluid' style={{backgroundColor:"#1D8E83"}}>
              <TechCultEvents techCultEvents={this.state.techCultEvents}></TechCultEvents>
            </div>
        </div>
        <TopRecruiters topRecruiters={this.state.topRecruiters}></TopRecruiters>
        <div className='container-fluid' style={{backgroundColor:"#404040",padding:'10px'}} >
        <ContactUs></ContactUs>
        </div>
        <div className='container-fluid' style={{backgroundColor:"#707070",padding:'5px'}}>
        <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App;
