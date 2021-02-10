import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ChartJsSamplePage from './chart_js/ChartJsSamplePage';

class App extends React.Component {
  render() {
    return (
        <div>
          <ChartJsSamplePage/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));