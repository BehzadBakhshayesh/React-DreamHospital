import React from 'react'
import { Layout} from 'antd'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import NotFound from './Pages/NotFound/NotFound'
import './App.scss'

const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

const App = () => {
 
  return (
    <>
      <main className='App'>
        <Layout className='Layout'>
          <AntHeader className='Header'>
            <Header />
          </AntHeader>
          <Content className='Content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile/:id' component={Profile} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
          <AntFooter className='Footer'>
          <span>&copy;Copyright</span>
          </AntFooter>
        </Layout>
      </main>
    </>
  )
}

export default App
