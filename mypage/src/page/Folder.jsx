import React from 'react';
import SubHeader from './../component/SubHeader';
import Header from './../component/Header';
import './../css/folder.css'
import { AiFillGithub, AiFillFolderOpen, AiOutlineTag, AiOutlineBlock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoExitOutline, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineViewArray, MdViewArray } from "react-icons/md";

const Folder = () => {
  return (
    <div id='Folder'>
      <div id='body'>
          <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <SubHeader />
            <div className='folder-content'>
              <div className='folder-top'>
                <div className='folder-top-left'>
                <button type='button' className='folder-prev-btn'><GrFormPrevious size='24px' /></button>
                <button type='button' className='folder-next-btn'><GrFormNext size='24px' /></button>
                </div>
                <div className='folder-top-right'>
                  <button className='folder-top-img-box'><MdViewArray size='26px' fill='#eee' /> <MdOutlineViewArray size='26px' fill='#eee' /> <MdViewArray size='26px' fill='#eee' /> <MdOutlineViewArray size='26px' fill='#eee' /></button>
                  <button className='folder-top-icon'><AiOutlineBlock size='24px' fill='#333' /></button>
                  <button className='folder-top-icon'><IoSettingsSharp size='24px' fill='#333' /></button>
                  <button className='folder-top-icon'><IoExitOutline size='24px' /></button>
                  <button className='folder-top-icon'><AiOutlineTag size='24px' /></button>
                </div>
              </div>
              <div className='folder-bottom'>
                <div className='folder-bottom-left'>
                  <span>즐겨찾기</span>
                  <Link to='/' className='folder-bottom-left-btn'>
                    <img src="/img/icon/home.svg" alt="Home" className='folder-bottom-icon' />
                    <span>Home</span>
                  </Link>
                  <Link to='/profile' className='folder-bottom-left-btn'>
                    <img src="/img/icon/identify.svg" alt="Profile" className='folder-bottom-icon' />
                    <span>Profile</span>
                  </Link>
                  <Link to='/portfolio' className='folder-bottom-left-btn'>
                    <img src="/img/icon/edge.svg" alt="Portfolio" className='folder-bottom-icon' />
                    <span>Portfolio</span>
                  </Link>
                  <Link to='/storyboard' className='folder-bottom-left-btn'>
                    <img src="/img/icon/figma.svg" alt="StoryBoard" className='folder-bottom-icon' />
                    <span>StoryBoard</span>
                  </Link>
                  <Link to='/contact' className='folder-bottom-left-btn'>
                    <img src="/img/icon/contact.svg" alt="Contact" className='folder-bottom-icon' />
                    <span>Contact</span>
                  </Link>
                  <a href='https://github.com/hanjeonga' className='folder-bottom-left-btn'>
                    <AiFillGithub size='20px' className='folder-bottom-icon' />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className='folder-bottom-right'>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더1</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더2</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더3</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더4</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더5</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더6</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더7</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더8</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더9</h6>
                  </div>
                  <div className='folder-bottom-right-icon'>
                    <AiFillFolderOpen fill='#88CFF6' size='100px' />
                    <h6>폴더10</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='bottom'>
          <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
        </div>
    </div>
  );
};

export default Folder;