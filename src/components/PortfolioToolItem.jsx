import React from "react";
import {Badge} from "@chakra-ui/react";

const PortfolioToolItem = ({tool}) => {
    return <Badge fontSize={['.5rem', '.6rem']}>
        {tool}
    </Badge>
}

export default PortfolioToolItem;