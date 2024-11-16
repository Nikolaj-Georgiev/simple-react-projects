import { useState } from 'react';
import GaugeRevised from './components/GaugeRevised';

function App() {
  const [sizeValue, setSizeValue] = useState('');
  const [gaugeIndex, setGaugeIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'size') {
      setSizeValue(value);
    } else if (name === 'index') {
      setGaugeIndex(Number(value));
    }
  };

  return (
    <>
      <div className='container'>
        <GaugeRevised
          size={sizeValue}
          value={gaugeIndex}
        />
        <div className='input-container'>
          <div className='size'>
            <label htmlFor='size'>Size</label>
            <select
              id='size'
              name='size'
              onChange={handleChange}
            >
              <option value='small'>small</option>
              <option value='medium'>medium</option>
              <option value='large'>large</option>
            </select>
          </div>
          <div className='index'>
            <label htmlFor='index'>Index value</label>
            <input
              type='number'
              id='index'
              name='index'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
