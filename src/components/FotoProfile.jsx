import React from "react";
import {Image} from "@chakra-ui/react";

const FotoProfile = ({profile}) => {
    return <Image w={'100%'} src={profile} alt={'profile'} boxShadow={'base'} borderRadius={['md', 'xl']}/>
}

export default FotoProfile;