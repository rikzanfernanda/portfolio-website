import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const NoPage = () => {
    let navigate = useNavigate();

    useEffect(() => {
        navigate('/', {replace: true});
    }, [navigate])
    return <></>
}

export default NoPage;