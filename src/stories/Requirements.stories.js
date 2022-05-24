import { storiesOf } from '@storybook/react';
import './styles.css';
import { Widget } from '../components/Widget';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

return (
<> 
<Widget 
chain_id='250'
dex_name='spiritswap'
api_key='ckey_4e73d56514984838ab3206fbaf4'
bg_color='#FFFFFF'
text_color='yellow'
/> 


</>)
});