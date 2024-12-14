import { useState } from 'react';
import Bluesky from '../assets/bluesky.svg';
import Github from '../assets/github.svg';
import Instagram from '../assets/instagram.svg';
import Threads from '../assets/threads.svg';
import Youtube from '../assets/youtube.svg';

const Links = () => {
    const [links] = useState([
        Bluesky,
        Github,
        Instagram,
        Threads,
        Youtube
    ]);

    return (
        <div className="links">
            {links.map((link, index) => (
                <div className="link" key={index}>
                    <img src={link} id={`link${index}`} alt={`Social media link ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default Links;