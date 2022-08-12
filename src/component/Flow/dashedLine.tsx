import { useCallback } from 'react';
import { useStore, getBezierPath } from 'react-flow-renderer';

import { getEdgeParams } from './utils';

function FloatingEdge(props) {
    console.log(props);
    const { id, sourceX, sourceY, sourcePosition, targetPosition, targetX, targetY, style, markerEnd } = props

    const d = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetPosition,
        targetX,
        targetY,
    });
    console.log(d)
    return (
        <g className="react-flow__edge react-flow__edge-straight nopan">
            <path id={id} className="react-flow__edge-path" strokeDasharray={"2 2"} d={d} markerEnd={markerEnd} style={style} />
        </g>
    );
}

export default FloatingEdge;
