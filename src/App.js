import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Choose from './Choose';
import Parallax from './Parallax';
var email = "cdmi@gmail.com";
var name = "cdmi";
// var arr="{1,2,3,4,5,6,7,8,9}";
// var arr =[1,2,3,4,5,6,7,8,9]
// const cdmi=[
    
//       {name:"cdmi",email:"cdmi@gmail.com"},
//       {name:'cdmi1',email:"cdmi1@gmail.com"},
//       {name:'cdmi2',email:"cdmi2@gmail.com"},
//       {name:'cdmi3',email:"cdmi3@gmail.com"}
    
//   ]
  const image=[
    {
      imageurl:require('./images/1.jpg'),
      name:"development courses",
      icons:"⭐⭐⭐⭐⭐",
      btn:"know more"
    },  
    {
      imageurl:require('./images/1.jpg'),
      name:"design course",
      icons:"⭐⭐⭐⭐⭐",
      btn:"know more"
    }
    ,  
    {
      imageurl:require('./images/1.jpg'),
      name:"programming it",
      icons:"⭐⭐⭐⭐⭐",
      btn:"know more"
    }
    ,  
    {
      imageurl:require('./images/1.jpg'),
      name:" trendy courses",
      icons:"⭐⭐⭐⭐⭐",
      btn:"know more"
    }
    ,  
    {
      imageurl:require('./images/1.jpg'),
      name:"civil-mech engineering",
      icons:"⭐⭐⭐⭐⭐",
      btn:"know more"
    }
    ,  
    {
      imageurl:require('./images/1.jpg'),
      name:"business development",
      icons:"⭐⭐⭐⭐⭐",
      btn:"know more"
    }
  ]

  const choose=[
    {
      image:require('./images/2.png'),
      name1:"industry experts as trainer",
      para:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
    }
    ,
    {
      image:require('./images/2.png'),
      name1:"latest curriculum",
      para:"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
    }
    ,
    {
      image:require('./images/2.png'),
      name1:"latest technology",
      para:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
    }
    ,
    {
      image:require('./images/2.png'),
      name1:"interview assistance",
      para:"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
    }
    ,
    {
      image:require('./images/2.png'),
      name1:"free upgradation",
      para:"We will be provided free upgradation for any newer version of the course you have."
    }
    ,
    {
      image:require('./images/2.png'),
      name1:"lifetime support",
      para:"We will provide you lifetime support on all the courses you learned from us."
    }
  ]
  const parallax=[
    {
      image2:require('./images/3.png'),
      cnt:"8000+",
      name2:"happy students"
    }
    ,
    {
      image2:require('./images/4.png'),
      cnt:"10+",
      name2:"certification approval"
    }
    ,
    {
      image2:require('./images/5.png'),
      cnt:"60+",
      name2:"certified teachers"
    }
    ,
    {
      image2:require('./images/6.png'),
      cnt:"4000+",
      name2:"student placed"
    }
  ]
function App() {
  return (
    <>

      {/* <h1>{name}</h1>
      <h1>{email}</h1>
      <Home name={name}/>
      <ul>
        {
        arr.map((i) =>{
            return(
              <li>{i}</li>
            )
        })
      }
      </ul> */}

      {/* {
        image.map((item)=>{
          return(
            <Home                  
            email={item.email}
                  // imageurl={item.aktaw}
            />
          )
        })
      } */}
<div className="container">
      {
     image.map((item)=>
      {
        return(
          // <img src={item.imageurl} alt="" srcset="" />
          <Home imageurl={item.imageurl}
          name={item.name}
          icons={item.icons}
          btn={item.btn}
          />
        )
      })
}
{
  choose.map((item1)=>{
    return(
      <Choose
      image={item1.image}
      name1={item1.name1}
            para={item1.para}/>
      
    )
  })
}
     
</div>
<div className="bg">
  <div className="container">

{
  parallax.map((item2)=>{
    return(
      <Parallax
      image2={item2.image2}
      cnt={item2.cnt}
      name2={item2.name2}
      />
    )
  })
}
</div>
</div>
    </>
  );
}

export default App;
