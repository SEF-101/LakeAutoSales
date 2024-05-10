// Footer.jsx
import { Facebook, Twitter, Instagram } from "lucide-react"; // Add other icons as needed

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        
        {/* dealer info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Lakes Auto Sales</h2>
          <p className="text-sm">1234 Car St., Cityville, State, ZIP</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* routes */}
        <ul className="flex space-x-4 text-sm mb-4 md:mb-0">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/inventory" className="hover:underline">Inventory</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook">
            <Facebook className="hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <Twitter className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <Instagram className="hover:text-pink-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
