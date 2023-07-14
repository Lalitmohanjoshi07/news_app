import { Link, useLocation } from "react-router-dom";


//wrapper function to add use effect hook functionmality
const ActiveStatus = (props) => {
  let x = useLocation();
  // console.log(x);
  return (
    <>
      <Link className= {`nav-link ${(x.pathname==='/')? 'active':''}`} aria-current="page" to="/">
        Home
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/business')? 'active':''}`}  aria-current="page" to="/business">
        Business
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/entertainment')? 'active':''}`}  aria-current="page" to="/entertainment">
        Entertainment
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/general')? 'active':''}`}  aria-current="page" to="/general">
        General
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/health')? 'active':''}`}  aria-current="page" to="/health">
        Health
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/science')? 'active':''}`}  aria-current="page" to="/science">
        Science
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/sports')? 'active':''}`}  aria-current="page" to="/sports">
        Sports
      </Link>
      <Link className= {`nav-link ${(x.pathname==='/technology')? 'active':''}`}  aria-current="page" to="/technology">
        Technology
      </Link>
    </>
  );
};

export default ActiveStatus;
