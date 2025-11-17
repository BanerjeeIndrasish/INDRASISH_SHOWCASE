import { Layout } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router';
const { Header, Content, Footer } = Layout;
import HeaderComponent from './Header';
import { Github, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

const AppLayout = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        // console.log('Path', location.pathname)
        if(location.pathname === '/') {
            // Redirect to /home
            navigate('/home');
        }
    }, [])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    padding: 0,
                    zIndex: 1000,
                    background: 'transparent',
                }}>
                <HeaderComponent />
            </Header>
            <Content
                style={{
                    paddingTop: 64, // height of the fixed header
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    background: '#f5f5f5',
                    minHeight: 0, // ensures proper flex behavior
                    overflow: 'auto', // allows scroll inside content
                }}
            >
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center', padding: '10px' }}>
                <div className="w-full flex justify-center items-center gap-4">
                    {/* <span className="text-gray-500 text-sm">Connect:</span> */}
                    <span className="text-gray-500 text-md">INDRASISH BANERJEE ©{new Date().getFullYear()}</span>
                    <a
                        href="https://github.com/BanerjeeIndrasish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/indrasish-banerjee-a61225191"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </Footer>
        </Layout>
    );
};
export default AppLayout;