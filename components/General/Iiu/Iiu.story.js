import React from 'react';
import {text, boolean} from '@storybook/addon-knobs';
import XXX from './index'
import readme from "./readme.md"

const name='XXX'

const component = () => (<XXX message={text("message")} isArray={boolean("isArray")}/>)
export { readme,component,name }