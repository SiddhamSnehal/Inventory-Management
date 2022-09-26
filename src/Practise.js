import React,{useState} from 'react';
// import Background from "./MainPage/Background";
import background from "./MainPage/HomePage/Image/Fergusson.png";

  const Login = (props) => {
        const [email, setEmail] = useState("");
        const [id,setId] = useState("");
        const [password,setPassword] = useState("");

        const submit= (e)=>{
            e.preventDefault();
            if(!email || !id || !password){
                alert("Email,id or password cannot be blank!");
            }
            else{
              props.AddInfo(email,id,password)
              setEmail("");
              setId("");
              setPassword("");
          }
        }
    
        
    const myStyle={
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const containerStyle={
        margin: "auto",
        padding: "0 0",
        
    }
  return (
    <div className="container" Style={containerStyle}>
    <div className="row" Style={containerStyle}>
        <div className="col-3">
        <div className='container my-3'>
        <h3>Login</h3>
      <form onSubmit={submit} >
        <div className="mb-3">
            <input  placeholder="Enter your Email" type="text"  className="form-control" id="title"
            value={email} onChange={(e)=>setEmail(e.target.value)}  />
            
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter your ID"  className="form-control" id="title" value={id} onChange={(e)=>setId(e.target.value)} />
            
        </div>
        <div className="mb-3">
        <input  placeholder="Enter your Pasword"type="password"className="form-control" id="title" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-lg btn-primary">Login</button>
       </form>
    </div>
        </div>
        <div className="col-9" style={myStyle}>
          {/* <image src={background} alt="image"></image> */}
        </div>    
    </div>
    </div>
  )
}

export default Login;
