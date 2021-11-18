
import './App.css';



 export default function App() {
  const data=[{
    access:"FREE",price:"$0/",sub:"month",user:"Single User",
    storage:"5GB Storage",projects:"Unlimited Public Projects",group:"Community Access",project:"Unlimited Private Projects",support:"Dedicated Phone Support",domain:"Free Subdomain",report:"Monthly Status Reports",
  },{
    access:"PLUS",price:"$9/",sub:"month",user:"5 Users",
    storage:"50GB Storage",projects:"Unlimited Public Projects",group:"Community Access",project:"Unlimited Private Projects",support:"Dedicated Phone Support",domain:"Free Subdomain",report:"Monthly Status Reports",
  },{
    access:"PRO",price:"$49/",sub:"month",user:"Unlimited Users",
    storage:"150GB Storage",projects:"Unlimited Public Projects",group:"Community Access",project:"Unlimited Private Projects",support:"Dedicated Phone Support",domain:"Unlimited Free Subdomain",report:"Monthly Status Reports",
  },
]
  return (
    <div className="App">
      {data.map((ur)=>(
      <Msg access={ur.access}
      price={ur.price}
  sub={ur.sub}
  user={ur.user}
  group={ur.group}
  storage={ur.storage}
  projects={ur.projects}
  project={ur.project}
  support={ur.support}
  domain={ur.domain}
  report={ur.report}/>
  ))}
  
  </div>
  );}

function Msg({access,price,sub,user,projects,group,project,storage,support,domain,report,}){
  
  return(
    
      <div className="container">
        <h1 className="access">{access}</h1>
        <h3 className="price">{price}
 <sub className="sub">{sub}</sub></h3>
 <hr></hr>
 <ul>
   <li className="check">{user}</li>
   <li  className="check">{storage}</li>
   <li className="check">{projects}</li>
   <li className="check">{group}</li>
 <li>{project}</li>
 <li>{support}</li>
 <li>{domain}</li>
 <li>{report}</li>
 </ul>
 <button className="button">BUTTON</button>
    </div>

  )
}
