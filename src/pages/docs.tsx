import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import Flow from "@/component/Flow"
const DocsPage = () => {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
};

export default DocsPage;
