import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const req = require.context('./', true, /\.story\.js$/);
console.log(req.keys());
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};
let stories;
req.keys().map((key,index)=>{
    let pathKey=key.replace(/\.\/?/g,'').split('/');
    if(pathKey.length>=3){
        stories=storiesOf(pathKey[0],module);
    }else{
        stories=storiesOf("Wrong Directory",module);
    }
    const { readme,component,name}=req(key);
    // if(index==0){
        stories.addDecorator((story, context) => withInfo('')(story)(context))
        .addDecorator(storyWrapper)
        .addDecorator(withKnobs)
        .add(name,withReadme(readme,component));
    // }else{
    //     stories.add(name,withReadme(readme,component));
    // }
});




