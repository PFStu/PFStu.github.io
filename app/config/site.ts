import { NavItem, SocialLink, Project } from '../types'

export const navItems: NavItem[] = [
  { name: 'Home', hash: '' },
  { name: 'About', hash: 'about' },
  { name: 'Projects', hash: 'projects' },
  { name: 'Contact', hash: 'contact' }
]

export const socialLinks: SocialLink[] = [
  { 
    name: 'GitHub',
    url: 'https://github.com',
    icon: null // Will be replaced with actual icon component
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: null
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: null
  },
  {
    name: 'Email',
    url: 'mailto:ch_bow@126.com',
    icon: null
  }
]

import { ContactMethod } from '../types'

export const contactMethods: ContactMethod[] = [
  {
    name: 'Email',
    value: 'ch_bow@126.com',
    icon: 'EmailIcon',
    action: () => window.open('mailto:ch_bow@126.com')
  },
  {
    name: 'GitHub',
    value: 'github.com/PFStu',
    icon: 'GitHubIcon',
    action: () => window.open('https://github.com/PFStu/')
  },
  {
    name: 'Skype',
    value: 'Join our group',
    icon: 'SkypeIcon',
    action: () => window.open('https://join.skype.com/qVWyvjpuOYeG')
  }
]

export const projects: Project[] = [
  {
    name: 'PF文档中心',
    type: 'documentation',
    description: '一个在线文档中心，分享许多有用的知识及Bilibili视频，持续更新。',
    link: 'https://pfstu.ct.ws/docs/'
  },
  {
    name: 'PF聊天房', 
    description: '一个基于Web的聊天室，支持多人聊天、图片分享以及更多功能。',
    link: 'https://pfstu.ct.ws/chat/'
  },
  {
    name: 'PFB站视频下载工具',
    type: 'tool',
    description: '支持B站视频下载的实用工具',
    link: 'https://pfstu.ct.ws/bvd/'
  },
  {
    name: 'PFMedia插件',
    type: 'extension',
    description: '浏览器插件，用于捕获网页媒体',
    link: 'files/addon.zip'
  },
  {
    name: 'PF软件集',
    type: 'UNSUPPORTED',
    description: '精选实用软件合集',
    link: 'pfsoft/index.html'
  },
  {
    name: 'PF资源库',
    type: 'UNSUPPORTED',
    description: '各种创意资源和素材',
    link: 'pfsources/index.html'
  },
  {
    name: 'Windows 8',
    type: 'os',
    description: '个性化Windows 8系统',
    link: 'https://wwdr.lanzoum.com/b04f0t63i'
  },
  {
    name: 'PixelPE',
    type: 'os',
    description: '基于Win11 Pro的强大PE维护工具',
    link: 'https://pfpe.infinityfreeapp.com/'
  },
  {
    name: 'PF小工具',
    type: 'tools',
    description: '一百1000000开发的实用小工具集',
    link: 'PFTools/PFTools.html'
  },
  {
    name: 'PF Windows',
    type: 'os',
    description: '各种个性化修改版Windows系统',
    link: 'pfwins/pfwindows.html'
  },
  {
    name: 'PixelForge WebGame',
    type: 'game',
    description: '在线小游戏集合',
    link: 'PixelForge在线游戏/Index.html'
  },
  {
    name: 'PF加密/编码工具箱',
    type: 'tool',
    description: '支持多种加密和编码协议的工具',
    link: 'https://github.com/PFStu/pf-encoder'
  },
  {
    name: 'PF Android Apps',
    type: 'app-resources',
    description: '适用于Android的应用资源',
    link: 'https://pfandroidapps.lovestoblog.com/'
  }
]
