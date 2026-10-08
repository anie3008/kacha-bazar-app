import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer flex flex-col sm:flex-row justify-between items-center bg-neutral text-neutral-content p-4">
  <aside>
    <p className='text-sm font-extralight'> কাঁচা বাজার — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
  </aside>
 
 <p className='text-sm font-extralight'>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
  
</footer>
        </div>
    );
};

export default Footer;