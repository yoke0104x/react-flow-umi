import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import Flows from "@/component/Flows"
const DocsPage = () => {
    return (
        <ReactFlowProvider>
            <Flows />
        </ReactFlowProvider>
    );
};

export default DocsPage;
