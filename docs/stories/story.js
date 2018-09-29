import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const req = require.context('./', true, /index\.js$/);

// const stories = storiesOf('Example', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};
let reg=/^\.\/(\w+)\/\w+\/\w+\.js$/
req.keys().map(key=>{
    let stories;
    if(reg.test(key)){
        stories=storiesOf(key.match(reg)[1],module);
    }else{
        stories=storiesOf("Wrong Directory",module);
    }
    const { readme,component,name}=req(key);
    stories.addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add(name,withReadme(readme,component));
});




