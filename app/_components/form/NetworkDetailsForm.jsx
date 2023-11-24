import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";


const LabForm3 = () => {
    return (
        <>
            <Radio
                title={"Type Of Network*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Single / Multiple LAN*"}
                options={["Single", "Multiple"]}
            />
            <Radio
                title={"Topology"}
                options={["Star", "Bus", "Ring"]}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <Input
                    label={"Total LAN Available*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"No. Of Nodes Under LAN*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />

                <Input
                    label={"Network Speed*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Total No. Of Nodes Under LAN*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Total No. Of Switches Available*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Core Switch Speed*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Switch Make And Model Number*"}
                    classname={"lg:col-span-12"}
                    type={"text"} />
            </div>


            <Radio
                title={"Are Switches Manageble?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"LAN Type*"}
                options={["CAT 5E", "CAT 6"]}
            />
            <Radio
                title={"Can DHCP Server Be Switched Off (If Available)?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Can Wireless Router Be Switched Off (If Available)?*"}
                options={["Yes", "No"]}
            />
        </>
    )
}

export default LabForm3