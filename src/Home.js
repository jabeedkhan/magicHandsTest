import React, { Component } from 'react'

export class Home extends Component {
    render() {

        return (
            <div style={{ marginLeft: 10 ,padding:30}}>
                {/* <p>Home</p> */}
                {/* <img src="https://magichands.co/Admin/banner_images/2ed7c6fd699a999216fab790c5fdbef1.jpg"  title="winter sale offer" alt="winter sale offer" /> */}
                <img src="https://magichands.co/assets/final-css-index/images/Asset 21.png" title="Home Appliances Repaires Services" alt="Home Appliances Repaires Services" />
                <div class="top-right" style={{ position: 'absolute', top: 8, right: 100, backgroundColor: 'pink', width: 150, padding: 10, height: 40, borderRadius: 20 }}>
                            <a href="https://magichands.co/Welcome/homeaplliance?serviceid=2" >Book Now</a>

               </div>


               
            </div>

            // <div class="container" style={{ position: 'relative', textAlign: 'center', color: 'red' }}>
            //     <div className="row">
            //         <div style={{marginLeft:10}}>
            //             <img src="https://magichands.co/Admin/banner_images/2ed7c6fd699a999216fab790c5fdbef1.jpg" title="winter sale offer" alt="winter sale offer" style={{ width:"100%",height:"100%"}} />
            //             <div class="top-right" style={{ position: 'absolute', top: 8, right: 100, backgroundColor: 'pink', width: 150, padding: 10, height: 40, borderRadius: 20 }}>
            //                 <a href="https://magichands.co/Welcome/homeaplliance?serviceid=2" >Book Now</a>

            //             </div>

            //         </div>

            //     </div>

            // </div>



        )
    }
}



export default Home
