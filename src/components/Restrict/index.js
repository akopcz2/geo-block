import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import App from '../../App';
import { Error , Header, Loader } from '../index';

import { blockList }  from '../../blocklist';

const Restrict = (props) => {
  const [blocked , setBlock ] = useState(true);
  const [isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const { ip, country } = response.data;
        if(country.toLowerCase() === blockList.country || ip === blockList.ip ){
          setBlock(true);
          setIsLoading(false);
        } else {
          setBlock(false)
          setIsLoading(false);
        }
      } catch (e) {
      }
    };
    fetchData();
  }, []);

  return(      
    <Fragment>    
      {!isLoading ? (
        (!blocked ? (
          <Fragment>
            <Header/>
            <App/>
          </Fragment>
        ): (
            <Error/>
        ))
      ): (
      <Loader/>
      )}
    </Fragment>
  )
}
export default Restrict;
