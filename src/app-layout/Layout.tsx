import { Layout } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router';
import HeaderComponent from './Header';
import { Github, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

const { Header, Content, Footer } = Layout;

// Keep in sync with the token comment in Header.jsx
const PAPER = '#EEF0F3';

const AppLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home');
        }
    }, []);

    return (
        <Layout style={{ minHeight: '100vh', background: PAPER, fontFamily: "'Inter', sans-serif" }}>
            <Header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 64,
                    padding: 0,
                    zIndex: 1000,
                    background: 'transparent',
                    lineHeight: 'normal',
                }}
            >
                <HeaderComponent />
            </Header>
            <Content
                style={{
                    paddingTop: 64,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    background: PAPER,
                    minHeight: 0,
                }}
            >
                <Outlet />
            </Content>
            <Footer style={{ padding: 0, background: '#FFFFFF', borderTop: '1px solid #C9CFD8' }}>
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center items-center gap-4">
                    <span
                        className="text-sm text-[#5B6472]"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                        Indrasish Banerjee © {new Date().getFullYear()}
                    </span>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/BanerjeeIndrasish"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5B6472] hover:text-[#C6772E] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6772E]"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/indrasish-banerjee-a61225191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5B6472] hover:text-[#C6772E] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6772E]"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
};

export default AppLayout;