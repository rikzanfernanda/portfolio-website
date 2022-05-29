import React from "react";
import {Badge} from "@chakra-ui/react";

const PortfolioToolItem = ({tool}) => {
    return <Badge fontSize={['.4rem', '.6rem']}>
        {tool}
    </Badge>
}

export default PortfolioToolItem;