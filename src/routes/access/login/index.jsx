import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBanner from '/src/images/Rectangle 504.png';
import '/src/index.css';

export default function Login() {
  const [status, setStatus] = useState(false);
  const [model, setModel] = useState(false);
  const toggleMode = () => {
    setModel(!model);
  };
  const navigate = useNavigate();
  return (
    <>
      <section className="mx-auto border max-w-[44rem] container lg:px-0 px-10 flex relative flex-row-reverse  mt-12 mb-12">
        <div
          className={`w-1/2 hidden lg:flex h-full overflow-hidden transition-all ease-in-out duration-1000 shadow-lg absolute top-0 ${
            status && 'translate-x-full'
          }`}
        >
          <figure className="h-full ">
            <img
              src={LoginBanner}
              alt=""
              className=" hidden md:flex h-full  "
            />
          </figure>

          <div
            className={`bg-[#F5AF2B] transition-all ease-in-out duration-1000 p-4 text-sm font-bold absolute  rounded-l-xl ${
              status && 'translate-x-full'
            }`}
          >
            <p
              className="cursor-pointer"
              onClick={() => setStatus(true)}
            >
              عضویت
            </p>
          </div>

          <div
            className={`bg-[#F5AF2B] p-4 text-sm font-bold absolute  transition-all ease-in-out duration-1000 left-0  align-right -translate-x-full  rounded-r-xl ${
              status && 'translate-x-0'
            }`}
          >
            <p
              className="cursor-pointer"
              onClick={() => setStatus(false)}
            >
              ورود
            </p>
          </div>
        </div>

        <div className="shadow-lg lg:w-1/2 w-full  lg:flex-col  hidden lg:flex text-right h-full ">
          <p className="bg-[#576BF0] text-white p-5 text-center text-lg font-bold">
            عضویت در کارآموزش
          </p>
          <div className="flex flex-col gap-3 p-5 px-14 ">
            <div className="flex justify-between gap-1 ">
              <div className=" flex flex-col gap-2 w-1/2 ">
                <label
                  htmlFor=""
                  className="text-bold text-xs"
                >
                  نام کاربری{' '}
                </label>
                <input
                  className="bg-[#ECEBEB] placeholder-gray-800 rounded-full px-2 p-2  text-[12px] text-right "
                  type="text"
                  placeholder="نام کاربری"
                />{' '}
              </div>
              <div className=" flex flex-col gap-2 w-1/2">
                <label
                  htmlFor=""
                  className="text-bold text-xs"
                >
                  شماره موبایل
                </label>
                <input
                  className="bg-[#ECEBEB] rounded-full px-2 p-2  placeholder-gray-800 text-[12px] text-right "
                  type="text"
                  placeholder="شماره موبایل"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                پست الکترونیک
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full text-[12px] px-2 text-left p-2 "
                type="text"
                placeholder="
     Info@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                گذرواژه{' '}
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full text-[12px] px-2 text-left p-2"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <button className="bg-[#F5AF2B] p-1 text-sm rounded-full">
                <a href="">عضویت</a>
              </button>
              <span className="flex">
                <p className="text-[13px]">
                  حساب کاربری دارید؟
                </p>
                <p
                  className="text-[#576BF0] font-bold cursor-pointer text-[13px]"
                  onClick={() => setStatus(false)}
                >
                  ورود به حساب کاربری
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="shadow-lg lg:w-1/2   w-full flex flex-col text-right ">
          <p className="bg-[#576BF0] text-white p-5 text-center text-lg font-bold">
            ورود به حساب کاربری
          </p>
          <div className="flex flex-col gap-5 p-6 px-16">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                پست الکترونیک
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full text-[12px] px-2 text-left p-2"
                type="text"
                placeholder="
Info@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                گذرواژه{' '}
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full  text-[12px] px-2 text-left p-2"
                type="password"
                placeholder="********"
              />
              <p
                href=""
                className="font-bold text-blue-600 text-[13px]"
                onClick={toggleMode}
              >
                رمز عبور خود را فراموش کرده اید؟
              </p>
            </div>
            <div className="flex flex-col gap-3  justify-between">
              <button className="bg-[#F5AF2B] p-1 rounded-full  text-sm">
                <a href="">ورود به سایت</a>
              </button>
              <span className="flex">
                <p className="text-[13px]">
                  حساب کاربری ندارید؟
                </p>
                <p
                  className="text-[#576BF0] font-bold cursor-pointer text-[13px]"
                  onClick={() => setStatus(true)}
                >
                  عضویت در اموزشیار .
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {model && (
        <section
          className=" fixed top-0 bottom-0 left-0 right-0 
     "
        >
          <div
            className="overlay fixed top-0 bottom-0 left-0 right-0 bg-black-700 opacity-50"
            onClick={toggleMode}
          ></div>
          <div className=" w-[27rem] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl">
            <h1 className="bg-[#576BF0] text-white p-5 text-center rounded-xl text-lg font-bold">
              بازیابی گذرواژه
            </h1>
            <div className="p-10 flex flex-col gap-5 ">
              <input
                type="text"
                className="p-2 rounded-full bg-slate-200  placeholder-gray-800"
                placeholder="پست الکترونیک "
              />
              <button className="bg-[#F5AF2B] p-2 rounded-full  text-sm">
                درخواست بازیابی گذرواژه
              </button>
              <span className="flex   ">
                <p className="text-[13px]">
                  ثبت نام نکرده اید؟
                </p>
                <p
                  className="text-[#576BF0] font-bold cursor-pointer text-[13px]"
                  onClick={() =>
                    navigate('/access/register')
                  }
                >
                  برای ثبت نام کلیک کنید
                </p>
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

const loginLoader = () => {
  return null;
};

export { loginLoader };
