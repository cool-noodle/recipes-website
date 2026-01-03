import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "/logo.svg"
import MobileNav from './MobileNav';

const Header = () => {
    const [hideRight, setHideRight] = useState("-right-[1000px]");
    const menuItems = ["מתכונים", "טיפים ומקורות", "אודות", "צרו קשר"];
    const linkNames = ["recipes", "resources", "about", "contact"]

    const onOpen = () => {
        setHideRight("left-0");
    }

    const onClose = () => {
        setHideRight("-left-[1000px]");
    }

    return (
        <>
            <div className='max-[900px]:hidden'>
                <DesktopNav menuItems={menuItems} linkNames={linkNames} Logo={logo} />
            </div>
            <div className='min-[900px]:hidden'>
                <MobileNav menuItems={menuItems} linkNames={linkNames} Logo={logo} onClose={onClose} hideRight={hideRight} onOpen={onOpen} />
            </div>
        </>
    )
}

export default Header