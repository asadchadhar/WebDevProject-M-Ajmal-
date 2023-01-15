import React from 'react'
import { useEffect } from 'react';
import { FaImage } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Orders from '../components/Orders';
import UserInfo from '../components/UserInfo';

const Account = () => {

    const user = useSelector((state) => state.user.currentUser);

    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate('/');
    }, []);

    return (
        <div className='account'>
            <h3 className="accountTitle">My Account</h3>
            <p className="accountSubTitle">Welcome back {user?.username}</p>
            <Tabs>
                <TabList>
                    <Tab>Info</Tab>
                    <Tab>My Orders</Tab>
                </TabList>

                <TabPanel>
                    <h3 className='accountContentTitle'>Info</h3>
                    <div className="accountContentGroups">
                        <UserInfo user={user} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accountContentTitle'>My Orders</h3>
                    <div className="ordersDiv">
                        <Orders />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Account