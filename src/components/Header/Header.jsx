import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "AboutUs", slug: "/AboutUs", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='50px' className='w-10 h-10 md:w-14 md:h-14' />
            </Link>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} className='text-white focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            </button>
          </div>
          <ul className={`flex-col md:flex-row md:flex ml-auto space-y-2 md:space-y-0 md:space-x-4 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full text-white md:inline-block md:px-6 md:py-2'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn className='block px-4 py-2 text-white md:inline-block md:px-6 md:py-2' />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
