
export const name = /^[A-Za-z\- ]+$/;
export const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const date = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
export const location = /^[A-Za-z\- ]+$/;
export const phone = /^\d{10}$/;
export const pincode = /^[1-9]{1}[0-9]{2}\s{0, 1}[0-9]{3}$/gm;
export const pancard = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
export const aadhar = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
export const gstNumber = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;