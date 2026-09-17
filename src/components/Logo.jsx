import logo from '../assets/images/logoA.png';

const Logo = ({ dark = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Aços Copec"
        className={`logo-image h-9 w-9 transition-transform duration-300 hover:scale-110 ${dark ? 'filter-invert' : ''}`}
      />
      <span className="logo-text text-3xl font-display font-bold tracking-tight bg-gradient-to-r from-[#EA9900] to-[#f7a905] bg-clip-text text-transparent">
        Aços Copec
      </span>
    </div>
  );
};

export default Logo;
