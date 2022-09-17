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
        for (const property in error.response.data) {
            toastData.message = `${property}: ${error.response.data[property]}`
            toast(toastData)
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