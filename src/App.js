import './App.css';
import Products from './components/Products';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Products></Products>
        </Row>
      </Container>
    </div>
  );
}

export default App;
