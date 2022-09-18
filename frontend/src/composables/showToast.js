import { toast } from 'bulma-toast'

export function showErrorToast(error){
    let toastData = {
        message: 'Something went wrong. Please try again',
        type: 'is-danger',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right',
    }
    if (error.response && error.response.headers["content-type"] != "text/html") {
        if (typeof error.response.data == "string"){
            toastData.message = `${error.response.data}`
        } else if (typeof error.response.data == "object") {
            for (const property in error.response.data) {
                toastData.message = `${error.response.data[property]}`
                toast(toastData)
            }
        } else {
            toastData.message = 'Something went wrong. Please try again'
        }
    } else {
        toast(toastData)
    }
}

export function showToast(message, theme){
    toast({
        message: message,
        type: theme,
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right',
    })
}