/* eslint-disable react/react-in-jsx-scope */
import githubIcon from '../../assets/githubIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';

const Footer = () => {
  return (
    <footer className="bg-footer text-white/80 w-full flex justify-around">
      <div className=" pt-2 flex flex-nowrap justify-center w-screen">
        <div className='w-1/2 flex justify-center'>
        <ul>
          <a href="https://github.com/JosephGros">
            <div className="flex flex-nowrap hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <img src={githubIcon} alt="github icon" />
              <div className="p-1">
                <li>Joseph</li>
              </div>
            </div>
          </a>
          <a href="https://github.com/LloydElery">
            <div className="flex flex-nowrap hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <img src={githubIcon} alt="github icon" />
              <div className="p-1">
                <li>Dennis</li>
              </div>
            </div>
          </a>
          <a href="https://github.com/lemonyblossom">
            <div className="flex flex-nowrap hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <img src={githubIcon} alt="github icon" />
              <div className="p-1">
                <li>Emma</li>
              </div>
            </div>
          </a>
          <a href="https://github.com/ClaraPrioux">
            <div className="flex flex-nowrap hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <img src={githubIcon} alt="github icon" className="" />
              <div className="p-1">
                <li>Clara</li>
              </div>
            </div>
          </a>
          <a href="https://github.com/AlexanderStrom21">
            <div className="flex flex-nowrap hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <img src={githubIcon} alt="github icon" />
              <div className="p-1">
                <li>Alexander</li>
              </div>
            </div>
          </a>
          <a href="https://github.com/Lolliten">
            <div className="flex flex-nowrap hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <img src={githubIcon} alt="github icon" />
              <div className="p-1">
                <li>Louise</li>
              </div>
            </div>
          </a>
        </ul>
        </div>
        <div className="border-r-4 flex justify-center p-2"></div>
        <div className=" ml-8 pt-10 w-1/2 flex justify-center">
          <ul>
            <li className="w-full font-semibold">MTG TOMB</li>
            <div className="hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg">
              <a href="https://github.com/chas-academy">
                <li>Chas Academy</li>
              </a>
            </div>
            <div className='hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg'>
            <a href="mailto: info@chasacademy.se">
              <img src={emailIcon} alt="email icon" />
            </a>
            </div>
          </ul>
      {/* Desktop screen */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
