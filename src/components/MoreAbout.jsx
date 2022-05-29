import React from "react";
import {Box, Heading, Link, List, ListItem} from "@chakra-ui/react";
import about from "../constants/about";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const MoreAbout = () => {
    return <Box py={[10, 40]} px={[4, 20]} textAlign={'right'}>
        <Heading size={['md', '4xl']} mb={[4, 10]}>
            More About Me
        </Heading>
        <List>
            <ListItem>
                <Link href={about.links.linkedin} isExternal fontSize={['sm', '4rem']}>
                    LinkedIn <ExternalLinkIcon mx='2px'/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href={about.links.github} isExternal fontSize={['sm', '4rem']}>
                    Github <ExternalLinkIcon mx='2px'/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href={about.links.instagram} isExternal fontSize={['sm', '4rem']}>
                    Instagram <ExternalLinkIcon mx='2px'/>
                </Link>
            </ListItem>
        </List>
    </Box>
}

export default MoreAbout;