const loginFields=[
    {
        labelText:"Username:",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Name",
        labelFor:"name",
        id:"name",
        name:"name",
        type:"name",
        autoComplete:"Name",
        isRequired:true,
        placeholder:"Name"  
    },
    {

        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"emailId",
        id:"emailId",
        name:"emailId",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Otp",
        labelFor:"Otp",
        id:"otp",
        name:"otp",
        type:"number",
        autoComplete:"otp",
        isRequired:true,
        placeholder:"One time Password"   
    },
]

export {loginFields,signupFields}