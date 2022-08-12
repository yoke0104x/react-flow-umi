import { useCallback } from 'react';
import { useStore, getBezierPath, getSmoothStepPath } from 'react-flow-renderer';

function FloatingEdge(props) {
    const { id, sourceX, sourceY, sourcePosition, targetPosition, targetX, targetY, style, markerEnd, data } = props

    const d = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetPosition,
        targetX,
        targetY,
        borderRadius: 0,
    });
    console.log(props)
    console.log(d)
    let d2 = d;
    if (data.type == "1") {
        d2 = `M ${sourceX},299L ${sourceX},280Q ${sourceX},288 ${sourceX},280L 700,280 700,280L 700,${targetY} 750,${targetY}L 755,${targetY}`
    } else {
        d2 = `M ${sourceX},590L ${sourceX},600Q ${sourceX},600 ${sourceX},600L 700,600 700,600L 700,${targetY} 750,${targetY}L 755,${targetY}`
    }
    return (
        <g className="react-flow__edge react-flow__edge-straight nopan">
            <path id={id} className="react-flow__edge-path" strokeDasharray={"6 2"} d={d2} markerEnd={markerEnd} style={style} />
        </g>
    );
}

export default FloatingEdge;
