import React, { useContext } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../store/Context";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/login");
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  console.log('user',user)

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <div className="placeSearchArrow">
            <Arrow></Arrow>
          </div>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>

        <div style={{ marginTop: '10px',marginLeft: '15px' }} className="language">
        {user && (
        <>
          <span>{`Welcome ${user.displayName}`}</span>
          <hr />
        </>
      )}
          {/* <Arrow></Arrow> */}
        </div>


    {/* <div> */}
      {/* {user && (
        <>
          <span>{user.displayName}</span>
          <hr />
        </>
      )}
    </div> */}




        { user ? (
        <div className="loginPage">
          <span onClick={handleLogout}>Logout</span>
          <hr />
        </div>
        
      ) : (
        <div className="loginPage">
          <span onClick={handleLogin}> {'Login'}</span>
          <hr />
        </div>
      )}
        
        
        
        <div className="sellMenu" onClick={() => navigate("/create")}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
