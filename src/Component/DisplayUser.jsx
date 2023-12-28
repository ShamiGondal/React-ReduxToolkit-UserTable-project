import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../Store/Slice/UserSlice";


function DisplayUser() {

    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.users
    })

    const deleteUser = (id)=>{
        dispatch(removeUser(id))
    }
    return (
        <Wrapper>
            {
                data.map((users, id)=>{
                    return <li key={id}>{users}<button className="btn btn-delete" onClick={()=> deleteUser(id)}>
                    Delete </button></li>
                })
            }
        </Wrapper>
    )
}

const Wrapper =  styled.section`
 li{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom : 0.5px solid black;
        
        &:first-child{
            border-top :1px solid #eee; 
        }
    }

`

   
export default DisplayUser;