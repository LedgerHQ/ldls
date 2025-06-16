import { Template } from '@svgr/babel-plugin-transform-svg-component';

const template: Template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
import createIcon from '../../Components/Icon/createIcon';

${variables.interfaces};

export const ${variables.componentName} = createIcon('${variables.componentName}', ${variables.jsx});
`;
};

module.exports = template;
