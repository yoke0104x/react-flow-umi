import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, ConnectionLineType, MarkerType } from 'react-flow-renderer';

import ColorSelectorNode from './ColorSelectorNode';
import DashedLine from "./dashedLine"
import './index.less';

const initBgColor = '#1A192B';

const connectionLineStyle = { stroke: 'red' };
const snapGrid = [20, 20];
const nodeTypes = {
    selectorNode: ColorSelectorNode,
};

const edgeTypes = {
    dashedLine: DashedLine
}

const CustomNodeFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [bgColor, setBgColor] = useState(initBgColor);

    useEffect(() => {
        const onChange = (event) => {
            setNodes((nds) =>
                nds.map((node) => {
                    if (node.id !== '2') {
                        return node;
                    }

                    const color = event.target.value;

                    setBgColor(color);

                    return {
                        ...node,
                        data: {
                            ...node.data,
                            color,
                        },
                    };
                })
            );
        };

        setNodes([
            {
                id: '1',
                type: 'input',
                data: { label: 'An input node' },
                position: { x: 0, y: 50 },
                sourcePosition: 'right',
            },
            {
                id: '2',
                data: { label: 'Group A' },
                position: { x: 300, y: 0 },
                className: 'light',
                style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 200 },
                // sourcePosition: "left"
                targetPosition: 'left'
            },
            {
                id: '2a',
                type: 'selectorNode',
                data: { onChange: onChange, color: initBgColor },
                position: { x: 300, y: 50 },
            },
            {
                id: '3',
                type: 'output',
                data: { label: 'Output A' },
                position: { x: 650, y: 25 },
                targetPosition: 'left',
            },
            {
                id: '4',
                type: 'output',
                data: { label: 'Output B' },
                position: { x: 650, y: 100 },
                targetPosition: 'left',
            },
        ]);

        setEdges([
            {
                id: 'e1-2',
                source: '1',
                target: '2',
                markerEnd: { type: MarkerType.ArrowClosed, strokeWidth: 3 },
                type: "dashedLine"
            },
            {
                id: 'e2a-3',
                source: '2',
                target: '3',
                sourceHandle: 'a',
                // style: { stroke: '#fff' },
            },
            {
                id: 'e2b-4',
                source: '2',
                target: '4',
                sourceHandle: 'b',
                style: { stroke: '#f6ab6c' },
                className: "custom-class-dasharray",
                type: "dashedLine"
            },
        ]);
    }, []);
    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            // onEdgesChange={onEdgesChange}
            // onConnect={onConnect}
            edgeTypes={edgeTypes}
            nodeTypes={nodeTypes}
            connectionLineStyle={connectionLineStyle}
            attributionPosition="bottom-left"
            fitView
        >
            <Controls showInteractive={false} />
        </ReactFlow>
    );
};

export default CustomNodeFlow;
