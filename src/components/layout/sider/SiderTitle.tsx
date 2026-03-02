import {Divider} from "antd";

export const SiderTitle = ({title}: {title: string}) =>{
    return (
        <>
        <h3 className="text-lg font-semibold">{title}</h3>
        <Divider style={{margin: "8px 0"}}/>
        </>
    )
}