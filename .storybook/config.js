import {configure, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import {setOptions} from '@storybook/addon-options';
import pkg from "../package.json"
import './story.css'

setOptions({
  showDownPanel: false, name: `Evy v${pkg.version}`,
  // url: pkg.url,
  sidebarAnimations: true,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true
});
setDefaults({
  inline: true,
  header: false,
  source: true,
  styles: stylesheet => {
    stylesheet.infoBody = {
      infoBody: {
        padding: '10px'
      }
    };
    return stylesheet;
  },
  maxPropsIntoLine: 1
});
function loadStories() {
  require("../components/story")
}

setAddon(infoAddon);
configure(loadStories, module);
