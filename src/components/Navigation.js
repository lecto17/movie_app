import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div>
            {/* a태그를 사용하면 메뉴를 클릭할 때마다 페이지가 새로 고침된다. */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}

            {/* <Link/>는 <Router> 밖에서 사용할 수 없다. */}
            {/* <Link>의 to 속성에 설정한 path가 <Route>의 path와 동일해야한다. */}
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
        </div>
    )
}

export default Navigation;