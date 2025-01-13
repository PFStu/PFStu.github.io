'use client'
import React from 'react';

export const Projects: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-16" id="projects">
            <div className="container mx-auto px-4 md:px-8">
                <h2 id="projects-title" className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Our Projects
                </h2>
                <div className="space-y-8">
                    <section id="pfdocs" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfdocs-title" className="text-2xl font-semibold mb-2">
                                PF文档中心
                            </h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            一个在线文档中心，分享许多有用的知识及Bilibili视频，持续更新。
                        </p>
                        <a href="https://pfstu.ct.ws/docs" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300">
                            进入PF文档中心
                        </a>
                    </section>
                    <section id="pfchat" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfchat-title" className="text-2xl font-semibold mb-2">
                                PF聊天房
                            </h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            一个基于Web的聊天室，支持多人聊天、图片分享以及更多功能。
                        </p>
                        <a href="https://pfstu.ct.ws/chat/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300">
                            进入PF聊天房
                        </a>
                    </section>
                    <section id="pfbilidownloader" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfbilidownloader-title" className="text-2xl font-semibold mb-2">
                                PFB站视频下载工具
                            </h3>
                        </div>
                        <a href="https://pfstu.ct.ws/bvd/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300">
                            进入PF B站视频下载工具详情页
                        </a>
                    </section>
                    <section id="pfmedia-addon" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfmedia-addon-title" className="text-2xl font-semibold mb-2">
                                PFMedia Addon
                            </h3>
                        </div>
                        <p id="pfmedia-addon-more" className="text-lg text-gray-300 leading-relaxed">
                            一个小小的浏览器插件，用于捕获网页中的媒体并下载。
                        </p>
                        <a href="files/addon.zip" download className="text-lg font-semibold hover:text-gray-200 transition-all duration-300">
                            直接下载
                        </a>
                    </section>
                    <section id="softs" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="softs-title" className="text-2xl font-semibold mb-2">
                                PF软件集
                            </h3>
                        </div>
                        <a href="pfsoft/index.html" id="softs-link" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            进入PF软件集详情页
                        </a>
                    </section>
                    <section id="pfsources" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfsources-title" className="text-2xl font-semibold mb-2">
                                PF资源库
                            </h3>
                        </div>
                        <a href="pfsources/index.html" id="pfsources-link" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            进入PF资源库详情页
                        </a>
                    </section>
                    <section id="win8" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="win8-title" className="text-2xl font-semibold mb-2">
                                Windows 8
                            </h3>
                        </div>
                        <a href="https://wwdr.lanzoum.com/b04f0t63i" id="win8-link" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            Download(密码:win8)
                        </a>
                    </section>
                    <section id="win10horror" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="win10-horror-title" className="text-2xl font-semibold mb-2">
                                Win10 Horror
                            </h3>
                        </div>
                        <p id="win10-horror-tips" className="text-lg text-gray-300 leading-relaxed">
                            该内容可能引人不适，请谨慎下载。
                        </p>
                        <a href="https://wwp.lanzouu.com/b03xaoxva" id="win10-horror-link" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            Download(密码:31si)
                        </a>
                    </section>
                    <section id="PixelPE" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pixelpe-title" className="text-2xl font-semibold mb-2">
                                PixelPE
                            </h3>
                        </div>
                        <p id="pixelpe-more" className="text-lg text-gray-300 leading-relaxed">
                            基于LightnPE,适用于UEFI,BIOS的强大PE维护工具。
                        </p>
                        <a href="/pe/" id="link-pixelpe" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            进入PixelPE详情页
                        </a>
                    </section>
                    <section id="Tools" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="tools-title" className="text-2xl font-semibold mb-2">
                                PF小工具 by 一百1000000
                            </h3>
                        </div>
                        <a href="/pftools/pftools" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            进入PF简易工具箱
                        </a>
                    </section>
                    <section id="PFWindows" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfwindows-title" className="text-2xl font-semibold mb-2">
                                PF Windows
                            </h3>
                        </div>
                        <p id="pfwindows-tips" className="text-lg text-gray-300 leading-relaxed">
                            各种个性化强劲修改版Windows。
                        </p>
                        <a href="pfwins/pfwindows.html" id="pfwindows-link" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            进入PF Windows介绍页
                        </a>
                    </section>
                    <section id="PFWebGame" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfwebgame-title" className="text-2xl font-semibold mb-2">
                                PixelForge WebGame
                            </h3>
                        </div>
                        <p id="pfwebgame-tips" className="text-lg text-gray-300 leading-relaxed">
                            想休息一下？不妨来玩<br/>PixelForge WebGame。
                        </p>
                        <a href="../PixelForge在线游戏/Index.html" id="pfwebgame-link" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            进入PixelForge WebGame
                        </a>
                    </section>
                    <section id="PFencodeTools" className="project-card bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                        <div className="titlebox">
                            <h3 id="pfencode-title" className="text-2xl font-semibold mb-2">
                                PF 加密/编码工具箱
                            </h3>
                        </div>
                        <p id="pfencode-more" className="text-lg text-gray-300 leading-relaxed">
                            支持十多种常用加密和编码协议，支持解密。
                        </p>
                        <a href="https://github.com/PFStu/pf-encoder" id="link-pfencode-repo" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            Github Repository
                        </a>
                        <a href="https://wwdr.lanzouv.com/iLB2C2937qle" id="link-pfencode-download" className="text-lg font-semibold hover:text-gray-200 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            Download(密码:di9q)
                        </a>
                    </section>
                </div>
            </div>
        </section>
    );
};
