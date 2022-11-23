import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

const DeleteById = props => {
   let history = useHistory();
    const location = useLocation();

    function handleBackEvent(){
      history.push('/');
      window.location.reload(false);
    }
    
    useEffect(()=>{
        // DELETE request using fetch with error handling
    fetch(`http://localhost:8080/recipes/${location.state}`, { method: 'DELETE' })
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        alert('Delete successful');
    })
    .catch(error => {
        //setErrorMessage(error);
        console.error('There was an error!', error);
    });
      },[location])

    return(
        <div>
            <h1>Deleted the recipe</h1>
            <Button onClick={handleBackEvent}>Logout</Button>
        </div>
        
    )
};

export default DeleteById;