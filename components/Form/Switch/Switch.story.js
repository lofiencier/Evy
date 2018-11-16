import React from 'react';
import {text} from '@storybook/addon-knobs';
import {} from '@storybook/addon-actions'
import Switch from './index'
import readme from "./readme.md"
import { action, configureActions } from '@storybook/addon-actions';

const name='Switch'

const component = () => (<div>
    <Switch size={text("size")} onChange={action('this.changeHandler')}/>
    <br/>
    <Switch size='md' onChange={action('this.changeHandler')}/>
    <br/>
    <Switch size='sm' onChange={action('this.changeHandler')}/>
</div>)
export { readme,component,name }