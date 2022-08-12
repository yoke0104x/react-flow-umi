import { Handle } from "react-flow-renderer";
import "./index.less"
import classNames from "classnames";

const styles = {
    width: 0,
    height: 0,
    // border: 0
}

const A = (props) => {
    const { data, isConnectable } = props;
    const { type, handlstype, handles, total, list, listData, headerData, utilizationData, contentData, iconStyles } = data;


    return <div className="flow_box" style={{
        border: `1px solid ${data.nodeData.borderColor}`,
    }}>
        <div className={
            classNames({
                flow_title: true,
                [`flow_title_${type}`]: true,
                isWenti: data.nodeData.isWenti,
            })
        } style={{
            background: data.nodeData.background,
        }}>
            {data.nodeData.label}
            <div className="flow_box_title_icon" style={{
                background: `url(${require(`@//assets/flow_icons/${iconStyles.url}.png`)}) no-repeat center center`,
                width: iconStyles.width,
                height: iconStyles.height,
            }}>

            </div>
        </div>
        {
            type == 1 && <div className="flow_content">
                <div className="flow_c_t">
                    所含化学物质
                </div>
                <div className="flow_total">
                    <span style={{ color: data.nodeData.borderColor }}>{total ? total : 0}</span>
                    <span className="flow_total_unit">kg</span>
                </div>
            </div>
        }
        {
            type == 2 && <div className="flow_content_hash">
                {
                    headerData && <div className="flow_content_hash_total" style={{ borderBottom: `1px solid ${data.nodeData.borderColor}` }}>
                        <div>{headerData?.key}</div>
                        <div>
                            <span className="flow_hash_total" style={{ color: data?.nodeData?.borderColor }}>{utilizationData?.total}</span>
                            <span>{headerData.unit}</span>
                        </div>
                    </div>
                }
                <div className="flow_hash_name">
                    <div>
                        <div className="flow_hash_n">{contentData.name1}</div>
                        <div>
                            <span className="flow_hash_names" style={{ color: data?.nodeData?.borderColor }}>{utilizationData?.utilization}</span>
                            <span>{contentData?.unit1}</span>
                        </div>
                    </div>
                    <div>
                        <div className="flow_hash_n">{contentData.name2}</div>
                        <div>
                            <span className="flow_hash_names" style={{ color: data?.nodeData?.borderColor }}>{utilizationData?.utilizationRate}</span>
                            <span>{contentData?.unit1}</span>
                        </div>
                    </div>
                    <div className="flow_hash_br" style={{ background: data.nodeData.borderColor }} ></div>
                </div>
            </div>
        }
        {
            type == 3 && <div className="flow_content_list">
                {
                    list.map((item, index) => {
                        return <div className="flow_content_hash_item" key={index}>
                            {
                                listData ? <div className="flow_content_hash_item_name">{item.name}</div> : <div className="flow_content_hash_item_names">{item}</div>
                            }

                            {
                                listData && <div className="flow_content_hash_item_quantity">
                                    <span className="flow_hash_key">{listData?.key}</span>
                                    <div>
                                        <span>{item.quantity}</span>
                                        <span className="flow_content_hash_item_unit">{listData?.unit ?? "KG"}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        }
        {
            handles?.map((el, i) => {
                let s = el.styles ?? {}
                console.log(s, '........')
                return <Handle key={i} {...el} style={{ ...styles, ...s }} id={`${handlstype}_${i}`} />
            })
        }
    </div>
}
export default A