import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import MobileNav from 'react-icons/lib/io/navicon-round';
import classNames from 'classnames';


document.addEventListener('DOMContentLoaded', function(){

//navigation display
    class NavContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                windowWidth: window.innerWidth,
                mobileNavVisible: false,
            };
        };

        handleResize(){
            this.setState({
                windowWidth: window.innerWidth,
            });
            console.log(this.windowWidth)
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount(){
            window.removeEventListener('resize', this.handleResize);
        }

        handleResize = () => {
            this.forceUpdate();
        };
        

        render() {
            return (
                <div className='nav_container'>
                    <div className="site_title">
                        <Link to="/">Web Title</Link>
                    </div>
                </div>
            );
        }
    }

    ReactDOM.render(
        <NavContainer />,
        document.getElementById('app')
    );
});