import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  activeLink: string;
  setActiveLink: Function;
  name: string;
  route: string;
}> = ({ activeLink, name, route, setActiveLink }) => {
  return activeLink !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveLink(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveLink('About');
    if (pathname === '/projects') setActiveLink('Projects');
    if (pathname === '/resume') setActiveLink('Resume');
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green md:text-2xl text-xl border-green border-b-4">
        {activeLink}
      </span>
      <div className="flex space-x-5  text-lg">
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          name="About"
          route="/"
        />
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          name="Resume"
          route="/resume"
        />
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
