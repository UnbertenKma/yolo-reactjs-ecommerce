import React from 'react'

import { Route, Switch } from 'react-router-dom'

// import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Guide from '../pages/Guide'

const Routes = () => {
    return (
        <Switch>
            {/* <Route path='/' exact component={Home}/> */}
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/guide' component={Guide} />
        </Switch>
    )
}

export default Routes
