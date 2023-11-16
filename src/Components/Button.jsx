
import styled from "styled-components";




const Button = ({text, onClickFunc, outlined}) => {


    return(
        <ButtonContainer>
            <button className={ outlined ? 'outlined-btn button' : 'btn button'} onClick={()=> onClickFunc()} >{text}</button>
        </ButtonContainer>
    )
}

export default Button;

let ButtonContainer = styled.div`
    .outlined-btn{
        color: var(--white);
        background-color: var(--black);
        border: 2px solid var(--blue);
        border-radius: 3rem;
        min-width: 8rem;
        padding: 0.5rem 1.1rem;
        font-size:0.9rem;
        font-weight: 400;
    }

    .outlined-btn:hover{
        background-color: var(--blue);
        transition: all 0.3s;
        cursor: pointer;
        font-weight: 500;
    }

    .btn{
        color: var(--white);
        background-color: var(--blue);
        border: 2px solid var(--blue);
        border-radius: 3rem;
        min-width: 8rem;
        padding: 0.5rem 1.1rem;
        font-size:0.9rem;
        font-weight: 400;
    }

    .btn:hover{
        transition: all 0.3s;
        box-shadow: 5px 5px 10px rgba(58,128,233,0.5);
        cursor: pointer;
        font-weight: 500;
    }

    @media only screen and (max-width: 800px){
        .button{
        min-width: 7rem;
        padding: 0.5rem 0.9rem;
        font-size:0.9rem;
        font-weight: 400;
        }
    }
`