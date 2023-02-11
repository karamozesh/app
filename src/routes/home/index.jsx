import { Link } from 'react-router-dom';
import heroImage from '../../asset/images/hero_image.svg';
import Button from '../../components/UI/Button';

import roadDashed from '../../asset/images/road-dashed.svg';
import roadCircleImage from '../../asset/images/road-circle_image.svg';
import roadSite from '../../asset/images/road-site_image.svg';

export default function Home() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center min-h-[60vh] p-4 shadow-lg md:flex-row z-10">
        <div className="w-[100%] h-1/2 md:h-full md:w-1/2">
          <img
            src={heroImage}
            className="h-full"
          />
        </div>
        <div className="flex flex-col justify-center  w-full my-4 md:text-center md:items-center md:w-[45%]">
          <h1 className="text-4xl md:text-8xl">
            آموزشیار
          </h1>
          <p className="my-2">
            بستری برای خودشناسی ، یادگیری ، آموزش
            و به اشتراک گذاشتن رزومه و تجربیتتون
            با دیگران :)
          </p>
          <Button className="inline w-fit px-8 shadow-lg">
            <Link to="/self-knowledge">
              خودشناسی
            </Link>
          </Button>
        </div>
        <div className="w-[5%]"></div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="w-[30%] md:-translate-y-24">
            <img
              src={roadDashed}
              alt=""
              className="w-full"
            />
          </div>
          <div
            className="w-fit h-fit p-2 ml-2 bg-[#CFDFFF]"
            style={{
              borderRadius: '0 0 19px 19px',
            }}
          >
            <img src={roadCircleImage} alt="" />
          </div>
        </div>
        <div className="mb-[20vh] md:mb-[40vh]">
          <img src={roadSite} alt="" />
        </div>
      </div>
    </div>
  );
}

const homeLoader = () => {
  return null;
};

export { homeLoader };
