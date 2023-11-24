
export const examValidation = {

    examName: {
        required: "Exam Name is Required",
        minLength: { value: 3, message: "Minimum 3 characters Required" },
        maxLength: { value: 30, message: "Maximum 20 characters Required" },
    },

    startDate: {
        required: "Start Date is Required"
    },

    endDate: {
        required: "Start Date is Required"
    },
    file: {
        required: 'Invalid file format. Only PDF/CSV files are allowed.',
        validate: (value) => {
            const acceptedFormats = ['csv', 'pdf'];
            const fileExtension = value[0]?.name.split('.').pop().toLowerCase();
            if (!acceptedFormats.includes(fileExtension)) {
                console.log('Invalid file format. Only PDF/CSV files are allowed.');
                return 'Invalid file format. Only PDF/CSV files are allowed.';
            }
            return true;
        }
    }

}