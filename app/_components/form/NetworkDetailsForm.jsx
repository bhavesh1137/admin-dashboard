import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";
import File from '../file-input/File';
import DropDown from '../dropdown/DropDown';


const NetworkDetailsForm = (props) => {

    let { register, errors } = props;
    return (
        <>
            <div className='h-full'>
                <div className="p-[16px] grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">

                    <DropDown
                        title={"Type Of Network?*"}
                        options={["LAN", "WAN"]}
                        classname={"lg:col-span-6"}
                    />

                    <DropDown
                        title={"Single / Multiple LAN?*"}
                        options={["Single", "Multiple"]}
                        classname={"lg:col-span-6"}
                    />

                    <DropDown
                        title={"LAN Type?*"}
                        options={["CAT 5E", "CAT 6"]}
                        classname={"lg:col-span-6"}
                    />

                    <DropDown
                        title={"Topology?*"}
                        options={["Star", "Bus", "Ring"]}
                        classname={"lg:col-span-6"}
                    />

                    <Input
                        label={"Total LAN Available*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('totalLANAvailable', { required: true }) }}
                        error={errors.totalLANAvailable ? "Required" : ""}
                    />
                    <Input
                        label={"No. Of Nodes Under LAN*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('nodesUnderLAN', { required: true }) }}
                        error={errors.nodesUnderLAN ? "Required" : ""}
                    />

                    <Input
                        label={"Network Speed*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('networkSpeed', { required: true }) }}
                        error={errors.networkSpeed ? "Required" : ""}
                    />
                    <Input
                        label={"Total No. Of Nodes Under LAN*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('totalNodesUnderLAN', { required: true }) }}
                        error={errors.totalNodesUnderLAN ? "Required" : ""}
                    />
                    <Input
                        label={"Total No. Of Switches Available*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('switchesAvailable', { required: true }) }}
                        error={errors.switchesAvailable ? "Required" : ""}
                    />
                    <Input
                        label={"Core Switch Speed*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('coreSwitchSpeed', { required: true }) }}
                        error={errors.coreSwitchSpeed ? "Required" : ""}
                    />
                    <Input
                        label={"Switch Make And Model Number*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('switchModel', { required: true }) }}
                        error={errors.switchModel ? "Required" : ""}
                    />
                    <Input
                        label={"Switch Model Number*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('switchModelNumber', { required: true }) }}
                        error={errors.switchModelNumber ? "Required" : ""}
                    />


                </div>

                <div className="px-[16px] grid md:grid-cols-2 lg:grid-cols-12">
                    <Radio
                        title={"Are Switches Manageble?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('switchesManagable', { required: true }) }}
                        error={errors.switchesManagable ? "Required" : ""}
                    />

                    <Radio
                        title={"Can DHCP Server Be Switched Off (If Available)?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('canDHCPswitchedOff', { required: true }) }}
                        error={errors.canDHCPswitchedOff ? "Required" : ""}
                    />
                    <Radio
                        title={"Can Wireless Router Be Switched Off (If Available)?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('canRouterSwitchedOff', { required: true }) }}
                        error={errors.canRouterSwitchedOff ? "Required" : ""}
                    />
                </div>


                <div className="p-[16px] grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                    <Input
                        label={"ISP Name*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('ISPName', { required: true }) }}
                        error={errors.ISPName ? "Required" : ""}
                    />

                    <Input
                        label={"Bandwidth (Download And Upload) in Mbps*"}
                        classname={"lg:col-span-6"}
                        type={"number"}
                        inputRegister={{ ...register('bandwidthInMbps', { required: true }) }}
                        error={errors.bandwidthInMbps ? "Required" : ""}
                    />

                    <File
                        title={"Upload Network Architecture Diagram*"}
                        classname={"lg:col-span-12"}
                    />
                </div>

                <div className="px-[16px] grid md:grid-cols-2 lg:grid-cols-12">
                    <Radio
                        title={"Security Patches Updated Regularly And Applied?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('securityPatchUpdate', { required: true }) }}
                        error={errors.securityPatchUpdate ? "Required" : ""}
                    />
                    <Radio
                        title={"Network Mornitoring Tools And Procedures In Place?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('networkMonitoringTools', { required: true }) }}
                        error={errors.networkMonitoringTools ? "Required" : ""}
                    />
                    <Radio
                        title={"Comprehencive Logs Are Maintained To Track Network Activity?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('networkActivityTrack', { required: true }) }}
                        error={errors.networkActivityTrack ? "Required" : ""}
                    />
                    <Radio
                        title={"Comprehencive Disaster Recovery Plan In Place?*"}
                        options={["Yes", "No"]}
                        span={"lg:col-span-12"}
                        radioRegister={{ ...register('disasterRecoveryPlan', { required: true }) }}
                        error={errors.disasterRecoveryPlan ? "Required" : ""}
                    />
                </div>
            </div>
        </>
    )
}

export default NetworkDetailsForm