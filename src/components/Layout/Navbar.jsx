import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      name: 'استعداد سنجی',
      href: '/talentSurvey',
    },
    {
      name: 'مهارت',
      href: '/skillHome',
    },
    {
      name: 'بانک رزومه',
      href: '/resumeBank',
    },
  ];

  const [showResumeMenu, setShowResumeMenu] =
    useState(false);

  return (
    <header className="h-[100px] flex justify-between items-center px-5">
      <div className="flex items-center">
        <h1 className="ml-4 text-2xl text-primaryColor">
          کارآموزش
        </h1>
        <nav>
          <ul className="flex">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={{ pathname: link.href }}
                  className="block w-[170px] py-2 ml-4 text-center text-sm rounded-3xl bg-primaryColor text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              {/* impelement create resume menu */}
              <div
                className="relative w-[170px] py-2 ml-4 text-center text-sm rounded-3xl bg-primaryColor text-white cursor-pointer"
                onClick={() =>
                  setShowResumeMenu(
                    (prev) => !prev,
                  )
                }
              >
                ساخت رزومه
                {showResumeMenu && (
                  <div className="absolute w-full top-full left-0 shadow-md text-xs bg-white rounded-md text-black-500">
                    <ul>
                      <li>
                        <Link
                          to="/resume/create"
                          className="block p-2 hover:bg-primaryColor/25"
                        >
                          آموزش رزومه نویسی
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resume/training"
                          className="block p-2 hover:bg-primaryColor/25"
                        >
                          ساخت رزومه
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-center w-[270px] h-[50px] rounded-3xl bg-gray-700 shadow-md">
        <Link className="flex justify-center items-center w-[100px] h-full text-black-900">
          ورود
        </Link>
        <Link className="flex justify-center items-center w-[170px] h-full bg-primaryColor text-white rounded-3xl">
          عضویت
        </Link>
      </div>
    </header>
  );
}
