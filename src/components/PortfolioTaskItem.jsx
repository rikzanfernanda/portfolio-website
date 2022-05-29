import React from "react";
import {ListIcon, ListItem} from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons";

const PortfolioTaskItem = ({task}) => {
    return <ListItem fontSize={['xs', 'md']}>
        <ListIcon as={CheckCircleIcon} color='green.400'/>
        {task}
    </ListItem>
}

export default PortfolioTaskItem;