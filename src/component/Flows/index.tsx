import { useEffect } from "react";
import ReactFlow, { ConnectionLineType, Controls, MarkerType, useEdgesState, useNodesState } from "react-flow-renderer"
import "./index.less"
import A from "./A"
import DashedLine from "./dashedLine"
import BrokenLine from "./BrokenLine"
const color = "#3B82F6"

const Flows = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const nodeTypes = {
        a: A
    }

    const edgeTypes = {
        dashedLine: DashedLine,
        brokenLine: BrokenLine
    }

    useEffect(() => {
        setNodes([
            {
                id: '1',
                type: 'a',
                data: {
                    type: '1',
                    iconStyles: {
                        url: 'a',
                        width: 19,
                        height: 21
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '采购信息'
                    },
                    handlstype: 'a',
                    handles: [
                        {
                            type: 'source',
                            position: 'right',
                        },
                        {
                            type: 'source',
                            position: 'bottom',
                        }
                    ],
                    total: '72.0'
                },
                position: { x: 81, y: 388 },
                className: 'light',
            },
            {
                id: '2',
                type: 'a',
                data: {
                    type: '3',
                    iconStyles: {
                        url: 'b',
                        width: 21,
                        height: 21
                    },
                    nodeData: {
                        borderColor: "#0365BD",
                        background: '#0365BD33',
                        label: '供应商'
                    },
                    handlstype: 'b',
                    handles: [
                        {
                            type: 'target',
                            position: 'top',
                            styles: {
                                top: '-5px',
                                border: `1px solid ${color}`,
                            }
                        }
                    ],
                    listData: {
                        key: '化学物质：',
                        unit: 'KG',
                    },
                    list: [
                        {
                            "name": "商品2",
                            "quantity": 9000
                        },
                        {
                            "name": "壬基酚22",
                            "quantity": 9.42
                        },
                        {
                            "name": "新开发啊啊大啊大大阿达是的2阿德撒撒大声地萨达撒大声地的商品",
                            "quantity": 35000
                        }
                    ],
                },
                position: { x: 81, y: 538 },
                className: 'light',
            },
            {
                id: '3',
                type: 'a',
                data: {
                    type: '1',
                    iconStyles: {
                        url: 'c',
                        width: 18,
                        height: 23
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '废气信息'
                    },
                    handlstype: 'c',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                        },
                    ],
                    total: '213123.0'
                },
                position: { x: 409, y: 138 },
                className: 'light',
            },
            {
                id: '4',
                type: 'a',
                data: {
                    type: '1',
                    iconStyles: {
                        url: 'd',
                        width: 24,
                        height: 24
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '产品信息'
                    },
                    handlstype: 'd',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                        },
                        {
                            type: 'source',
                            position: 'right',
                        },
                        {
                            type: 'source',
                            position: 'top',
                        },
                    ],
                    total: '123123123'
                },
                position: { x: 409, y: 303 },
                className: 'light',
            },
            {
                id: '5',
                type: 'a',
                data: {
                    type: '1',
                    iconStyles: {
                        url: 'e',
                        width: 27,
                        height: 24
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '固废信息'
                    },
                    handlstype: 'e',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                        },
                        {
                            type: 'source',
                            position: 'right',
                        },
                        {
                            type: 'source',
                            position: 'bottom',
                        },
                        {
                            type: 'source',
                            position: 'right',
                            styles: {
                                top: '80%'
                            }
                        },
                    ],
                    total: '7211.0'
                },
                position: { x: 409, y: 468 },
                className: 'light',
            },
            {
                id: '6',
                type: 'a',
                data: {
                    type: '1',
                    iconStyles: {
                        url: 'f',
                        width: 24,
                        height: 21
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '废水信息'
                    },
                    handlstype: 'f',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                        },
                    ],
                    total: '213123.0'
                },
                position: { x: 409, y: 633 },
                className: 'light',
            },
            {
                id: '7',
                type: 'a',
                data: {
                    type: '3',
                    iconStyles: {
                        url: 'g',
                        width: 27,
                        height: 27
                    },
                    nodeData: {
                        borderColor: "#0365BD",
                        background: '#0365BD33',
                        label: '产品名称'
                    },
                    handlstype: 'g',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                        }
                    ],
                    listData: {
                        key: '化学物质：',
                        unit: 'KG',
                    },
                    list: [
                        {
                            "name": "商品2",
                            "quantity": 9000
                        },
                        {
                            "name": "壬基酚22",
                            "quantity": 9.42
                        },
                        {
                            "name": "新开发啊啊大啊大大阿达是的2阿德撒撒大声地萨达撒大声地的商品",
                            "quantity": 35000
                        }
                    ],
                },
                position: { x: 760, y: 19 },
                positionAbsolute: { x: 760, y: 10 },
                className: 'light',
            },
            {
                id: '8',
                type: 'a',
                data: {
                    type: '3',
                    iconStyles: {
                        url: 'h',
                        width: 23,
                        height: 23
                    },
                    nodeData: {
                        borderColor: "#0365BD",
                        background: '#0365BD33',
                        label: '固废名称'
                    },
                    handlstype: 'h',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                            // styles: {
                            //     top: '-5px',
                            //     border: `1px solid ${color}`,
                            //     left: '74%'
                            // }
                        }
                    ],
                    listData: {
                        key: '化学物质：',
                        unit: 'KG',
                    },
                    list: [
                        {
                            "name": "商品2",
                            "quantity": 9000
                        },
                        {
                            "name": "壬基酚22",
                            "quantity": 9.42
                        },
                        {
                            "name": "新开发啊啊大啊大大阿达是的2阿德撒撒大声地萨达撒大声地的商品",
                            "quantity": 35000
                        }
                    ],
                },
                position: { x: 760, y: 635 },
                className: 'light',
            },
            {
                id: '9',
                type: 'a',
                data: {
                    type: '2',
                    iconStyles: {
                        url: 'i',
                        width: 22,
                        height: 16
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '利用信息'
                    },
                    handlstype: 'i',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                        },
                        {
                            type: 'source',
                            position: 'top',
                        },
                    ],
                    headerData: {
                        key: '利用总量',
                        unit: 'kg',
                    },
                    contentData: {
                        name1: '利用率',
                        unit1: '%',
                        name2: '资源化率',
                        unit2: '%',
                    },
                    utilizationData: {
                        total: "12213123",
                        utilization: "12",
                        utilizationRate: "12"
                    }
                },
                position: { x: 1065, y: 358 },
                className: 'light',
            },
            {
                id: '10',
                type: 'a',
                data: {
                    type: '2',
                    iconStyles: {
                        url: 'j',
                        width: 25,
                        height: 25
                    },
                    nodeData: {
                        borderColor: "#0365BD",
                        background: '#0365BD33',
                        label: '产品/资源化',
                        isWenti: true
                    },
                    handlstype: 'j',
                    handles: [
                        {
                            type: 'target',
                            position: 'bottom',
                        },
                    ],
                    contentData: {
                        name1: '产品量',
                        unit1: 'kg',
                        name2: '资源化',
                        unit2: 'kg',
                    },
                    utilizationData: {
                        total: "12213123",
                        utilization: "12",
                        utilizationRate: "12"
                    }
                },
                position: { x: 1065, y: 209 },
                className: 'light',
            },
            {
                id: '11',
                type: 'a',
                data: {
                    type: '2',
                    iconStyles: {
                        url: 'k',
                        width: 20,
                        height: 22
                    },
                    nodeData: {
                        borderColor: "#FD5957",
                        background: '#fcdfdc',
                        label: '处置信息',
                    },
                    handlstype: 'k',
                    handles: [
                        {
                            type: 'target',
                            position: 'left',
                            styles: {
                                top: '21.8%',
                            }
                        },
                        {
                            type: 'source',
                            position: 'bottom',
                        }
                    ],
                    contentData: {
                        name1: '处置总量',
                        unit1: '%',
                        name2: '处置率',
                        unit2: '%',
                    },
                    utilizationData: {
                        total: "12213123",
                        utilization: "12",
                        utilizationRate: "12"
                    }
                },
                position: { x: 1065, y: 536 },
                className: 'light',
            },
            {
                id: '12',
                type: 'a',
                data: {
                    type: '3',
                    iconStyles: {
                        url: 'l',
                        width: 29,
                        height: 29
                    },
                    nodeData: {
                        borderColor: "#0365BD",
                        background: '#0365BD33',
                        label: '处置单位'
                    },
                    handlstype: 'l',
                    handles: [
                        {
                            type: 'target',
                            position: 'top',
                        }
                    ],
                    list: [
                        "12312312313",
                        "12312312313",
                        "12312312313",
                    ],
                },
                position: { x: 1065, y: 686 },
                className: 'light',
            },
        ])

        let edge = [
            {
                id: 'a1-b1',
                source: '1',
                target: '2',
                type: 'dashedLine',
                sourceHandle: 'a_1',
                markerEnd: { type: MarkerType.ArrowClosed, strokeWidth: 2, color: color },
                style: { stroke: color, strokeWidth: 2 },
            },
            {
                id: 'a0_c0',
                source: '1',
                target: '3',
                sourceHandle: 'a_0',
                targetHandle: 'c_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'a0_d0',
                source: '1',
                target: '4',
                sourceHandle: 'a_0',
                targetHandle: 'd_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'a0_e0',
                source: '1',
                target: '5',
                sourceHandle: 'a_0',
                targetHandle: 'e_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'a0_f0',
                source: '1',
                target: '6',
                sourceHandle: 'a_0',
                targetHandle: 'f_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'd2_g0',
                source: '4',
                target: '7',
                sourceHandle: 'd_2',
                targetHandle: 'g_0',
                style: { stroke: color, strokeWidth: 2 },
                markerEnd: { type: MarkerType.ArrowClosed, strokeWidth: 2, color: color },
                data: {
                    type: '1',
                },
                type: 'brokenLine',
            },
            {
                id: 'e2_f0',
                source: '5',
                target: '8',
                sourceHandle: 'e_2',
                targetHandle: 'f_0',
                style: { stroke: color, strokeWidth: 2 },
                markerEnd: { type: MarkerType.ArrowClosed, strokeWidth: 2, color: color },
                data: {
                    type: '2',
                },
                type: 'brokenLine',
            },
            {
                id: 'e1_i0',
                source: '5',
                target: '9',
                sourceHandle: 'e_1',
                targetHandle: 'i_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'd1_i0',
                source: '4',
                target: '9',
                sourceHandle: 'd_1',
                targetHandle: 'i_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'i1-j0',
                source: '9',
                target: '10',
                type: 'dashedLine',
                sourceHandle: 'i_1',
                targetHandle: 'j_0',
                markerEnd: { type: MarkerType.ArrowClosed, strokeWidth: 2, color: color },
                style: { stroke: color, strokeWidth: 2 },
            },
            {
                id: 'e3_k0',
                source: '5',
                target: '11',
                sourceHandle: 'e_3',
                targetHandle: 'k_0',
                style: { stroke: color, strokeWidth: 2 },
                type: ConnectionLineType.Step,
            },
            {
                id: 'k1_l0',
                source: '11',
                target: '12',
                type: 'dashedLine',
                sourceHandle: 'k_1',
                targetHandle: 'l_0',
                markerEnd: { type: MarkerType.ArrowClosed, strokeWidth: 2, color: color },
                style: { stroke: color, strokeWidth: 2 },
            },
        ]

        setEdges(edge)
        // setEdges([
        //     {
        //         id: '1',
        //         source: '1',
        //         target: '2',
        //         // type: 'step',
        //         // type: 'smoothstep',
        //         type: ConnectionLineType.Straight,
        //     }
        // ])
    }, [])

    return <ReactFlow
        nodes={nodes}
        edges={edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        attributionPosition="bottom-left"
        nodesConnectable={false}
    // fitView
    >
        <Controls showInteractive={false} />
    </ReactFlow>
}
export default Flows