/* eslint-disable @typescript-eslint/ban-types */
import { FunctionComponent } from 'react';
import { Category } from '../modules/type';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  return (
    <li
      className={`capitalize cursor-pointer hover:text-green ${
        active === value ? 'text-green' : 'text-white'
      }`}
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="firebase" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
