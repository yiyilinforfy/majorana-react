export function Card({ children }) {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #ebeef0',
        borderRadius: 16,
        padding: 0,
        marginBottom: 16,
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
        transition: 'background-color 0.2s ease',
        cursor: 'pointer',
        maxWidth: '100%',
        width: '100%'
      }}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return (
      <div style={{
        padding: '12px 16px',
        fontSize: '15px',
        lineHeight: '20px',
        color: '#0f1419',
        wordWrap: 'break-word',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)'
        }
      }}>
        {children}
      </div>
    );
  }