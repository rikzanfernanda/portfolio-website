import React from "react";
import {Box, Heading, HStack, List, Text} from "@chakra-ui/react";
import PortfolioTaskItem from "./PortfolioTaskItem";
import PortfolioToolItem from "./PortfolioToolItem";
import LinkListItem from "./LinkListItem";

const PortfolioCardBody = ({description, sourceCode, link, tools, tasks}) => {
    return <Box px={[2, 4]} py={[2, 3]}>
        <Text fontSize={['xs', 'md']}>
            {description}
        </Text>
        <Box my={[1]}>
            <Heading fontSize={['xs', 'md']}>
                Contributions:
            </Heading>
            <List>
                {
                    tasks.map((task, index) => {
                        return <PortfolioTaskItem task={task} key={index} />
                    })
                }
            </List>
        </Box>
        <HStack spacing={[1, 2]} mt={[3, 6]}>
            {
                tools.map((tool, idx) => {
                    return <PortfolioToolItem tool={tool} key={idx} />
                })
            }
        </HStack>
        <Box mt={[1]}>
            <List>
                <LinkListItem link={link} />
                <LinkListItem link={sourceCode} />
            </List>
        </Box>
    </Box>
}

export default PortfolioCardBody;