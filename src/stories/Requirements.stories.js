import { storiesOf } from '@storybook/react';
import './styles.css';
import { Widget } from '../components/Widget';

const stories = storiesOf('App Test', module);
const API_KEY =`${process.env.REACT_APP_API_KEY}`

stories.add('App', () => {

return (
<> 
<Widget 
chain_id='250'
dex_name='spiritswap'
api_key= {API_KEY}
bg_color='black'
text_color='white'
/> 
</>)
});