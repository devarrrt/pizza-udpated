import React from 'react'

import { Header } from '../components'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
            </div>
        </div>
    )
}

export default MainLayout