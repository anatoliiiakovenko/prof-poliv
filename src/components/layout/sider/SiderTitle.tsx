import {Divider} from "antd";

export const SiderTitle = ({title}: {title: string}) =>{
    return (
        <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Divider style={{margin: "8px 0"}}/>
        </div>
    )
}