import React from "react";
import Nav from "react-bootstrap/Nav";
import 'material-design-icons/iconfont/material-icons.css';
import { Icon } from "./Icon";

export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            navItems: [
                {
                    title: "Home",
                    icon: "home",
                    href: "#home",
                    key: 1,
                },
                {
                    title: "Pricing",
                    icon: "attach_money",
                    href: "#pricing",
                    key: 2,
                },
                {
                    title: "Examples",
                    icon: "visibility",
                    href: "#examples",
                    key: 3,
                },
                {
                    title: "Community",
                    icon: "group",
                    href: "#community",
                    key: 4,
                },
                {
                    title: "Contact",
                    icon: "email",
                    href: "#contacts",
                    key: 5,
                },
            ]
        }
    }
    
    render() {
        return (
            <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebarMenu">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        {this.state.navItems.map((item, id) => {
                            return (
                                <Nav.Item key={item.key}>
                                    <Nav.Link href={item.href}>
                                        <Icon type={item.icon} /> {item.title}
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                    </ul>
                </div>
            </Nav>
        );
    }
}