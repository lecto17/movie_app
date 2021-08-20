import React from 'react';
// BrowserRouter 로 사용하면 url에 /#/ 같은 표시가 없어지지만
// github pages에 설정할 때 복잡. 그래서 HashRouter를 사용
import { HashRouter, Route } from 'react-router-dom'; 
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';;

const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    )
}

export default App;