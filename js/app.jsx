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
                scrollPosition: window.scrollTop,
                windowPosition: window.pageYOffset,
                mobileNavVisible: false,
                navClasses: classNames({'nav_container':true, 'nav_pinch':false})
            };
        };

        navigationLinks = () => {
            return [
                <ul onClick={this.handleNavClick.bind(this)} key={0}>
                    <li key={1}><Link to="about">home</Link></li>
                    <li key={2}><Link to="link-01">link-01</Link></li>
                    <li key={3}><Link to="link-02">link-02</Link></li>
                    <li key={4}><Link to="link-03">link-03</Link></li>
                </ul>
            ];
        };

        handleResize = () => {
            this.setState({windowWidth: window.innerWidth});
        };

        handleScroll = () => {
            this.setState({windowPosition: window.pageYOffset});
            this.setState({scrollPosition: document.body.scrollTop});

            if(this.state.windowPosition >= 150) {
                this.setState({navClasses: classNames({'nav_container':true, 'nav_pinch':true})});
            } else {
                this.setState({navClasses: classNames({'nav_container':true, 'nav_pinch':false})});
            }
        };

        componentDidMount(){
            window.addEventListener('resize', this.handleResize.bind(this));
            window.addEventListener('scroll', this.handleScroll.bind(this));
        }

        componentWillUnmount(){
            window.removeEventListener('resize', this.handleResize.bind(this));
            window.removeEventListener('scroll', this.handleScroll.bind(this));
        }

        handleNavClick =() => {
            if(!this.state.mobileNavVisible) {
                this.setState({mobileNavVisible: true});
            } else {
                this.setState({mobileNavVisible: false});
            }
        };

        renderMobileNav =() => {
            if(this.state.mobileNavVisible) {
                return this.navigationLinks();
            }
        };

        renderNavigation =() => {
            if(this.state.windowWidth <= 770) {
                return [
                    <div key={1} className="mobile_nav">
                        <p onClick={this.handleNavClick.bind(this)}><MobileNav /></p>
                        {this.renderMobileNav()}
                    </div>
                ];
            } else {
                return [
                    <div key={102} className="nav_menu">
                        {this.navigationLinks()}
                    </div>
                ];
            }
        };

        render() {
            return (
                <div className={this.state.navClasses}>
                    <div id="navigation_bar">
                        {this.renderNavigation()}
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