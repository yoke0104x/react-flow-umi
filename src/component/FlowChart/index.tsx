import { useRef, useEffect } from "react";
import { Graph } from "@antv/x6";
import '@antv/x6-react-shape'
import type { Basecoat } from "@antv/x6";
import styles from './index.less';

const Index = () => {
    const conRef = useRef(null);
    const graph = useRef(null);

    useEffect(() => {
        if (conRef) {
            graph.current = new Graph({
                container: conRef.current,
                width: 800,
                height: 600,
                panning: {
                    enabled: true,
                },
                mousewheel: {
                    enabled: true,
                    modifiers: ['ctrl', 'meta'],
                },
                interacting: false
            });
        }
    }, [conRef]);



    useEffect(() => {
        // graph.current.fromJSON(data);
    }, []);

    useEffect(() => {
        graph.current.resize(window.innerWidth, window.innerHeight)

        const source = graph.current.addNode({
            x: 120,
            y: 50,
            width: 120,
            shape: 'react-shape',
            component: <MyComponent text="Hello" />,
        })

        const target = graph.current.addNode({
            x: 320,
            y: 260,
            width: 120,
            height: 50,
            shape: 'react-shape',
            component(node: Node) {
                const color = node.prop<string>('color')
                console.log(node)
                return (
                    <div
                        style={{
                            color: '#fff',
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            lineHeight: '50px',
                            borderRadius: 4,
                            background: color,
                        }}
                    >
                        {color}
                    </div>
                )
            },
        })

        graph.current.addEdge({
            source,
            target,
        })


    }, [])

    return (
        <div id="container" ref={conRef}>
            123
        </div>
    );
};
export default Index;


const MyComponent = () => {
    return (
        <div className={styles.com}>
            <div>Hello</div>
        </div>
    )
}