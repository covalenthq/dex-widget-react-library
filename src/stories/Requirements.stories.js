import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { Requirement } from '../components/Requirement';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

return (
<> 
<Requirement 
chain_id='250'
dex_name='spiritswap'
/> 

</>)
});