import React from 'react';
import Link from 'next/link';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>Щось пішло не так.</h1>
          <p>Ми вже працюємо над вирішенням цієї проблеми.</p>
          <Link href="/" className="text-blue-600 underline">
  Повернутися на головну
</Link>

         
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
