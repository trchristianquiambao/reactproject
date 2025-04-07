const Footer = () => {
    return (
      <footer style={{
        backgroundColor: '#001E2B',
        padding: '1rem',
        textAlign: 'center',
        color: '#aaa'
      }}>
        &copy; {new Date().getFullYear()} GreenNews. All rights reserved.
      </footer>
    )
  }
  
  export default Footer
  