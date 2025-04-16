import React from 'react'
import { useMessage } from '../components/MessageContext'

export default function Message() {
    const { state, dispatch } = useMessage();

    const getColor = () => {
      if (state.type === 'success') return 'green';
      if (state.type === 'error') return 'red';
      return 'black';
    };
    return (
    <div>
      <div style={{ fontSize: '24px', color: getColor(), minHeight: '30px' }}>
        {state.message}
      </div>
    
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch({ type: 'success' })}>✅ Show Success</button>
        <button onClick={() => dispatch({ type: 'error' })}>❌ Show Error</button>
        <button onClick={() => dispatch({ type: 'clear' })}>🧹 Clear</button>
      </div>
    </div>
  );
}
