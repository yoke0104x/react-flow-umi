import { useCallback } from 'react';
import { useStore, getBezierPath, getSmoothStepPath } from 'react-flow-renderer';

function FloatingEdge(props) {
    const { id, sourceX, sourceY, sourcePosition, targetPosition, targetX, targetY, style, markerEnd } = props

    const d = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetPosition,
        targetX,
        targetY,
        borderRadius: 0,
    });
    return (
        <g className="react-flow__edge react-flow__edge-straight nopan">
            <path id={id} className="react-flow__edge-path" strokeDasharray={"6 2"} d={d} markerEnd={markerEnd} style={style} />
        </g>
    );
}

export default FloatingEdge;
