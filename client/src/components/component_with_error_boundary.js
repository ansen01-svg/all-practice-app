import { ErrorBoundary } from 'react-error-boundary';
import FallBackComponent from "./components/fallback";


const ComponentWithErrorBoundary = ({ children }) => {
    return (
        <ErrorBoundary
            fallback={FallBackComponent}
        >
            { children }
        </ErrorBoundary>
    )
}


export default ComponentWithErrorBoundary;