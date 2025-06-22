'use client'
import React from 'react'
import { useTheme } from '../theme-provider'

const projects = [
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

export const Projects: React.FC = () => {
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'
  
  const bg = isDark ? 'bg-gray-900' : 'bg-gray-100'
  const cardBg = isDark ? 'bg-gray-800/90' : 'bg-white/80'
  const border = isDark ? 'border-gray-700' : 'border-gray-300'
  const text = isDark ? 'text-gray-100' : 'text-gray-900'
  const secondaryText = isDark ? 'text-gray-300' : 'text-gray-700'

  return (
    <section className={`${bg} py-16 px-4 transition-colors duration-300`} id="projects">
      <div className="container mx-auto">
        <h2 className={`text-2xl font-bold ${text} mb-8`}>Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`backdrop-blur-sm ${cardBg} rounded-lg ${border} p-6 hover:border-primary transition-all duration-300 group`}
            >
              <div className="flex items-center mb-4">
                <h3 className={`text-lg font-medium ${text} group-hover:text-primary`}>{project.name}</h3>
                {project.type && (
                  <span className={`ml-2 px-2 py-1 text-xs glass ${secondaryText} rounded-full`}>
                    {project.type}
                  </span>
                )}
              </div>
              <p className={`${secondaryText} mb-4`}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 text-sm font-medium bg-green-400 text-white rounded transition-all opacity-90 hover:opacity-100 hover:shadow-[0_0_25px_10px_rgba(74,222,128,0.8)] transform hover:scale-105 text-shadow-lg`}
                style={{textShadow: '0 0 5px rgba(0,0,0,0.3)'}}
              >
                {project.type === 'documentation' ? '查看文档' : 
                 project.type === 'tool' ? '使用工具' :
                 '查看项目'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
