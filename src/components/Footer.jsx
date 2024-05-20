import { Bug, KeyRound, MapPin } from "lucide-react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { navItems } from "../constants";

const Footer = () => {
  const address = "2240 Mannheim Rd, Melrose Park, IL, 60164";
  const mapsLink = "https://maps.app.goo.gl/CWsCpqBNpBhndztx7"; // lakes auto google page

  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {/* dealer info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Lakes Auto Sales</h2>
          <p className="text-sm">{address}</p>
          <p className="text-sm">Phone: (847) 370-2940</p>
        </div>

        {/* routes */}
        <ul className="flex space-x-4 text-sm mb-4 md:mb-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* icons */}
        <div className="flex space-x-4">
          <a
            href={mapsLink}
            aria-label="Location on Google Maps"
            data-tooltip-id="mapsTip"
            data-tooltip-content="Location on Google Maps"
          >
            <MapPin className="hover:text-green-500" />
          </a>
          <ReactTooltip id="mapsTip" place="top" effect="solid" />

          <a
            href=""
            aria-label="Login"
            data-tooltip-id="loginTip"
            data-tooltip-content="Login"
          >
            <KeyRound className="hover:text-blue-500" />
          </a>
          <ReactTooltip id="loginTip" place="top" effect="solid" />

          <a
            href=""
            aria-label="Report a bug"
            data-tooltip-id="bugTip"
            data-tooltip-content="Report a bug"
          >
            <Bug className="hover:text-red-500" />
          </a>
          <ReactTooltip id="bugTip" place="top" effect="solid" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
