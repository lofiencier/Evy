import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const req = require.context('./', true, /story\.js$/);

const stories = storiesOf('Example', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)

req.keys().forEach(key=>{
    const { readme,component,name}=req(key);
    stories.add(name,withReadme(readme,component));
});



