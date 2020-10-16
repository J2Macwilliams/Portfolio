import React from 'react'
import { Route, Switch, useRouteMatch, NavLink } from 'react-router-dom';
import FullStack from './FullStack'
import FrontEnd from './FrontEnd'

import {
  Flex,
  Box,
} from '@chakra-ui/core';
import '../../App.css';

const Index = () => {
  let { path, url } = useRouteMatch();
  return (
    <Box
    marginTop={['25%','25%', '25%', 0]}
    >
      <Flex justify='center' >
        <Box 
        width={['','' ,'' ,'30%']}
        marginBottom={['','','','2%']}
        >
          <Flex className='pflex' justify='space-between' alignItems='center'>
          <NavLink
            className='navLink2'
            activeClassName='activeNavButton'
            exact
            to={`${url}`}
          >
            Full-Stack
				</NavLink>
          <NavLink
            className='navLink2'
            activeClassName='activeNavButton'
            exact
            to={`${url}/frontEnd`}
          >
            Front-End
				</NavLink>
        </Flex>
        </Box>
      </Flex>
      <Switch>
        
        <Route exact path={`${path}`}>
          <FullStack />
        </Route>
        <Route path={`${path}/frontEnd`}>
          <FrontEnd />
        </Route>
      </Switch>
    </Box>
  )
}

export default Index
