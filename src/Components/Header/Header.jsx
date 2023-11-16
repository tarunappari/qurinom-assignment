import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Account from "../Account/Account";



const Header = ({open,setOpen}) =>{

    let navigate = useNavigate();

    return(
        <HeaderContainer>
            <div>
                <h2 style={{color:'var(--white)'}}>TodoTrackr<span style={{color:'var(--blue)'}}>.</span></h2>
            </div>
            <div className="links">
                <div onClick={()=> navigate('/')}>Home</div>
                <Account open={open} setOpen={setOpen} />
            </div>
        </HeaderContainer>

    )
}

export default Header;

let HeaderContainer = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: var(--black);
    box-shadow: 5px 5px 10px rgba(3, 18, 41, 0.5);
    .drawer{
        display: none;
    }
    .links{
        display: flex;
        gap: 0.9rem;
        align-items: center;
        justify-content: center;
        color: var(--grey);
        font-weight: 600;
        font-size: 0.9rem;
        div:hover{
            color: var(--white);
            transition: all 0.3s;
            cursor: pointer;
        }
    }
`