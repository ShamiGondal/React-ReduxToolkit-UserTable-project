import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUser } from "../Store/Slice/UserSlice";

export const DeleteAllUser = () => {

    const dispatch = useDispatch();
    const clearAllUsers=()=>{
        dispatch(deleteUser())
    }
    
  return <Wrapper><button className="btn btn-delete " onClick={()=> clearAllUsers()}>DeleteAllUsers</button></Wrapper>;
};

const Wrapper = styled.section`

    button {
        margin-top : 15px;
        
    }
`