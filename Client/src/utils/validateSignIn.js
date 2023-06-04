
const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

function isEmailAddress(str) {
    return str.match(pattern);    
}

//function to validate user sign in data
export const signUpFormValidation = (formData) => {
    
    const error = {}
    const fields = ['firstName','lastName','email','mobileNumber','password','username']
    
    fields.forEach(field=>{
        if(!formData[`${field}`]){
            error[[field]] = ` * ${field} not present`
        }
    })

    if(formData.name && (formData.name.length < 3 || formData.name.length > 20)){
        error['name'] = 'Name should be atleast 4 chars and less than 20 chars'
    }

    if(formData.email && isEmailAddress(formData.email) === null){
        error['email'] = 'Not a valid email'
    }

    if(formData.mobileNumber && formData.mobileNumber.length !== 10){
        error['mobileNumber'] = 'Contact Number must must have ten digits'
    }

    if(formData.username && (formData.username.length < 3 || formData.username.length > 20)){
        error['username'] = 'username should be atleast 4 chars and less than 20 chars'
    }

    if(formData.password && (formData.password.length < 6  || formData.password.length > 30)){
        error['password'] = 'Password should be atleast 6 chars and less than 30 chars'
    }

    if(Object.keys(error).length === 0) return null
        return error
}
