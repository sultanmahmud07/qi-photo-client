import React from 'react';
import Icon from '../../Assat/photos/icon.png';

const Footer = () => {
  return (
    <div className='h-color'>
      <footer className="footer common-w  py-10 footer-p-set">
        <div>
          <div>
            <img src={Icon} className='w-24' alt="" />
          </div>
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className='border-t text-center py-5'>
        <span className='text-center  text-white '>Copyright © 2022 Qi-Photo.com</span>
      </div>
    </div>
  );
};

export default Footer;