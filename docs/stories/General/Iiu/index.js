import React from 'react';
import {text, boolean} from '@storybook/addon-knobs';
import Iiu from '@components/General/Iiu'
import readme from "./readme.md"

const name='Iiu'
console.log(Iiu.prototype.constructor.__docgenInfo)

const component = () => (<Iiu message={text("Message")} isArray={boolean("isArray")}/>)
export { readme,component,name }