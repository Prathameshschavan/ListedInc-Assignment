import React from 'react'
import {Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  
  } from "chart.js"
import {Bar,Line,Pie} from "react-chartjs-2"
ChartJs.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend,PointElement,LineElement, ArcElement
)

const Dashboard = () => {

   const UserData = [
    {
      id: 1,
      year: "Week 1",
      userGain: 410,
      userLost: 400,
    },
    {
      id: 2,
      year: "Week 2",
      userGain: 150,
      userLost: 200,
    },
    {
      id: 3,
      year: "Week 3",
      userGain: 450,
      userLost: 300,
    },
    {
      id: 4,
      year: "Week 4",
      userGain: 160,
      userLost: 450,
    },
   
  ];
  const data = {
    labels: UserData.map(user=>user.year),
    datasets: [
      {
        label: "Guest",
        data: UserData.map(user=>user.userGain),
        backgroundColor:"coral",
        borderColor:"coral",
        borderWidth:2,
        tension: 0.4,
        pointStyle:"circle",
        width:"100%",
      },

      {
        label: "User",
        data: UserData.map(user=>user.userLost),
        backgroundColor:"aqua",
        borderColor:"#9BDD7C",
        borderWidth:2,
        tension: 0.4
      }
    ]
  }


  let dashboardArray = [
    {
      icon : "fa-money-check-dollar",
      text : "Total Revenues",
      amount : "$2,129,430",
      background :"#DDEFE0"
    },
    {
      icon : "fa-tags",
      text : "Total Transactions",
      amount : "1,520",
      background :"#F4ECDD"
    },
    {
      icon : "fa-thumbs-up",
      text : "Total Likes",
      amount : "9,721",
      background :"#EFDADA"
    },
    {
      icon : "fa-users",
      text : "Total Users",
      amount : "892",
      background :"#DEE0EF"
    },
  ]

  const options = {}

  const pieData = {
    labels: [
      // 'Basic Tees',
      // 'Custom Short Pants',
      // 'Super Hoodies'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#98D89E',
        '#EE8484',
        '#F6DC7D'
      ],
      hoverOffset: 9
    }]
  };


 const colorArr = [
    {
      text:"Basic Tees",
      color:'#98D89E'
    },
    {
      text:'Custom Short Pants',
      color:'#EE8484'
    },
    {
      text:"Super Hoodies",
      color:'#F6DC7D'
    },
  ]
  return (
    
    <>
       <div style={{padding:"2% 2%", display:"flex",background:"#DDDDDD"}}>
       <div style={{width:"296px",height:"944px",position:"relative", background:"#000", borderRadius:"30px", color:"#fff",textAlign:"left",padding:"2% 0 2% 5%"}}>
              <h1>Board.</h1>
               <div id='side-menu-options'>
                  <div>
                      <i class="fa-solid fa-chart-pie"></i>
                      <p>Dashboard</p>
                  </div>
                  <div>
                      <i class="fa-solid fa-tags"></i>
                      <p>Transactions</p>
                  </div>
                  <div>
                     <i class="fa-solid fa-calendar-days"></i>
                     <p>Schedules</p>
                  </div>
                  <div>
                    <i class="fa-regular fa-circle-user"></i>
                    <p>Users</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-gear"></i>
                    <p>Settings</p>
                  </div>
               </div>
               <div style={{color:"#fff", fontSize:"10px",position:"absolute", bottom:"5%"}}>
                  <p>Help</p>
                  <p>Contact Us</p>
               </div>
       </div>


       <div style={{width:"93%", padding:"0 0 0 2%", marginRight:"2%", display:"flex", flexDirection:"column", gap:"4%"}}>
        <div style={{display:"flex",alignItems:"center",height:"60px",justifyContent:"space-between",width:"100%"}}>
          <h2>Dashboard</h2>
          <div style={{display:"flex",alignItems:"center",gap:"10%",width:"25%"}}>
            <div>
              <input type="text" name="" id="searchbar" placeholder='Search' />
              <i style={{display:"absolute",marginLeft:"-15%",fontSize:"5.66px",color:"gray",cursor:"pointer"}} class="fa-solid fa-magnifying-glass"></i>
            </div>
            
              <i style={{width:"18px", height:"20px"}} class="fa-regular fa-bell"></i>
              <i style={{fontSize:"30px"}} class="fa-solid fa-circle-user"></i>
          </div>
        </div>
        <div style={{display:"flex", gap:"7%",marginBottom:"2%"}}>
        {
          dashboardArray.map((elem)=>{
            return( <div style={{width:"221.05px", height:"120px", borderRadius:"20px", background:`${elem.background}`,lineHeight:"0.5"}}>
                      <i style={{margin:"8% 0 0 70%", fontSize:"24px"}} class={`fa-solid ${elem.icon}`}></i>
                      <div style={{display:"flex", justifyContent:"space-between",flexDirection:"column", alignItems:"start",lineHeight:"0", marginLeft:"8%", marginTop:"0%"}}>
                        <p style={{fontSize:"14px", marginBottom:"8px"}}>{elem.text}</p>
                        <h2 style={{fontSize:"24px"}}>{elem.amount}</h2>
                      </div>                   
                    </div>)
          })
        }
        </div>

          <div style={{width:"1120px",height:"359px", background:"#fff", borderRadius:"20px",}}>
            <Line style={{ margin:"auto",height:"500px" }} data={data} options={options}/>
          </div>


          <div style={{display:"flex", gap:"5%", marginTop:"2%"}}>
            <div style={{display:"flex",width:"550px", height:"256px", background:"#fff", borderRadius:"20px"}}>
              <div style={{width:"35%", margin:"2% 5% 5% 5%", lineHeight:"0", textAlign:"left"}}>
                <h3>Top products</h3>
                 <Pie data={pieData} options={options}/>
              </div>
              <div>
                <p style={{fontSize:"14px", color:"gray", marginLeft:"60%", marginTop:"13%", width:"100%"}}>May-June 2021 <span><i class="fa-solid fa-chevron-down"></i></span></p>
                <div style={{marginTop:"10%",}}>
                  {
                    colorArr.map((elem)=>{
                      return (<div style={{width:"110%",display:"flex", alignItems:"center", gap:"2%"}}>
                              <i style={{color:`${elem.color}`}} class="fa-solid fa-circle"></i> <p>{elem.text}</p>
                              </div>)
                    })
                  }
                </div>
              </div>
             
              
            </div>
            <div style={{width:"550px", height:"256px", background:"#fff", borderRadius:"20px"}}>
               <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"0 5%"}}>
                <h3>Today's schedule</h3>
                <p style={{fontSize:"14px", color:"gray"}}>See All <span><i class="fa-solid fa-chevron-right"></i></span></p>
               </div>
               <div>
               <div style={{position:"relative", height:"180px"}}>
                 <div style={{textAlign:"left", position:"absolute",paddingLeft:"1%", top:"00%", left:"5%",  lineHeight:"0", borderLeft:"10px solid #9BDD7C"}}>
                      <h5 style={{color:"#666666"}}>Meeting with suppliers from Kuta Bali</h5>
                      <p style={{fontSize:"15px", color:"#999999"}}>14.00-15.00</p>
                      <p  style={{fontSize:"5px", color:"#999999"}}>at Sunset Road, Kuta, Bali </p>
                  </div>

                  <div style={{textAlign:"left", position:"absolute",paddingLeft:"1%", top:"50%",  left:"5%",lineHeight:"0", borderLeft:"10px solid #6972C3"}}>
                      <h5 style={{color:"#666666"}}>Check operation at Giga Factory 1</h5>
                      <p style={{fontSize:"15px", color:"#999999"}}>18.00-20.00</p>
                      <p  style={{fontSize:"5px", color:"#999999"}}>at Central Jakarta  </p>
                  </div>
              </div>
                  
                
                  
                  <div></div>
               </div>
            </div>
          </div>
       
       </div>
       


       
       

       </div>
    </>
  )
}

export default Dashboard
