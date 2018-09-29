import React from 'react';
import {text, boolean} from '@storybook/addon-knobs';
import Iiu from '@components/Iiu';
import readme from "./readme.md"

const name='123123'
const component = () => (<Iiu message={text("Message")} isArray={boolean("isArray")}/>)
export { readme,component,name }