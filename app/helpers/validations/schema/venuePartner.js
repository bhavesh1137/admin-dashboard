import { email, phone, pincode, pancard, aadhar, gstNumber } from '../common'

export const venuePartnerValidation = {

    vendorName: {
        required: "Exam Name is Required",
        minLength: { value: 3, message: "Minimum 3 characters Required" },
        maxLength: { value: 30, message: "Maximum 20 characters Required" },
    },
    name: {
        required: "Name is Required",
    },
    email: {
        required: "Email ID is Required",
        pattern: {
            value: email,
            message: "Invalid Email ID"
        }
    },
    mobile: {
        required: "Required",
        pattern: {
            value: phone,
            message: "Invalid Mobile/Phone Number"
        }
    },
    pancard: {
        required: "PAN Required",
        pattern: {
            value: pancard,
            message: "Invalid PAN Number"
        }
    },
    aadhar: {
        required: "Aadhar Required",
        pattern: {
            value: aadhar,
            message: "Invalid Aadhar Number"
        }
    },
    gst: {
        required: "GST Number Required",
        pattern: {
            value: gstNumber,
            message: "Invalid GST Number"
        }
    },
    bankAcc: {
        required: "Account Number Required",
    },
    msme: {
        required: "MSME Number Required",
    },
    ifsc: {
        required: "Account Number Required",
    },
    companyType: {
        required: "Exam Name is Required",
    },
    serviceNature: {
        required: "Nature of Service is Required",
    },
    pincode: {
        required: "Pincode is Required",
        pattern: {
            value: pincode,
            message: "Invalid Pincode"
        }
    },
    state: {
        required: "State is Required",
    },
    district: {
        required: "district is Required",
    },
    taluka: {
        required: "taluka is Required",
    },
    city: {
        required: "city is Required",
    },
    address: {
        required: "Address is Required",
    }
}