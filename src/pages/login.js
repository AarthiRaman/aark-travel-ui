import React from 'react';
import Hero from 'grommet/components/Hero';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';



export default function() {
    return <div>
    
    <App>
        

<Hero background={<Image src='/img/carousel-1.png'
  fit='cover'
  full={true} />}
  backgroundColorIndex='dark'>
  <Box direction='row'
    justify='center'
    align='center'>
    <Box basis='1/2'
      align='end'
      pad='medium' />
    <Box basis='1/2'
      align='start'
      pad='medium'>
      <Heading margin='none'>
        Sample Heading
      </Heading>
    </Box>
  </Box>
</Hero>
    </App>
    </div>
}