import React from 'react'
import './CardHome.css'
import pic from '../../assets/expresscard1.png'
import pic2 from '../../assets/expresscard2.png'
import pic3 from '../../assets/expresscard3.png'
import pic4 from '../../assets/slider2.jpg'

const CardHome = () => {
  return (
    <div className='container'>
        <div className='row'>
        <h4 className='textcardhome mt-3'>
        business hall
        </h4>
        </div>
        <div className='row cardsdivcardhomefullrow'>
        <div className='col-lg-4 col-md-6 col-sm-6 '>
      <div className='cardsdivcardhomediv'>

        <div className='cardsdivcardhome'>
        <div className='cardsdivcardhomeimgdiv'>

        <img src={pic} style={{height:'50px',width:'70px'}}/>
            </div>
        <hr/>
        <span>enter limit: 0</span>
        <br/>
        <span>level limit: vip 1</span>
        <br/>
        <span>daily order: 50</span>
        <br/>
        <span> Commission: 0.42%</span>

        </div>
      </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 '>
      <div className='cardsdivcardhomediv'>

        <div className='cardsdivcardhome'>
        <div className='cardsdivcardhomeimgdiv'>

        <img src={pic2} style={{height:'50px',width:'70px'}}/>
            </div>
        <hr/>
        <span>enter limit: 0</span>
        <br/>
        <span>level limit: vip 1</span>
        <br/>
        <span>daily order: 50</span>
        <br/>
        <span> Commission: 0.48%</span>

        </div>
      </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 '>
      <div className='cardsdivcardhomediv'>

        <div className='cardsdivcardhome'>
            <div className='cardsdivcardhomeimgdiv'>

            </div>
        <img src={pic3} style={{height:'50px',width:'70px'}}/>
        <hr/>
        <span>enter limit: 0</span>
        <br/>
        <span>level limit: vip 1</span>
        <br/>
        <span>daily order: 55</span>
        <br/>
        <span> Commission: 0.60%</span>

        </div>
      </div>
        </div>
 </div>
    <div className='row mt-3 marqueeupertextcardhome'>
        <h4>User Commission Notifications</h4>
    </div>

 <div className='row mt-3'>
 <marquee width="40%" direction="up" height="180px">
    <div className='marqueedivcardhome'>
    <img src={pic4} style={{width:'40px',height:'40',borderRadius:'50%'}}/>
<h5>
Congratulation this is amazing
</h5>
    </div>
    <div className='marqueedivcardhome'>
    <img src={pic4} style={{width:'40px',height:'40',borderRadius:'50%'}}/>
<h5>
Congratulation this is amazing
</h5>
    </div>
    <div className='marqueedivcardhome'>
    <img src={pic4} style={{width:'40px',height:'40',borderRadius:'50%'}}/>
<h5>
Congratulation this is amazing
</h5>
    </div>
</marquee>
 </div>

    </div>
  )
}

export default CardHome