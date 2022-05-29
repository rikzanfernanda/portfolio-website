import React from "react";
import {Link, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const LinkListItem = ({link}) => {
    return <>
        {
            link !== '' &&
            <ListItem fontSize={['.65rem', 'md']}>
                <Link href={link} isExternal color={'blue.500'}>
                {link} <ExternalLinkIcon mx='2px'/>
            </Link>

            </ListItem>
        }
    </>
}

export default LinkListItem;