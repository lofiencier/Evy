import React from 'react';
import {text} from '@storybook/addon-knobs';
import {} from '@storybook/addon-actions'
import Switch from './index'
import readme from "./readme.md"
import { action, configureActions } from '@storybook/addon-actions';

const name='Region'

const component = () => (<Switch size={text("size")} onChange={action('this.changeHandler')}/>)
export { readme,component,name }