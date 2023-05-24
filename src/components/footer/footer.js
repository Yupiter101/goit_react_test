
// Вбудовані стилі css

const footerStyle = {
  fontSize: 20,
  color: 'blue',
  border: '1px solid green',
  padding: '20px 40px',
  width: 500,
  borderRadius: 5,
  backgroundColor: '#ddd',
}


export function Footer() {
  const c = 'inline css';
  return (
    <div>
      <p 
        style = {{
          fontSize: 22,
          color: 'blue',
          border: '1px solid black',
          margin: '10px 0',
          padding: '20px 40px',
          width: 500,
          borderRadius: 5,
          backgroundColor: '#ccc',
        }}
      >
        I am footer '{c}' start</p>
        <p style={footerStyle}>And footer 'const inline css' finish</p>
    </div>
  );
}