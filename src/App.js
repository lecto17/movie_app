import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0,
  }

  plus = () => {
    // setState를 사용하지 않고 바로 state의 count값을 변경하려고 할 경우
    // 불변성을 지켜야 하는 특성으로 인해 변화가 화면에 적용되지 않는다.
    this.setState({
      // this.state.count를 써야하는 것은 좋은 코드가 아니다.
      // 매일 state에 의존적이고 성능적인 문제가 발생하기 때문.
      count: this.state.count + 1
    })
  }

  minus = () => {
    // setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출한다.
    // 위,아래 같은 방식이 아닌 다음과 같은 방식으로 state의 변화를 줄 것
    // (**)state에 의존적이지 않고 사용할 수 있는 코드이다!!
    this.setState(current => ({
      count: current.count - 1
    }))
    // this.setState({
    //   count: this.state.count - 1
    // })
  }
  
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componenetWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        {/* 
          {변수}로 표시할 때, 
          첫번째 문장에 있는 방식이 아닌
          두번째 문장에 있는 방식으로 표현해야한다.
         */}
        {/* <h3>count is {count}</h3> */}
        <h3>count is {this.state.count}</h3>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
